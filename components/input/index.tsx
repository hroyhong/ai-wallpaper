"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function () {
    
    const [description, setDescription] = useState("");

    const generateWallpaper = async function() {
        const params = {
            description: description,
        }

        const result = await fetch("/api/generate-wallpaper", {
            method: "POST",
            body: JSON.stringify(params),
        });

        const { data } = await result.json();

        if (data) {
            console.log("new beauty: ", data);
        }
    }


    const handleGenerate = async function() {
        console.log("Current description: ", description);
        if (!description) {
            alert("Please enter a description for your beauty");
            return;
        }

        await generateWallpaper();
    }
 
    return (
        <div className="max-w-6xl flex flex-row items-center">
        <Input type="text" 
        placeholder="Please describe the beauty you want to generate" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}/>
        <div>
            <Button className="ml-8" onClick={handleGenerate}>Generate</Button>
        </div>
        </div>
     )
}


