import { Wallpaper } from "@/types/wallpaper";

export function GET(req: Request) {
  const wallpapers: Wallpaper[] = [
    {
      img_description: "beauty1",
      img_url:
        "https://hhspic-1309401833.cos.ap-shanghai.myqcloud.com/pic/202412311451857.jpg",
    },
    {
      img_description: "beauty2",
      img_url:
        "https://hhspic-1309401833.cos.ap-shanghai.myqcloud.com/pic/202412311451857.jpg",
    },
    {
      img_description: "beauty3",
      img_url:
        "https://hhspic-1309401833.cos.ap-shanghai.myqcloud.com/pic/202412311451857.jpg",
    },
    {
        img_description: "beauty4",
        img_url:
        "https://hhspic-1309401833.cos.ap-shanghai.myqcloud.com/pic/202412311451857.jpg",
    },
  ];

  return Response.json({
    code: 0,
    message: "success",
    data: wallpapers,
  });
}