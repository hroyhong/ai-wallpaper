import { getBeauties } from "@/models/beauty";

export async function GET() {
  const beauties = await getBeauties(1, 50);

  return Response.json({
    code: 0,
    message: "success",
    data: beauties,
  });
}