"use client";

import { Wallpaper } from "@/types/wallpaper";
import { useState } from "react";
import { useEffect } from "react";

export default function () {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([]);
  const fetchWallpapers = async function () {
    const result = await fetch("http://localhost:3001/api/get-wallpapers");
    const { data } = await result.json();
    if (data) {
      setWallpapers(data);
    }
  };

  useEffect(() => {
    fetchWallpapers();
  }, []);

  return (
    <section className="max-w-lg mx-auto">
      <div className="flex items-center gap-2">
        {wallpapers.map((v: Wallpaper, idx: number) => {
          return (
            <div className="flex flex-col gap-2">
              <h2> {v.img_description} </h2>
              <img src={v.img_url} alt={v.img_description} />
              <p>{v.image_size}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
