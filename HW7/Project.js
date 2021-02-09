function tab_image(a) {
	if (a == 1) {
		document.getElementById("image_tab").src = "1.jpg";
	}
	else if (a == 2) {
		document.getElementById("image_tab").src = "2.jpg";
	}
	else if (a == 3) {
		document.getElementById("image_tab").src = "3.jpg";
	}
	else if (a == 4) {
		document.getElementById("image_tab").src = "4.jpg";
	}
	else if (a == 5) {
		document.getElementById("image_tab").src = "5.jpg";
	}
	

}
function auto() {
	var video = document.getElementById('video1');
	alert(video.autoplay);
	if (video.autoplay == false) {
		video.autoplay = true;
		video.play();

	}
	else if (video. == true) {
		video.autoplay = false;
	}
}
function loop() {
	var video = document.getElementById('video1');
	if (video.loop == false) {
		video.loop = true;
	}
	else if (video.loop == true) {
		video.loop = false;
	}
}
function mute() {
	var video = document.getElementById('video1');
	if (video.muted == false) {
		video.muted = true;
	}
	else if (video.muted == true) {
		video.muted = false;
	}
}

function light(n) {
	document.getElementById('blog_' + n).color = "blue";
}


