import { useState } from 'react'
import font from "/components/styles.css";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'
import React from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'


function App({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createPagesBrowserClient())

    return (
        <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
        >
            <Head>
                <title>
                    an inclusive space to make, share, and sell your craft
                </title>
            </Head>
            <Component {...pageProps} />
            <Analytics />
        </SessionContextProvider>
    )
}

export default App