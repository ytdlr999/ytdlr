var init = function(){
	//document.write("test");
	document.write("<!doctype html><html><head><meta charset=\"utf-8\"><title>Watch\/Download Video<\/title><style>body{background: #333}.container{position: fixed;width: 100%;height: 100%;}.preloader{position: absolute;margin: -48px 0 0 -48px;display: block;position: relative;width: 90px;height: 90px;border: 3px solid #eb1777;border-radius: 50%;top: 50%;left: 50%;animation-delay: 0.2s}.preloader:before{content: \"\";display: block;position: absolute;width: 58px;height: 58px;border: 3px solid #3bb4e5;top: 50%;left: 50%;margin: -32px 0 0 -32px;border-radius: 50%;animation-delay: 0.4s}.preloader:after{content: \"\";display: block;position: absolute;border: 3px solid #ccdc25;width: 26px;height: 26px;top: 50%;left: 50%;margin: -16px 0 0 -16px;border-radius: 50%;animation-delay: 0.6s}.preloader,.preloader:before,.preloader:after{animation-name: Scale;animation-duration: 3s;animation-iteration-count: infinite;animation-timing-function: ease-in-out;animation-direction: alternate;-webkit-animation-name: Scale;-webkit-animation-duration: 3s;-webkit-animation-iteration-count: infinite;-webkit-animation-timing-function: ease-in-out;-webkit-animation-direction: alternate;}@keyframes Scale{25%{transform: scale(-1.2, 1.2)}50%{transform: scale(-1, -1)}75%{transform: scale(1.2, -1.2)}100%{transform: scale(1, 1)}}@-webkit-keyframes Scale{25%{-webkit-transform: scale(-1.2, 1.2)}50%{-webkit-transform: scale(-1, -1)}75%{-webkit-transform: scale(1.2, -1.2)}} div#results a{color:white;}<\/style><\/head><body><div class=\'container\' id=\'loadinganimation\'><i class=\'preloader\'><\/i><\/div><div id=\'results\' style=\'color: white;\'><\/div><\/body><\/html>");
	document.getElementById('loadingbefore').style.display = 'none';
	var currenturl = document.getElementById('beginscript').getAttribute('currenturl');
	var patt = /(?!s?ilverproxy1?)[a-zA-Z0-9_-]{11}/;
	if (patt.test(currenturl)) {
		var id = patt.exec(currenturl);
	} else {
		var id = "dQw4w9WgXcQ";
	}
	var results = document.getElementById('results');
	var loading = document.getElementById('loadinganimation');
	results.style.display = 'none';
	/* setTimeout(function(){
		loading.style.display = 'none';
		results.style.display = 'block';
	}, 1000); */
	
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			text = xmlHttp.responseText;
			var textJson = JSON.parse(text);
			var table = '<table>';
			for (var i=0; i<textJson.formats.length; i++) {
				switch (parseInt(textJson.formats[i].format_id)) {
					// MP4
					case 18: table+='<tr><td><a href="'+textJson.formats[i].url+'">18- 360p MP4</a></td></tr>'; break;
					case 22: table+='<tr><td><a href="'+textJson.formats[i].url+'">22- 720p MP4</a></td></tr>'; break;
					case 37: table+='<tr><td><a href="'+textJson.formats[i].url+'">37- 1080p MP4</a></td></tr>'; break;
					case 59: table+='<tr><td><a href="'+textJson.formats[i].url+'">59- 480p MP4</a></td></tr>'; break;
					case 78: table+='<tr><td><a href="'+textJson.formats[i].url+'">78- 480p MP4</a></td></tr>'; break;
					
					// Apple HLS
					case 92: table+='<tr><td><a href="'+textJson.formats[i].url+'">92- HLS 240</a></td></tr>'; break;
					case 93: table+='<tr><td><a href="'+textJson.formats[i].url+'">93- HLS 360</a></td></tr>'; break;
					case 94: table+='<tr><td><a href="'+textJson.formats[i].url+'">94- HLS 480</a></td></tr>'; break;
					case 95: table+='<tr><td><a href="'+textJson.formats[i].url+'">95- HLS 720</a></td></tr>'; break;
					case 96: table+='<tr><td><a href="'+textJson.formats[i].url+'">96- HLS 1080</a></td></tr>'; break;
					case 132: table+='<tr><td><a href="'+textJson.formats[i].url+'">132- HLS 240</a></td></tr>'; break;
					case 151: table+='<tr><td><a href="'+textJson.formats[i].url+'">151- HLS 72</a></td></tr>'; break;
					
					// DASH mp4
					case 133: table+='<tr><td><a href="'+textJson.formats[i].url+'">133- 240p DASH MP4</a></td></tr>'; break;
					case 134: table+='<tr><td><a href="'+textJson.formats[i].url+'">134- 360p DASH MP4</a></td></tr>'; break;
					case 135: table+='<tr><td><a href="'+textJson.formats[i].url+'">135- 480p DASH MP4</a></td></tr>'; break;
					case 136: table+='<tr><td><a href="'+textJson.formats[i].url+'">136- 720p DASH MP4</a></td></tr>'; break;
					case 137: table+='<tr><td><a href="'+textJson.formats[i].url+'">137- 1080p DASH MP4</a></td></tr>'; break;
					case 138: table+='<tr><td><a href="'+textJson.formats[i].url+'">138- DASH</a></td></tr>'; break;
					case 160: table+='<tr><td><a href="'+textJson.formats[i].url+'">160- 144p DASH MP4</a></td></tr>'; break;
					case 264: table+='<tr><td><a href="'+textJson.formats[i].url+'">264- 1440p DASH MP4</a></td></tr>'; break;
					case 298: table+='<tr><td><a href="'+textJson.formats[i].url+'">298- 720p DASH MP4 60fps</a></td></tr>'; break;
					case 299: table+='<tr><td><a href="'+textJson.formats[i].url+'">299- 1080p DASH MP4 60fps</a></td></tr>'; break;
					case 266: table+='<tr><td><a href="'+textJson.formats[i].url+'">266- 2160p DASH MP4</a></td></tr>'; break;
				}
			}
			table += '</table>';
			results.innerHTML = table;
			loading.style.display = 'none';
			results.style.display = 'block';
		}		
	}
	xmlHttp.open("GET", "https://ytdlr9475.tk/ytdl/getinfo.php?id="+id, true); // true for asynchronous 
	xmlHttp.send(null);
	
}

function httpGetAsync(theUrl)
{
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() { 
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
			document.getElementById('results').innerHTML = xmlHttp.responseText;
	}
	xmlHttp.open("GET", theUrl, true); // true for asynchronous 
	xmlHttp.send(null);
}

init();