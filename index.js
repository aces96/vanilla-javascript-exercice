const modal = document.getElementById('modal')
const table = document.getElementById('table')
const ajouter = document.getElementById('ajouter')
const submit = document.getElementById('submit')
const supprimer = document.getElementById('delete')
const nom = document.getElementById("nom")
const prenom = document.getElementById("prenom")
const date = document.getElementById('date')
const etat = document.getElementById('etat')
const username = document.getElementById('username')
const matricule = document.getElementById('document')

let allTableRows = {
    id: document.getElementById("idColumn"),
    nom: document.getElementById("nomColumn"),
    prenom: document.getElementById("prenomColumn"),
    matricule: document.getElementById("matrColumn"),
    date: document.getElementById("dateColumn"),
    username: document.getElementById("usernameColumn"),
    status:  document.getElementById("statusColumn")


}

let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
        {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
        {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
    ]

    cleanUsersArray(users)






ajouter.addEventListener("click",showModal)
submit.addEventListener("click", closeModal)



function cleanUsersArray(array){

    array.forEach(user=>{
        if(isNaN(user.createdDate)){
            let newDate = user.createdDate.split('T')[0]
            user.createdDate = newDate
        }else{
            return
        }
        
    })

}



function showModal(){
modal.style.display = "block";

}

function closeModal() {
    let data = {
        id: Math.floor(Math.random() * 1000000000),
        createdDate: date.value,
        status: etat.value,
        firstName: prenom.value,
        lastName: nom.value,
        userName: username.value,
        registrationNumber: matricule.value
    }
    
    users.push(data)

    cleanUsersArray(users)

    users.forEach(user=>{
        allTableRows.id.textContent(user.id)
        allTableRows.date.textContent(`${user.createdDate.split('-')[1]}/${user.createdDate.split('-')[2]}/${user.createdDate.split('-')[0]}`)
        allTableRows.nom.textContent(user.lastName)
        // document.getElementById('prenomColumn').innerText(user.firstName)
        // document.getElementById('username').innerText(user.username)
        // document.getElementById('statusColumn').innerText(user.status)
        // document.getElementById('matrColumn').innerText(user.registrationNumber)
    })

    
}




for(var i=0; i < users.length;i++){
    console.log(users[i])
    let newRow = document.createElement('tr')
    let dateColumn = document.createElement('td')
    let nomColumn = document.createElement('td')
    let prenomColumn = document.createElement('td')
    let statusColumn = document.createElement('td')
    let matrColumn = document.createElement('td')
    let usernameColumn = document.createElement('td')
    let idColumn = document.createElement('td')
    let actionColumn = document.createElement('td')
    let statusDiv = document.createElement('div')
    let icon = document.createElement('i')


        if(users[i].status == 'Validé'){
            statusDiv.setAttribute('id', 'valide')

        }else if(users[i].status == 'En validation'){
            statusDiv.setAttribute('id', 'on-validation')

        }else {
            statusDiv.setAttribute('id', 'rejected')

        }




    table.appendChild(newRow)
    newRow.appendChild(idColumn)
    newRow.appendChild(dateColumn)
    newRow.appendChild(statusColumn)
    newRow.appendChild(nomColumn)
    newRow.appendChild(prenomColumn)
    newRow.appendChild(usernameColumn)
    newRow.appendChild(matrColumn)
    newRow.appendChild(actionColumn)
    statusColumn.appendChild(statusDiv)
    actionColumn.appendChild(icon)
    icon.setAttribute('class', 'fa-solid fa-trash-can')


    console.log('new element');

    dateColumn.textContent = users[i].createdDate 
    idColumn.textContent = users[i].id 
    nomColumn.textContent = users[i].lastName 
    prenomColumn.textContent = users[i].firstName 
    statusDiv.textContent = users[i].status 
    usernameColumn.textContent = users[i].userName 
    matrColumn.textContent = users[i].registrationNumber 
}

// .textContent = users[i].lastName
// .textContent = users[i].lastName
// .textContent = users[i].userName
// .textContent = users[i].id
// .textContent = users[i].firstName
// .textContent = users[i].status
// .textContent = `${users[i].createdDate.split('-')[1]}/${users[i].createdDate.split('-')[2]}/${users[i].createdDate.split('-')[0]}`










// allTableRows.id.textContent = users[i].id
// allTableRows.date.textContent = `${users[i].createdDate.split('-')[1]}/${users[i].createdDate.split('-')[2]}/${users[i].createdDate.split('-')[0]}`
// allTableRows.nom.textContent = users[i].lastName 
// allTableRows.prenom.textContent = users[i].firstName
// allTableRows.matricule.textContent = users[i].registrationNumber
// allTableRows.status.textContent = users[i].status
// allTableRows.username.textContent = users[i].userName








