function main(){
    // I don't know, just paste this into a bookmarklet. options to open in new tab or copy link. This is because something is making it so I can't right click on the video lel
    javascript:window.open(document.querySelectorAll('video').item(0).src);window.opener.location.reload(false);window.opener.location.replace();
    javascript:navigator.clipboard.writeText(document.querySelectorAll('video').item(0).src);window.opener.location.reload(false);window.opener.location.replace();
}

