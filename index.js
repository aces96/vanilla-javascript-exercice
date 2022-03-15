const modal = document.getElementById('modal')
const ajouter = document.getElementById('ajouter')
const submit = document.getElementById('submit')


ajouter.addEventListener("click",showModal)
submit.addEventListener("click", closeModal)



function showModal(){
modal.style.display = "block";

}

function closeModal() {
    modal.style.display = "none";
}