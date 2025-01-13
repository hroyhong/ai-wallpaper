"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Beauty } from "@/types/beauty";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setBeauties: Dispatch<SetStateAction<Beauty[]>>
}

function BeautyInput({ setBeauties }: Props) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const generateBeauty = async function() {
    const params = {
      description: description,
    }

    setLoading(true);

    try {
      const result = await fetch("/api/generate-beauty", {
        method: "POST",
        body: JSON.stringify(params),
      });

      if (!result.ok) {
        const errorData = await result.json();
        throw new Error(errorData.message || 'Failed to generate beauty');
      }

      const { data } = await result.json();

      if (data) {
        const newBeauty: Beauty = {
          img_url: data.img_url,
          img_description: data.img_description,
          img_size: data.img_size,
          user_email: data.user_email,
          llm_name: data.llm_name,
          llm_params: data.llm_params,
          created_at: data.created_at,
          user_avatar: data.img_url // Using same image as avatar for now
        };
        console.log("new beauty: ", newBeauty);
        setBeauties((prevBeauties: Beauty[]) => [newBeauty, ...prevBeauties]);
      }
    } catch (error) {
      console.error("Failed to generate beauty:", error);
      alert(error instanceof Error ? error.message : 'Failed to generate beauty');
    } finally {
      setLoading(false);
    }
  }

  const handleGenerate = async function() {
    console.log("Current description: ", description);
    if (!description) {
      alert("Please enter a description for your beauty");
      return;
    }

    await generateBeauty();
  }
 
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center mb-24 px-4">
      <Input 
        type="text" 
        placeholder="Please describe the beauty you want to generate" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !loading) {
            handleGenerate();
          }
        }}
        disabled={loading}
        className="flex-1 min-w-[300px] text-lg h-12"
      />
      <Button 
        className="md:ml-8 mt-4 md:mt-0 px-8 h-12 text-lg" 
        onClick={handleGenerate} 
        disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </Button>
    </div>
  )
}

BeautyInput.displayName = 'BeautyInput';

export default BeautyInput;


