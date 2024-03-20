"use client";

import React from 'react'
import { KeyRound } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { supabaseBrowser } from '@/lib/supabase/browser';

export default function page() {

    const handleLoginWithOAuth= (provider:"github"|"google") => {
        const supabase = supabaseBrowser();

        supabase.auth.signInWithOAuth({ provider, options:{redirectTo: window.location.origin + "/auth/callback",} 
        });
    }

    return (
     <div className='flex items-center justify-center w-full h-screen'>
        <div className='w-96 rounded-md border p-5 space-y-2 relative bg-black'>
        <KeyRound/>
                <h1 className='text-2xl font-bold text-center'>Personal Journey</h1>
                <p className='text-center text-sm text-gray-300'>Sign In Today!</p>
                <div className='flex flex-col gap-2 p-1'>
                <Button className='w-full flex items-center gap-2' variant="outline" onClick={()=>handleLoginWithOAuth("github")}>
                <VscGithub /> Github
                </Button>
                <Button className='w-full flex items-center gap-2' variant="outline" onClick={()=>handleLoginWithOAuth("google")} >
                    <FcGoogle /> Google
                </Button>
                </div>
                <div className='glowBox -z-10' >

                </div>
        </div>
        
        </div>
    );
}
