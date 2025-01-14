"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import { useEffect, useState } from "react";
import Beauties from "@/components/beauties";
import Footer from "@/components/footer";
import { Beauty } from "@/types/beauty";
import Input from "@/components/input";

export default function Home() {
  const [beauties, setBeauties] = useState<Beauty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBeauties = async function() {
    try {
      setLoading(true);
      setError(null);
      const result = await fetch("/api/get-beauties");
      if (!result.ok) {
        throw new Error('Failed to fetch beauties');
      }
      const { data } = await result.json();

      if (data) {
        setBeauties(data);
      }
    } catch (err) {
      console.error('Error fetching beauties:', err);
      setError(err instanceof Error ? err.message : 'Failed to load beauties');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBeauties();
  }, []);
  
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Input setBeauties={setBeauties} />
        {loading ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center p-4">{error}</div>
        ) : (
          <Beauties beauties={beauties} />
        )}
      </main>
      <Footer />
    </div>
  );
}
