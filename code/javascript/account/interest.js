const interestList = document.getElementById("interest-list");
const editButton = document.getElementById("edit-checkbox");
const addInterestButton = document.getElementById("text-interest");
const interestButtonContainer = document.getElementById("add-interest-container");
const form = document.getElementById("box-row1-body");
const notification = document.getElementById("success-notification");

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
    newDate.value = reverseTransformDate(dateItem.textContent);
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
    newItem.style.backgroundColor = colorTab[Math.floor(Math.random() * (0 - 7)) + 7];
    newItem.setAttribute("onclick", "deleteMe(this)");
    newItem.classList.add("interest-item");
    newItem.textContent = addInterestButton.value;
    addInterestButton.value = "";
    interestList.insertBefore(newItem, interestButtonContainer);
  }
}

function restoreItem(interest) {
  let newItem = document.createElement("a");
  newItem.style.backgroundColor = colorTab[Math.floor(Math.random() * (0 - 7)) + 7];
  newItem.setAttribute("onclick", "deleteMe(this)");
  newItem.classList.add("interest-item");
  newItem.textContent = interest;
  addInterestButton.value = "";
  interestList.insertBefore(newItem, interestButtonContainer);
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

function verifyJSON(infos) {
  let condition = true;
  const text = /^[a-zA-Z]+$/;
  const mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!infos.date != "") {
    condition = false;
  }

  if(!text.test(infos.surname)) {
    condition = false;
  }

  if(!text.test(infos.name)) {
    condition = false;
  }

  if(!mail.test(infos.mail)) {
    condition = false;
  }

  if (!(infos.statut != "Défaut")) {
    condition = false;
  }
  return condition;
  
}

function transformDate(dateStr) {
  const dateParts = dateStr.split('-');
  
  if (dateParts.length !== 3 || 
      dateParts[0].length !== 4 || 
      dateParts[1].length !== 2 || 
      dateParts[2].length !== 2) {
    throw new Error('Invalid date format');
  }
  
  return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
}

function reverseTransformDate(dateStr) {
  // Split the date string into an array
  const dateParts = dateStr.split('-');
  
  // Rearrange the parts to YYYY-MM-DD
  const transformedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  
  return transformedDate;
}

form.addEventListener("submit", (e)=> {
  e.preventDefault();
  if (verifyInput()) {
    editable = false;
    let dateItem = document.getElementById("date");
    let surnameItem = document.getElementById("surname");
    let nameItem = document.getElementById("name");
    let mailItem = document.getElementById("mail");
    let statutItem = document.getElementById("statut");
    editButton.disabled = false;
    editButton.checked = false;
    var newDate = document.createElement("p");
    newDate.textContent = transformDate(dateItem.value);

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
    dateItem.replaceWith(newDate);
    surnameItem.replaceWith(newSurname);
    nameItem.replaceWith(newName);
    mailItem.replaceWith(newMail);
    statutItem.replaceWith(newStatut);
    saveInfos();
    notification.classList.add("animate");
    setTimeout(()=> {
      notification.classList.remove("animate");
    }, 4000);

    
  }
})

addInterestButton.addEventListener('keydown', (event) => {
  if (addInterestButton.focus) {
    if (event.key === 'Enter') {
      addItem();
    }
  }
});

// Partie Photo de Profil

const profilePicPathTab = ["../../imgs/account/PP1.png",
                          "../../imgs/account/PP2.png",
                          "../../imgs/account/PP3.png",
                          "../../imgs/account/PP4.png",
                          "../../imgs/account/PP5.png",
                          "../../imgs/account/PP6.png",
                          "../../imgs/account/PP7.png",
                          "../../imgs/account/PP8.png"];
var profilePicId = 0;
const backgroundColorTab = ["rgba(1,1,1,0)","rgb(20, 7, 161)","rgb(7, 53, 161)","rgb(7, 102, 161)","rgb(57, 126, 169)", "rgb(34, 193, 198)", "rgb(34, 193, 198)", "rgb(8, 162, 85)", "rgb(8, 162, 39)", "rgb(53, 103, 7)", "rgb(188, 158, 7)", "rgb(226, 142, 8)", "rgb(226, 124, 8)", "rgb(226, 44, 8)", "rgb(226, 8, 99)", "rgb(226, 8, 157)", "rgb(146, 7, 161)", "rgb(115, 7, 161)", "rgb(71, 7, 161)"] ;
var backgroundColorId = 0;

function switchBG(){
  let bg = document.getElementById("photo-cont");
  if (backgroundColorId == (backgroundColorTab.length-1)) {
    backgroundColorId = 0;
  } else {
    backgroundColorId++;
  }
  bg.style.backgroundColor = backgroundColorTab[backgroundColorId];
}

function switchPP(){
  let pp = document.getElementById("profil-pic");
  if (profilePicId == (profilePicPathTab.length-1)) {
    profilePicId = 0;
  } else {
    profilePicId++;
  }
  pp.setAttribute("src", profilePicPathTab[profilePicId]);
}


// Partie sauvagarde locale


function saveInfos() {
  if (!editable) {
    console.log("Save");
    let dateItem = document.getElementById("date");
    let surnameItem = document.getElementById("surname");
    let nameItem = document.getElementById("name");
    let mailItem = document.getElementById("mail");
    let statutItem = document.getElementById("statut");
    let interestitems = document.getElementsByClassName("interest-item");
    let interestContent = [];
    for (let i = 0 ; i<interestitems.length ; i++) {
      interestContent.push(interestitems[i].textContent);
    }
    console.log('Saving Infos...');
    sessionStorage.setItem('UserInfos',JSON.stringify({name : nameItem.textContent
                                       , surname : surnameItem.textContent
                                       , date : dateItem.textContent
                                       , mail : mailItem.textContent
                                       , statut : statutItem.textContent
                                       , background : backgroundColorId
                                       , profilPic : profilePicId
                                       , interests : interestContent}));
  }
}
    // Fonction pour charger les messages de la session navigateur
function loadInfos() {
  // Récupérer l'historique des messages de la session navigateur
  console.log(sessionStorage);
  let dateItem = document.getElementById("date");
  let surnameItem = document.getElementById("surname");
  let nameItem = document.getElementById("name");
  let mailItem = document.getElementById("mail");
  let statutItem = document.getElementById("statut");
  let bg = document.getElementById("photo-cont");
  let pp = document.getElementById("profil-pic");
  const savedInfos = JSON.parse(sessionStorage.getItem('UserInfos'));
  if (savedInfos && verifyJSON(savedInfos)) {
    dateItem.textContent = savedInfos.date;
    surnameItem.textContent = savedInfos.surname;
    nameItem.textContent = savedInfos.name;
    mailItem.textContent = savedInfos.mail;
    bg.style.backgroundColor = backgroundColorTab[savedInfos.background];
    pp.setAttribute("src", profilePicPathTab[savedInfos.profilPic]);
    statutItem.textContent = savedInfos.statut;
    savedInfos.interests.forEach(item =>(restoreItem(item)));
    profilePicId = savedInfos.profilPic;
    backgroundColorId= savedInfos.background;
  } else {
    statutItem.textContent = "Défaut";
    bg.style.backgroundColor = backgroundColorTab[0];
    pp.setAttribute("src", profilePicPathTab[0]);
  }
}   

window.addEventListener("load", ()=> {
  loadInfos();
  console.log("load");
})

