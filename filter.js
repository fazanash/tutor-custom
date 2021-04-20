window.addEventListener("load", addId);
function addId() {
    document.querySelector(".tutor-course-filter-wrapper").setAttribute("id", "content-wrapper");
    document.querySelector(".tutor-course-filter-container").setAttribute("id", "filter-wrapper");
	document.querySelector(".tutor-course-filter-container>div").setAttribute("id", "filter-container");
}

window.addEventListener("load", addElementDiv);
function addElementDiv() {
	const divTrigger = document.createElement("div");
	divTrigger.setAttribute("id", "div-trigger");
	
	document.querySelector(".tutor-course-filter-container").appendChild(divTrigger);
	
}

window.addEventListener("load", filterCondition);
function filterCondition() {
	document.getElementById('hamburgerFilter').addEventListener("click", displayFilter);
	function displayFilter() {
		document.querySelector(".tutor-course-filter-container").style.display = "flex";
	}	
	
	document.getElementById('div-trigger').addEventListener("click", hideFilter);
	function hideFilter() {
		document.querySelector(".tutor-course-filter-container").style.display = "none";
		document.querySelector(".tutor-course-filter-container").removeChild(divTrigger);
	}
}


