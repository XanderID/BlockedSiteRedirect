function getParam(param) {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has(param)) {
        return urlParams.get(param);
    } else {
        return false;
    }
}

let params = {"site": "ini", "reason": "Karena Pengen Aja :)", "warning": "NGEYEL"};
for(let index in params){
	let defaultMsg = params[index];
	let param = getParam(index);
	document.getElementById(index).innerText =
		param !== false ? param : defaultMsg;
}

let header = document.querySelector(".biohazard-header");
let content = document.querySelector(".content");
let warning = document.querySelector(".leak");

header.addEventListener("click", function () {
    this.classList.add("warning");
    content.classList.add("warning");
    warning.classList.add("warning");
});
