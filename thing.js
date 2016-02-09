var init = function(){
	//document.write("test");
	document.write("<!doctype html><html><head><meta charset=\"utf-8\"><title>Watch Video<\/title><style>html, body{height: 100%;margin: 0;font-family: sans-serif;}body{background: #333}#results{\/*display: inline-flex;*\/ display: none;height: 100%;width: 100%;color: white;}#results-inner{margin: auto 5px;width: 100%;color: white;text-align: center;}a.format-button{max-width: 400px;background-color: #4caf50;border: none;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;color: white;font-family: sans-serif;padding: 15px 32px;margin: 5px auto;text-align: center;text-decoration: none;font-size: 16px;display: block;}#error-text{color: #fdff95;display: none;}#results-text{max-width: 600px; margin: 1em auto; text-align: center; font-size: 16px;}#results-text p{margin-top: 5px;margin-bottom: 2px;}#b360{background-color: #4caf50; display: none;}#b480{background-color: #e7e7e7; color: black; display: none;}#b720{background-color: #0099CC; display: none;}#b1080{background-color: #c6382e; display: none;}.container{position: fixed;width: 100%;height: 100%;}.preloader{position: absolute;margin: -48px 0 0 -48px;display: block;position: relative;width: 90px;height: 90px;border: 3px solid #eb1777;border-radius: 50%;top: 50%;left: 50%;animation-delay: 0.2s}.preloader:before{content: \"\";display: block;position: absolute;width: 58px;height: 58px;border: 3px solid #3bb4e5;top: 50%;left: 50%;margin: -32px 0 0 -32px;border-radius: 50%;animation-delay: 0.4s}.preloader:after{content: \"\";display: block;position: absolute;border: 3px solid #ccdc25;width: 26px;height: 26px;top: 50%;left: 50%;margin: -16px 0 0 -16px;border-radius: 50%;animation-delay: 0.6s}.preloader, .preloader:before, .preloader:after{animation-name: Scale;animation-duration: 3s;animation-iteration-count: infinite;animation-timing-function: ease-in-out;animation-direction: alternate;-webkit-animation-name: Scale;-webkit-animation-duration: 3s;-webkit-animation-iteration-count: infinite;-webkit-animation-timing-function: ease-in-out;-webkit-animation-direction: alternate;}@keyframes Scale{25%{transform: scale(-1.2, 1.2)}50%{transform: scale(-1, -1)}75%{transform: scale(1.2, -1.2)}100%{transform: scale(1, 1)}}@-webkit-keyframes Scale{25%{-webkit-transform: scale(-1.2, 1.2)}50%{-webkit-transform: scale(-1, -1)}75%{-webkit-transform: scale(1.2, -1.2)}}<\/style><\/head><body><div class=\'container\' id=\'loadinganimation\'><i class=\'preloader\'><\/i><\/div><div id=\"results\"><div id=\"results-inner\"><a href=\"#\" id=\"b360\" class=\"format-button\">360p<\/a><a href=\"#\" id=\"b480\" class=\"format-button\">480p<\/a><a href=\"#\" id=\"b720\" class=\"format-button\">720p<\/a><a href=\"#\" id=\"b1080\" class=\"format-button\">1080p<\/a><div id=\"error-text\"><\/div><div id=\"results-text\"><p>Keep this thing running by donating bitcoin!<\/p><p style=\"font-family: monospace;\">1Nwp7Q5qCyjrHxza8anYtATrRaLCtZeZty<\/p><\/div><\/div><\/div><\/body><\/html>");
	document.getElementById('loadingbefore').style.display = 'none';
	var currenturl = document.getElementById('beginscript').getAttribute('currenturl');
	var patt = /(?!s?ilverproxy1?)[a-zA-Z0-9_-]{11}/;
	var id;
	if (patt.test(currenturl)) {
		id = patt.exec(currenturl);
	} else {
		id = "dQw4w9WgXcQ";
	}
	var results = document.getElementById('results');
	var loading = document.getElementById('loadinganimation');
	/* setTimeout(function(){
		loading.style.display = 'none';
		results.style.display = 'block';
	}, 1000); */

	var b360 = document.getElementById("b360");
	var b480 = document.getElementById("b480");
	var b720 = document.getElementById("b720");
	var b1080 = document.getElementById("b1080");

	var divError = document.getElementById('error-text')

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			var text = xmlHttp.responseText;
			var textJson = JSON.parse(text);
			//var table = '<table>';
			if (textJson.hasOwnProperty('ytdlrError')) {
				divError.innerText = textJson.ytdlrError;
				divError.style.display = 'block';
			} else {
				for (var i=0; i<textJson.formats.length; i++) {
					switch (parseInt(textJson.formats[i].format_id)) {
						// MP4
						case 18: b360.href=textJson.formats[i].url; b360.style.display = "block"; break;
						case 22: b720.href=textJson.formats[i].url; b720.style.display = "block"; break;
						case 37: b1080.href=textJson.formats[i].url; b1080.style.display = "block"; break;
						case 59: b480.href=textJson.formats[i].url; b480.style.display = "block"; break;
						case 78: b480.href=textJson.formats[i].url; b480.style.display = "block"; break;

						/*case 18: table+='<tr><td><a href="'+textJson.formats[i].url+'">18- 360p MP4</a></td></tr>'; break;
						 case 22: table+='<tr><td><a href="'+textJson.formats[i].url+'">22- 720p MP4</a></td></tr>'; break;
						 case 37: table+='<tr><td><a href="'+textJson.formats[i].url+'">37- 1080p MP4</a></td></tr>'; break;
						 case 59: table+='<tr><td><a href="'+textJson.formats[i].url+'">59- 480p MP4</a></td></tr>'; break;
						 case 78: table+='<tr><td><a href="'+textJson.formats[i].url+'">78- 480p MP4</a></td></tr>'; break;*/

						/*// Apple HLS
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
						 case 266: table+='<tr><td><a href="'+textJson.formats[i].url+'">266- 2160p DASH MP4</a></td></tr>'; break;*/
					}
				}
			}

			//table += '</table>';
			//results.innerHTML = table;
			loading.style.display = 'none';
			results.style.display = 'inline-flex';
		}		
	};
	xmlHttp.open("GET", "https://ytdlr9475.tk/ytdl/getinfo.php?id="+id, true); // true for asynchronous 
	xmlHttp.send(null);
	
};

init();