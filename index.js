const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();

if (pageName === "index.html") {
	document.querySelector(".home").classList.add("active");
}
if (pageName === "about.html") {
	document.querySelector(".about").classList.add("active");
}
if (pageName === "classes.html") {
	document.querySelector(".classes").classList.add("active");
}

if (pageName === "event.html") {
	document.querySelector(".event").classList.add("active");
}

if (pageName === "gallery.html") {
	document.querySelector(".gallery").classList.add("active");
}
