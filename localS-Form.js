// let formDOM = document.querySelector("#userForm")
// formDOM.addEventListener('submit', formSubmit)


// function formSubmit(event) {

//     event.preventDefault()
//     console.log("işlem gerçekleşti")
//     let scoreInputDOM = document.querySelector("#score")  
//      console.log(scoreInputDOM.value)
//      localStorage.setItem('score', scoreInputDOM.value)
// }


let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")
    if (USER_NAME.value && SCORE.value) {
      addItem(USER_NAME.value, SCORE.value)  
      USER_NAME.value = ""
      SCORE.value = ""
    } else {
        alert("HATALI VEYA EKSİK GİRDİNİZ")
    }
}

let userListDOM = document.querySelector("#userList")
const addItem = (userName, score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span> 
    `
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}