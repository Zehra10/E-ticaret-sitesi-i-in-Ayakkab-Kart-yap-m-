const colors = document.querySelectorAll(".colors div");
const shoe = document.querySelector("img");
const submit = document.querySelector(".submit");

colors.forEach((item) => {
	item.style.background = item.getAttribute("data-color");
	item.addEventListener("click", (e) => {
		colors.forEach((itm) => {
			itm.style.border = "none";
		});
		e.target.style.border = "10px solid lightgrey";
		shoe.src = `imgs/${e.target.getAttribute("data-color")}.png`;
		submit.style.background = e.target.getAttribute("data-color");
	});
});