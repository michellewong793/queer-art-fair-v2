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
        <div className = {style.button} onClick = {checkLoggedIn}>
            <div className = {style.text}>
                Go to Market
            </div>
        </div>
    );
}
