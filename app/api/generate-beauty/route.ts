import { downloadAndUploadImage } from "@/lib/s3";
import { insertBeauty } from "@/models/beauty";
import { getOpenaiClient } from "@/service/openai";
import { Beauty } from "@/types/beauty";
import { ImageGenerateParams } from "openai/resources/images.mjs";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@/types/user";
import { saveUser } from "@/service/user";

export async function POST(req: Request) {
  try {
    const client = getOpenaiClient();
    const { description } = await req.json();

    const user = await currentUser();
    if (!user || !user.emailAddresses || user.emailAddresses.length === 0) {
      return Response.json({
        code: -2,
        message: "user not logged in",
      });
    }
  
    const user_email = user.emailAddresses[0].emailAddress;
    const nickname = user.firstName;
    const avatarUrl = user.imageUrl;
    const userInfo: User = {
      email: user_email,
      nickname: nickname || "",
      avatar_url: avatarUrl,
    };

    await saveUser(userInfo);

    console.log("description: ", description);

    const image_size = "1024x1024";
    const llm_name = "dall-e-2";

    const llm_params: ImageGenerateParams = {
      prompt: `the most beautiful lady ${description} fit and gorgeous`,
      model: llm_name,
      n: 1,
      quality: "standard",
      size: image_size,
      response_format: "url",
      style: "natural",
    }

    const result = await client.images.generate(llm_params);
    console.log("result: ", result);

    const created_at = new Date().toISOString();

    const raw_img_url = result.data[0].url;
    if (!raw_img_url) {
      return Response.json({
        code: -1,
        message: "generate image failed",
      });
    }

    const img_name = encodeURIComponent(description);
    const s3_img = await downloadAndUploadImage(
      raw_img_url,
      process.env.AWS_BUCKET_NAME || "ai-beauty",
      `beauties/${img_name}.png`);

    const img_url = s3_img.Location;

    const beauty: Beauty = {
      user_email: user_email,
      img_description: description,
      img_size: image_size,
      img_url: img_url,
      llm_name: llm_name,
      llm_params: JSON.stringify(llm_params),
      created_at: created_at,
    }

    await insertBeauty(beauty);

    return Response.json({
      code: 0,
      message: "success",
      data: beauty
    });
  } catch (error) {
    console.error('Error in generate-beauty:', error);
    return Response.json({
      code: -1,
      message: error instanceof Error ? error.message : 'Failed to generate beauty',
    }, { status: 500 });
  }
}
