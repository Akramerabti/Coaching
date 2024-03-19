import React from 'react'
import { KeyRound } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

export default function page() {
    return (
     <div className='flex items-center justify-center w-full h-screen'>
        <div className='w-96 rounded-md border p-5 space-y-2'>
        <KeyRound/>
                <h1 className='text-2xl font-bold text-center'>Personal Journey</h1>
                <p className='text-center text-sm text-gray-300'>Sign In Today!</p>
                <div className='flex flex-col gap-2 p-1'>
                <Button className='w-full flex items-center gap-2' variant="outline">
                <VscGithub /> Github
                </Button>
                <Button className='w-full flex items-center gap-2' variant="outline" >
                    <FcGoogle /> Google
                </Button>
                </div>
        </div>
        
        </div>
    );
}
