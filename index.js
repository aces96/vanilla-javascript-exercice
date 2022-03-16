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
const matricule = document.getElementById('matricule')
const icon = document.getElementsByClassName('fa-solid fa-trash-can')

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
    
        dateColumn.textContent = `${users[i].createdDate.split('-')[1]}/${users[i].createdDate.split('-')[2]}/${users[i].createdDate.split('-')[0]}`
        idColumn.textContent = users[i].id 
        nomColumn.textContent = users[i].lastName 
        prenomColumn.textContent = users[i].firstName 
        statusDiv.textContent = users[i].status 
        usernameColumn.textContent = users[i].userName 
        matrColumn.textContent = users[i].registrationNumber 
    }

    






ajouter.addEventListener("click",showModal)
submit.addEventListener("click", closeModal)

for(i = 0; i < icon.length; i++)
icon[i].addEventListener('click', (e)=>{
    let row = e.target.parentNode.parentNode
    row.parentNode.removeChild(row);

})



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
    console.log(users)


    
        console.log(data)
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
    
    
            if(data.status == 'Validé' || data.status == 'validé' ){
                statusDiv.setAttribute('id', 'valide')
    
            }else if(data.status == 'En validation'|| data.status == 'en validation'){
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
        idColumn.setAttribute('id', 'idColumn')
        dateColumn.setAttribute('id', 'dateColumn')
        nomColumn.setAttribute('id', 'nomColumn')
        prenomColumn.setAttribute('id', 'prenomColumn')
        usernameColumn.setAttribute('id', 'usernameColumn')
        matrColumn.setAttribute('id', 'matrColumn')
    
    
        console.log('new element');
    
        dateColumn.textContent = `${data.createdDate}`
        idColumn.textContent = data.id 
        nomColumn.textContent = data.lastName 
        prenomColumn.textContent = data.firstName 
        statusDiv.textContent = data.status 
        usernameColumn.textContent = data.userName 
        matrColumn.textContent = data.registrationNumber 
        console.log(data)
    

    modal.style.display = "none";


}



function checkDateForm(date, array){
    if('T' in date){
        cleanUsersArray(array)
        return `${array[i].createdDate.split('-')[1]}/${array[i].createdDate.split('-')[2]}/${array[i].createdDate.split('-')[0]}`

    }else {
        return date
    }
}
























