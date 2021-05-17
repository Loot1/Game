const url = 'assets/json/dialog.json';
const scenario = document.getElementById('scenario');
const img = document.getElementById('img');
const surname = document.getElementById('name');
const bulle = document.getElementById('bulle');
const achieve = document.getElementById('achieve');
var i = 0;
var dialog;

fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        dialog = data.dialog
    })
    .catch(function(error) {
        console.log(error)
    })


// Avancement

achieve.onclick = () => {
    if (i==9) {
        scenario.classList.add('none');
    } else {
        scenario.classList.remove('none');
        bulle.innerHTML = dialog[i].text;
        surname.innerHTML = dialog[i].name;
        img.src = dialog[i].img;
    }
    i++
}


