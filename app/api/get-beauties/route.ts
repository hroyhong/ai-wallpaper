import { Beauty } from "@/types/beauty";

export function GET(req: Request) {
  const beauties: Beauty[] = [
    {
      img_description: "Athena",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-5W912aNQP369f36AkQPur851.png?st=2025-01-11T07%3A42%3A28Z&se=2025-01-11T09%3A42%3A28Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-11T00%3A08%3A40Z&ske=2025-01-12T00%3A08%3A40Z&sks=b&skv=2024-08-04&sig=rrAb9OZcVom2jTu4hirrWpRYMIFtwBOFjsFYS4DKsMQ%3D",
      user_avatar:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-5W912aNQP369f36AkQPur851.png?st=2025-01-11T07%3A42%3A28Z&se=2025-01-11T09%3A42%3A28Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-11T00%3A08%3A40Z&ske=2025-01-12T00%3A08%3A40Z&sks=b&skv=2024-08-04&sig=rrAb9OZcVom2jTu4hirrWpRYMIFtwBOFjsFYS4DKsMQ%3D",
    },
    {
      img_description: "Venus",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-d1kGgLak1VZbkpHs8nuebr6z.png?st=2025-01-11T07%3A56%3A05Z&se=2025-01-11T09%3A56%3A05Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-11T00%3A15%3A36Z&ske=2025-01-12T00%3A15%3A36Z&sks=b&skv=2024-08-04&sig=txvR%2BizHMaTgthaxL4f0h2GgzlJcp7lISRkB3XEZ3hQ%3D",
      user_avatar:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-d1kGgLak1VZbkpHs8nuebr6z.png?st=2025-01-11T07%3A56%3A05Z&se=2025-01-11T09%3A56%3A05Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-11T00%3A15%3A36Z&ske=2025-01-12T00%3A15%3A36Z&sks=b&skv=2024-08-04&sig=txvR%2BizHMaTgthaxL4f0h2GgzlJcp7lISRkB3XEZ3hQ%3D",
    },
    {
      img_description: "Hijabi",
      img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-d3FPKMi19ojRosCWORlmrAz6.png?st=2025-01-11T08%3A00%3A55Z&se=2025-01-11T10%3A00%3A55Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-11T00%3A08%3A00Z&ske=2025-01-12T00%3A08%3A00Z&sks=b&skv=2024-08-04&sig=GERZx4UyWc1Ixl2m/9M8duvhKEocyMr8kL1bhpLaHoM%3D",
      user_avatar:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-d3FPKMi19ojRosCWORlmrAz6.png?st=2025-01-11T08%3A00%3A55Z&se=2025-01-11T10%3A00%3A55Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-11T00%3A08%3A00Z&ske=2025-01-12T00%3A08%3A00Z&sks=b&skv=2024-08-04&sig=GERZx4UyWc1Ixl2m/9M8duvhKEocyMr8kL1bhpLaHoM%3D",
    },
    {
        img_description: "Circassian",
        img_url:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-1CZEli4lUSFvhQjpsyUM7UaC.png?st=2025-01-11T08%3A05%3A41Z&se=2025-01-11T10%3A05%3A41Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-11T01%3A40%3A53Z&ske=2025-01-12T01%3A40%3A53Z&sks=b&skv=2024-08-04&sig=FY5EExPawzf91gJsuf1GS8luqG%2BAjX/stw2maKfbCQU%3D",
        user_avatar:
        "https://oaidalleapiprodscus.blob.core.windows.net/private/org-P05JZjT7FDFmCnGygGiDONAi/user-OfK5TsZ3zQg4M0B409rA3RSl/img-1CZEli4lUSFvhQjpsyUM7UaC.png?st=2025-01-11T08%3A05%3A41Z&se=2025-01-11T10%3A05%3A41Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-01-11T01%3A40%3A53Z&ske=2025-01-12T01%3A40%3A53Z&sks=b&skv=2024-08-04&sig=FY5EExPawzf91gJsuf1GS8luqG%2BAjX/stw2maKfbCQU%3D",
    },
  ];

  return Response.json({
    code: 0,
    message: "success",
    data: beauties,
  });
}