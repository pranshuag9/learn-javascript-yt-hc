const courses = [
	{
		name: "Javascript Course",
		price: "2.1",
	},
	{
		name: "Complete ReactJS Course",
		price: "2.3",
	},
	{
		name: "Django Course",
		price: "7.4",
	},
	{
		name: "Complete Angular Course",
		price: "2.1",
	},
	{
		name: "Complete MERN Course",
		price: "2.7",
	},
	{
		name: "Complete C++ Course",
		price: "2.8",
	},
];

// <li class="list-group-item">Complete C++ Course</li>

function generateLIST() {
	const ul = document.querySelector(".list-group");
	ul.innerHTML = "";
	courses.forEach((course) => {
		const li = document.createElement("li"); // creates <li></li>
		li.classList.add("list-group-item"); // adds a class to li element
		
		const name = document.createTextNode(course.name); // creates a text node name
		li.appendChild(name); // append the textNode as child of li
		
		const span = document.createElement("span"); // creates a span element
		span.classList.add("float-right"); // adds a class to span element
		
		const price = document.createTextNode("$" + course.price); // creates a price text node
		span.appendChild(price); // adds price text node as child of span elemt.
		
		// Injecting span element inside li element
		li.appendChild(span);
		
		// Injecting li element to ul element
		ul.appendChild(li);
	});
}

// generateLIST();

window.addEventListener("load", generateLIST);
// -----------------------------------------------------------------------------

// Sorting logic
const button = document.querySelector(".sort-btn")
button.addEventListener("click", () => {
	courses.sort((a, b) => {
		return b.price - a.price
	});
	generateLIST();
});
