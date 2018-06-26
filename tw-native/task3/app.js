let input = document.querySelector('input')
let text = document.querySelector('.text')
input.addEventListener('input', createDate)

function createDate(e){
    let options = {
        month: 'long',

    };
    let value = e.target.value;
    if(value.length === 16) {
        let ms = Date.parse(value);
        let date = new Date(ms);

        let hours = value.slice(11, 13)
        let minutes = value.slice(14, 16)
        let day = value.slice(3, 5)
        let month = date.toLocaleString('en-US', options)
        let year = value.slice(6, 11)

        let fullDate = hours + '-' + minutes + ' ' + day + ' ' + month + ' ' + year
        text.innerHTML = fullDate

    }
}