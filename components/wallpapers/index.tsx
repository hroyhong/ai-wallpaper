"use client";

import { useEffect, useState } from "react";
import { Wallpaper } from "@/types/wallpaper";

export default function() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[] | null>(null);

  const fetchWallpapers = async function() {
    const result = await fetch("/api/get-wallpapers");
    const { data } = await result.json();

    if (data) {
      setWallpapers(data);
    }
  }

  useEffect(() => {
    fetchWallpapers();
  }, []);

  return (
    <section className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold md:text-5xl">All Beauties</h2>
          <p className="mt-4 text-gray-600">Discover our collection of stunning beauties</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wallpapers && wallpapers.map((wallpaper: Wallpaper, idx: number) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950">
              <img
                src={wallpaper.img_url}
                alt={wallpaper.img_description}
                className="w-full h-64 object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold truncate">{wallpaper.img_description}</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  {wallpaper.img_description}
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
