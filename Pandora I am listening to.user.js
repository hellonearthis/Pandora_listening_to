// ==UserScript==
// @name         Pandora I am listening to
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Pandora I am listening to
// @author       Brett Cooper
// @match        http*://www.pandora.com/*
// @include      https://www.pandora.com/station/play/*
// @require      https://gist.githubusercontent.com/kepkin/ff99090c410ab1b5c8fa/raw/a1e229b38cb6eb169556ae9b5e751e5c81d59929/waitForKeyElements.js
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==

waitForKeyElements ("#trackInfoContainer .songTitle", liveNow);

function liveNow (jNode) {
    var titleText  = jNode.text ().trim ();
    var lastText   = jNode.data ("lastText")  ||  "";

    if (titleText != lastText) {
      jNode.data ("lastText", titleText);
      console.log (`Now Playing: "${titleText}" by "${$("a.artistSummary")["0"].innerHTML}" from the Album >${$("a.albumTitle")["0"].innerHTML}<`);
    }
    return true;  //-- Tell waitForKeyElements to keep checking this node.
}