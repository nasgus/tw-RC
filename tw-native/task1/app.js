let addBtn = document.querySelector('.add-btn')
let deleteBtn = document.querySelector('.delete-btn')
addBtn.addEventListener('click', addTableRow);
deleteBtn.addEventListener('click', delTableRow);

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}
function getRandomText() {
    let text = ''
    for ( let i = 0; i < 5; i++) {
        text += String.fromCharCode(getRandomNumber(1040, 1113))
    }
    return text
}
function addTableRow() {
    let table = document.querySelector('.container-table');
    let tr = document.createElement('tr')
    for(let i = 0; i < 3; i++) {
        let td = document.createElement('td')
        td.innerHTML = getRandomText()
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
function delTableRow() {
    let trArr = document.querySelectorAll('tr')
    if(trArr.length !== 0){
        trArr[trArr.length - 1].remove()
    }
}