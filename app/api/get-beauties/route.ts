import { getBeauties } from "@/models/beauty";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const { userId } = getAuth(request);
    if (!userId) {
      return Response.json({
        code: 401,
        message: "Unauthorized - Please sign in",
        data: [],
      }, { status: 401 });
    }

    console.log('GET /api/get-beauties - Starting request for user:', userId);
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
      
    // Check if it's an authentication error
    if (errorMessage.includes('auth') || errorMessage.includes('unauthorized')) {
      return Response.json({
        code: 401,
        message: errorMessage,
        data: [],
      }, { 
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    }
      
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