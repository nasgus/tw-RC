let addBtn = document.querySelector('.add-btn');
let removeBtn = document.querySelector('.remove-btn');
let inputText = document.querySelector('.input-text')
let tBody = document.querySelector('tbody')

addBtn.addEventListener('click', addTableRow)
removeBtn.addEventListener('click', removeTableRow)

function addTableRow(e) {
    e.preventDefault()
    let text = inputText.value;
    if(text !== '') {
        let tr = document.createElement('tr')
        tr.className = 'table-row'
        tr.onclick = changeBox
        let html = `
            <td>
                <div class="text">${text}</div>
            </td>
            <td>
                <input class="check-box" type="checkbox">
            </td>`
        tr.innerHTML = html
        tBody.appendChild(tr)
        inputText.value = ''
    }

}
function changeBox(e) {
    let target = e.target.tagName
    let className = e.path[2].className
    if(target === 'INPUT' && className !== 'table-row active') {
        e.path[2].className += ' active'
    } else {
        e.path[2].className = 'table-row'
    }
}
function removeTableRow(e) {
    e.preventDefault()
    let tr = document.querySelectorAll('.active')
    tr.forEach((tr) => {
        tr.remove()
    })
}