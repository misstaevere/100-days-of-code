var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var deleteButton = document.getElementsByClassName("delete");
var ul = document.querySelector("ul");

// Toggling the .done class (from css) on and off by clicking the list item
ul.onclick = function(e) {
	var target = e.target;
	if (target.parentNode === ul) {       // NO strikethrough on newDeleteButton
		target.classList.toggle("done");
	}
}

// Adding new items to the shopping list
function inputLength() {
	return input.value.length;
}


function createListElement() {
	// Creating new list item
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li)
	input.value = ""; // Clearing the "enter items" input box


	// Creating a new delete button for the new list item (ul > li > newDeleteButton)
	var newDeleteButton = document.createElement("button");
	newDeleteButton.appendChild(document.createTextNode("Delete"));
	newDeleteButton.setAttribute("class","delete");
	li.appendChild(newDeleteButton);
	ul.appendChild(li);
	newDeleteButton.onclick = removeParent; //New list item can be deleted
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement()
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


//Deleting items & the delete button
for (var i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", removeParent);
}

function removeParent(evn) {
	evn.target.removeEventListener("click", removeParent);
	evn.target.parentNode.remove();
}