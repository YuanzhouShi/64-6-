function changefs(){ 
			var iw=window.innerWidth;
			var fs=iw*100/1280;
			console.log(fs);
			document.getElementsByTagName("html")[0].style.fontSize=fs+"px";
		}
		window.onresize=changefs;
		changefs();