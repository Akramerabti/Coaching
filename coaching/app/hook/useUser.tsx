import { supabaseBrowser } from '@/lib/supabase/browser'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function useUser() {
  return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const supabase = supabaseBrowser();
            const {data} = await supabase.auth.getSession();
            if (data.session?.user) {
                // fetch user info profile
                const {data:user} = await supabase.from('profiles').select("*").eq('id', data.session.user.id);
                return user;
            }

        },
    })

}
