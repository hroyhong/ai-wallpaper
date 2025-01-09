import { Wallpaper } from "@/types/wallpaper";

export function GET(req: Request) {
  const wallpapers: Wallpaper[] = [
    {
      img_description: "beauty1",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-ObJWHUCYq4VXbRdkI7QFSG8C.png?st=2024-12-21T16%3A25%3A57Z&se=2024-12-21T18%3A25%3A57Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-20T19%3A28%3A18Z&ske=2024-12-21T19%3A28%3A18Z&sks=b&skv=2024-08-04&sig=gOJMY3dY8442xnQ/8%2B%2BI7OZY0eCL%2Bgu9YrPtwtoeVy4%3D",
    },
    {
      img_description: "beauty2",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-ObJWHUCYq4VXbRdkI7QFSG8C.png?st=2024-12-21T16%3A25%3A57Z&se=2024-12-21T18%3A25%3A57Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-20T19%3A28%3A18Z&ske=2024-12-21T19%3A28%3A18Z&sks=b&skv=2024-08-04&sig=gOJMY3dY8442xnQ/8%2B%2BI7OZY0eCL%2Bgu9YrPtwtoeVy4%3D",
    },
    {
      img_description: "beauty3",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-ObJWHUCYq4VXbRdkI7QFSG8C.png?st=2024-12-21T16%3A25%3A57Z&se=2024-12-21T18%3A25%3A57Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-20T19%3A28%3A18Z&ske=2024-12-21T19%3A28%3A18Z&sks=b&skv=2024-08-04&sig=gOJMY3dY8442xnQ/8%2B%2BI7OZY0eCL%2Bgu9YrPtwtoeVy4%3D",
    },
    {
        img_description: "beauty4",
        img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-ObJWHUCYq4VXbRdkI7QFSG8C.png?st=2024-12-21T16%3A25%3A57Z&se=2024-12-21T18%3A25%3A57Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-12-20T19%3A28%3A18Z&ske=2024-12-21T19%3A28%3A18Z&sks=b&skv=2024-08-04&sig=gOJMY3dY8442xnQ/8%2B%2BI7OZY0eCL%2Bgu9YrPtwtoeVy4%3D",
    },
  ];

  return Response.json({
    code: 0,
    message: "success",
    data: wallpapers,
  });
}