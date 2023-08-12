'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import style from './marketplaceAccess.module.css';

export default function MarketplaceAccess() {
    const supabase = createClientComponentClient();

    async function checkLoggedIn() {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            window.location.href = "/marketplace";
        }
        else {
            window.location.href = "/login";
        }
    }

    return(
        <button className = {style.button} onClick = {checkLoggedIn}>
            <p className = {style.text}>
                Go to Market
            </p>
        </button>
    );
}
