'use client'

import style from './share.module.css';
import React, {useState} from 'react';
import Styles from './Theme';


function shareWhatsApp() {
    let url = window.location.href;
    let shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
}

function shareFacebook() {
    let url = window.location.href;
    let shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
}

export default function Share() {
    const [showShare, setShowShare] = useState(false);
    const [showBlur, setShowBlur] = useState(false);

    function showShareDiv() {
        setShowShare(true);
        setShowBlur(true);
    }

    function closeFunction(){
        setShowShare(false);
        setShowBlur(false);
    }
    
    function copyLink() {
        let url = window.location.href;
        navigator.clipboard.writeText(url);
        //setShowLinkCopied(true);
        let linkCopied = document.getElementById("linkCopied");
        setTimeout(() => linkCopied.style.opacity = '1', 250);
        setTimeout(() => linkCopied.style.opacity = '0', 4000);
    }

    return(
        <div>
            <div className = {style.wholePage} style = {{display: showBlur ? "flex" : "none"}}></div>
            <img 
                className = {style.shareButton} 
                src = './shareButton.svg'
                onClick = {showShareDiv}
            />
            <div className = {style.bigContainer} style = {{display: showShare ? "flex" : "none"}}>
                <div className = {style.overlayContent}>
                    <div className = {style.rowContainer}>
                        <div className = {style.shareHeading}>Share</div>
                        <img 
                            className = {style.close} 
                            src = './close.svg'
                            onClick = {closeFunction}
                        />
                    </div>
                    <div className = {style.shareOptions}>
                        <div id = "option" className = {style.option} onClick = {copyLink}>
                            <img src = './copyLink.svg' className = {style.shareImages}/>
                            <div className = {style.shareText}>Copy Link</div>
                        </div>
                        <div id = "option" className = {style.option} onClick = {shareWhatsApp}>
                            <img src = './whatsApp.svg' className = {style.shareImages}/>
                            <div className = {style.shareText}>WhatsApp</div>
                        </div>
                        <div id = "option" className = {style.option} onClick = {shareFacebook}>
                            <img src = './facebook.svg' className = {style.shareImages}/>
                            <div className = {style.shareText}>Facebook</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = {style.linkCopied} id = "linkCopied">
                <div className = {style.overlayContent}>
                    <div className = {style.linkCopiedText}> 
                        Link Copied to Clipboard
                    </div>
                </div>
            </div>
        </div>
    );
}