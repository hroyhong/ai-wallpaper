"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import { useEffect } from "react";
import Beauties from "@/components/beauties";
import { useUser } from "@clerk/nextjs";
import Footer from "@/components/footer";
import { useState } from "react";
import { Beauty } from "@/types/beauty";
import Input from "@/components/input";

export default function Home() {

  const [beauties, setBeauties] = useState<Beauty[]>([]);
  const { isSignedIn } = useUser();

  const fetchBeauties = async function() {
    const result = await fetch("/api/get-beauties");
    const { data } = await result.json();

    if (data) {
      setBeauties(data);
    }
  }

  useEffect(() => {
    fetchBeauties();
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <Header />
      <Hero />
      <Input setBeauties={setBeauties} />
      <Beauties beauties={beauties} setBeauties={setBeauties} />
      <Footer />
    </div>
  );
}
