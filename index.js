const modal = document.getElementById('modal')
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
    id: document.getElementById('idColumn'),
    nom: document.getElementById('nomColumn'),
    prenom: document.getElementById('prenomColumn'),
    matricule: document.getElementById('matrColumn'),
    date: document.getElementById('dateColumn'),
    username: document.getElementById('usernameColumn'),
    status:  document.getElementById('statusColumn')


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

    let newArray = [];

ajouter.addEventListener("click",showModal)
submit.addEventListener("click", closeModal)


function cleanUsersArray(array){

    array.forEach(user=>{
        if(isNaN(user.createdDate)){
            let newDate = user.createdDate.split('T')[0]
            user.createdDate = newDate
            newArray.push(user)

        }else{
            firstarr.push(user)
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
        username: username.value,
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



cleanUsersArray(users)

users.forEach(user=>{
    allTableRows.id.textContent = user.id
    allTableRows.date.textContent = `${user.createdDate.split('-')[1]}/${user.createdDate.split('-')[2]}/${user.createdDate.split('-')[0]}`
    allTableRows.nom.textContent = user.lastName 
    // document.getElementById('idColumn').innerHTML(user.id)
    // document.getElementById('dateColumn').innerHTML(`${user.createdDate.split('-')[1]}/${user.createdDate.split('-')[2]}/${user.createdDate.split('-')[0]}`)
    // document.getElementById('nomColumn').innerHTML(user.lastName)
    // document.getElementById('prenomColumn').innerHTML(user.firstName)
    // document.getElementById('username').innerHTML(user.username)
    // document.getElementById('statusColumn').innerHTML(user.status)
    // document.getElementById('matrColumn').innerHTML(user.registrationNumber)
})





