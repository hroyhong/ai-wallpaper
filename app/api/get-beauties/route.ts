import { getBeauties } from "@/models/beauty";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const beauties = await getBeauties(1, 50);

    return Response.json({
      code: 0,
      message: "success",
      data: beauties || [],
    });
  } catch (error) {
    console.error('Error fetching beauties:', error);
    return Response.json({
      code: 500,
      message: error instanceof Error ? error.message : 'Internal server error',
      data: [],
    }, { status: 500 });
  }
}