const name = document.getElementById("name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const button = document.getElementById("button");
const containerFromInput = document.getElementById("containerFromInput");
const contentFromInput = document.getElementById("contentFromInput");
const errorMessage = document.getElementById("errorMessage");
let cardsArr = JSON.parse(localStorage.getItem('cardsArr') || "[]");

loadCards();

function loadCards() {
    cardsArr.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("cardContact");
        div.setAttribute("data-id", card.id)

        const pName = document.createElement("p");
        pName.textContent = card.nameValue.toString();
        div.appendChild(pName);

        const pEmail = document.createElement("p");
        pEmail.textContent = card.emailValue.toString();
        div.appendChild(pEmail);

        const pPhonenumber = document.createElement("p");
        pPhonenumber.textContent = card.phoneNumberValue.toString();
        div.appendChild(pPhonenumber);

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete Contact";
        deleteButton.classList.add("btnContact");
        div.appendChild(deleteButton);

        contentFromInput.appendChild(div);
        containerFromInput.appendChild(contentFromInput);

        deleteButton.addEventListener('click', (e) => {
            const cardId = e.path[1].dataset.id;
            deleteCard(cardId);
        })
    });
}

function resetView() {
    contentFromInput.innerHTML = '';
}

function createCard() {
    const newCard = {
        id: randomId(1, 200),
        nameValue: name.value,
        emailValue: email.value,
        phoneNumberValue: phonenumber.value
    };

    cardsArr.push(newCard);
    console.log(cardsArr);
    localStorage.setItem('cardsArr', JSON.stringify(cardsArr));
    document.querySelector('form').reset();
}

function deleteCard(cardId) {
    cardsArr = cardsArr.filter(card => card.id != cardId);
    localStorage.setItem('cardsArr', JSON.stringify(cardsArr));
    resetView();
    loadCards();
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    createCard()
    resetView()
    loadCards()
});



function randomId(min, max) {
    const randomId = Math.floor(Math.random() * (max - min + 1) + min);
    return randomId;
}

// button.addEventListener('click', (e) => {
//     e.preventDefault();

//     if(name.value === '' || email.value === '' || phonenumber.value === '') {
//         getErrorMessage()
//     } else {
//         const nameValue =  name.value
//         const emailValue = email.value
//         const phonenumberValue = phonenumber.value

//         const insertedName = document.createElement('p')
//         const insertedEmail = document.createElement('p')
//         const insertedPhonenumber = document.createElement('p')
//         const button = document.createElement('button')
//         button.textContent = 'Delete Contact'
//         button.classList.add('btnContact')

//         insertedName.textContent = nameValue
//         insertedEmail.textContent = emailValue
//         insertedPhonenumber.textContent = phonenumberValue

//         const div = document.createElement('div')
//         div.classList.add( 'cardContact')
//         div.appendChild(insertedName)
//         div.appendChild(insertedEmail)
//         div.appendChild(insertedPhonenumber)
//         div.appendChild(button)
//         // console.log(div)
//         contentFromInput.appendChild(div)
//         button.addEventListener('click', () => {
//             div.remove()
//         })
//     }
// })
// function getErrorMessage() {
//     const div = document.createElement('div')
//     const p = document.createElement('p')
//     p.textContent = 'Hey, you gotta type something here!'
//     div.appendChild(p)
//     errorMessage.appendChild(div)
//     // console.log(div)
// }

