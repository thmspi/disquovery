const interestList = document.getElementById("interest-list");
const editButton = document.getElementById("edit-checkbox");
const addInterestButton = document.getElementById("text-interest");
const interestButtonContainer = document.getElementById("add-interest-container");
const form = document.getElementById("box-row1-body");

var editable = false;
var colorTab = ["rgb(22, 82, 132)", "rgb(14, 117, 77)", "rgb(108, 15, 139)", "rgb(179, 23, 93)", "rgb(175, 100, 14)", "rgb(86, 77, 68)", "rgb(83, 60, 214)", "rgb(214, 60, 199)", "rgb(214, 60, 109)"];

editButton.addEventListener("click", ()=> {
  let surnameItem = document.getElementById("surname");
  let nameItem = document.getElementById("name");
  let mailItem = document.getElementById("mail");
  let statutItem = document.getElementById("statut");
  let dateItem = document.getElementById("date");
  editable = editButton.checked;
  if (editable) {
    editButton.disabled = true;
    var newDate = document.createElement("input");
    newDate.value = dateItem.value;
    newDate.type = "date";

    var newSurname = document.createElement("input");
    newSurname.value = surnameItem.textContent;
    newSurname.type = "text";

    var newName = document.createElement("input");
    newName.value = nameItem.textContent;
    newName.type = "text";

    var newMail = document.createElement("input");
    newMail.value = mailItem.textContent;
    newMail.type = "text";

    var newStatut = document.createElement("select");
    newStatut.type = "select";
    var options = [
      { value: 'default', text: 'Défaut' },
      { value: 'H', text: 'Homme' },
      { value: 'F', text: 'Femme' }
    ];
    options.forEach(function(optionData) {
      var optionElement = document.createElement('option');
      optionElement.value = optionData.value;
      optionElement.textContent = optionData.text;
      newStatut.append(optionElement);
    });

    newStatut.options[0].disabled = true;
    if (statutItem.textContent === "Défaut") {
      newStatut.options[0].selected = true;
    } else if(statutItem.textContent === "Homme") {
      newStatut.options[1].selected = true;
    } else {
      newStatut.options[2].selected = true;
    }
    newDate.id = "date";
    newSurname.id = "surname";
    newName.id = "name";
    newMail.id = "mail";
    newStatut.id = "statut";
    dateItem.replaceWith(newDate);
    surnameItem.replaceWith(newSurname);
    nameItem.replaceWith(newName);
    mailItem.replaceWith(newMail);
    statutItem.replaceWith(newStatut);
  }
})

function deleteMe(event) {
  if(editButton.checked) {
    event.remove(event);
  }
}

function addItem() {
  if (addInterestButton.value!="") {
    let newItem = document.createElement("a");
    console.log(colorTab[Math.floor(Math.random() * (0 - 7)) + 7]);
    newItem.style.backgroundColor = colorTab[Math.floor(Math.random() * (0 - 7)) + 7];
    newItem.setAttribute("onclick", "deleteMe(this)");
    newItem.classList.add("interest-item");
    newItem.textContent = addInterestButton.value;
    addInterestButton.value = "";
    interestList.insertBefore(newItem, interestButtonContainer);
  }
  
}

function verifyInput() {
  let dateItem = document.getElementById("date");
  let surnameItem = document.getElementById("surname");
  let nameItem = document.getElementById("name");
  let mailItem = document.getElementById("mail");
  let statutItem = document.getElementById("statut");
  let condition = true;
  const text = /^[a-zA-Z]+$/;
  const mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  statutItem.style.backgroundColor = "#272424";
  nameItem.style.backgroundColor = "#272424";
  mailItem.style.backgroundColor = "#272424";
  surnameItem.style.backgroundColor = "#272424";
  dateItem.style.backgroundColor = "#272424";

  if (!dateItem.value != "") {
    console.log("date format false"+dateItem.value);
    dateItem.style.backgroundColor = "rgb(227, 74, 74)";
    condition = false;
  }

  if(!text.test(surnameItem.value)) {
    surnameItem.style.backgroundColor = "rgb(227, 74, 74)";
    condition = false;
  }

  if(!text.test(nameItem.value)) {
    nameItem.style.backgroundColor = "rgb(227, 74, 74)";
    condition = false;
  }

  if(!mail.test(mailItem.value)) {
    mailItem.style.backgroundColor = "rgb(227, 74, 74)";
    condition = false;
  }

  if (!(statutItem.options[statutItem.selectedIndex].value != "default")) {
    statutItem.style.backgroundColor = "rgb(227, 74, 74)";
    condition = false;
  }
  return condition;
  
}

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  if (verifyInput()) {
    let dateItem = document.getElementById("date");
    let surnameItem = document.getElementById("surname");
    let nameItem = document.getElementById("name");
    let mailItem = document.getElementById("mail");
    let statutItem = document.getElementById("statut");
    editButton.disabled = false;
    editButton.checked = false;
    var newDate = document.createElement("p");
    newDate.textContent = dateItem.value;

    var newSurname = document.createElement("p");
    newSurname.textContent = surnameItem.value;

    var newName = document.createElement("p");
    newName.textContent = nameItem.value;

    var newMail = document.createElement("p");
    newMail.textContent = mailItem.value;

    var newStatut = document.createElement("p");
    newStatut.textContent = statutItem.options[statutItem.selectedIndex].text;
    newDate.id = "date";
    newSurname.id = "surname";
    newName.id = "name";
    newMail.id = "mail";
    newStatut.id = "statut";
    dateItem.replaceWith(dateItem);
    surnameItem.replaceWith(newSurname);
    nameItem.replaceWith(newName);
    mailItem.replaceWith(newMail);
    statutItem.replaceWith(newStatut);
  }
})

addInterestButton.addEventListener('keydown', (event) => {
  if (addInterestButton.focus) {
    if (event.key === 'Enter') {
      addItem();
    }
  }
});

