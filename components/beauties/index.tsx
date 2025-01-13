"use client";

import { Beauty } from "@/types/beauty";
import Image from 'next/image';

interface Props {
  beauties: Beauty[]
}

function Beauties({ beauties }: Props) {
  return (
    <section className="max-w-6xl mx-auto my-10">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">All Beauties</h2>
        <p className="mt-4 text-gray-600">Discover our collection of stunning beauties</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beauties && beauties.map((beauty: Beauty, idx: number) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950">
            <div className="relative w-full h-64">
              {beauty.img_url && (
                <Image
                  src={beauty.img_url}
                  alt={beauty.img_description || 'Beauty image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 dark:text-gray-400 line-clamp-2 flex-1">{beauty.img_description}</h3>
                {beauty.user_avatar && (
                  <div className="relative w-8 h-8 ml-2">
                    <Image
                      src={beauty.user_avatar}
                      alt="User Avatar"
                      fill
                      className="rounded-full object-cover"
                      sizes="32px"
                    />
                  </div>
                )}
              </div>
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

Beauties.displayName = 'Beauties';

export default Beauties;
