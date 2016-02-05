javascript:(function(){
	var newtab = window.open();
	newtab.document.write("<div id=\"loadingbefore\">loading...</div>");
	newtab.document.write("<script src=\"https://ytdlr999.github.io/ytdlr/thing.js?v=" + parseInt(Math.random()*99999999) + "\" currenturl=\"" + window.location.pathname + window.location.search + "\" id=\"beginscript\"></scr"+"ipt>");
})();