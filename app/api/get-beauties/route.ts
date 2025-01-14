import { getBeauties } from "@/models/beauty";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('GET /api/get-beauties - Starting request');
    const beauties = await getBeauties(1, 50);
    console.log('GET /api/get-beauties - Retrieved beauties:', beauties?.length || 0);

    return Response.json({
      code: 0,
      message: "success",
      data: beauties || [],
    });
  } catch (error) {
    console.error('GET /api/get-beauties - Error:', error);
    const errorMessage = error instanceof Error 
      ? error.message 
      : 'Internal server error';
      
    return Response.json({
      code: 500,
      message: errorMessage,
      data: [],
    }, { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
}