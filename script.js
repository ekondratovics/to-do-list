let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("list");
let ul = document.getElementById("ul");

function addItemToList() {
    
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = "&#10005;";
    deleteButton.classList.add("deleteButton");

    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteButton);
    ul.appendChild(li);

    function toggleItemDone() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", toggleItemDone);

    function removeListItem() {
        li.parentNode.removeChild(li);
    }
    
    deleteButton.addEventListener("click", removeListItem);
}

function inputLength() {
    return input.value.length;
}

function addListItemAfterClick() {
    if (inputLength() >= 3) {
        addItemToList();
        input.value = "";
    } else {
        alert("List item should be at least 3 characters long.");
        input.value = "";
    }
}

// function addListItemAfterKeyPress(event) {
//     if (inputLength() >= 3 && event.keyCode === 13) {
//         addItemToList();
//     } else {
//         alert("List item should be at least 3 characters long.");
//     }
// }

addButton.addEventListener("click", addListItemAfterClick);

// input.addEventListener("keypress", addListItemAfterKeyPress);