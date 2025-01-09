import { getOpenaiClient } from "@/service/openai";

export async function POST(req: Request) {
  const client = getOpenaiClient();
  const { description } = await req.json();

  console.log("description: ", description);

  const result = await client.images.generate({
    prompt: `the most beautiful lady like a goddess ${description}`,
    model: "dall-e-2",
    n: 1,
    quality: "standard",
    size: "1024x1024",
    response_format: "url",
    style: "natural",
  });


  console.log("beautiful lady url", result);

  return Response.json({
    code: 0,
    message: "success",
    description: description,
    data: result.data[0].url,
  });

}
