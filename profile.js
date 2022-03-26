// BUTTONS ON PROFILE PAGE FOR FAVORITE COLOR, PLACE AND RITUAL

function favColor () {
    alert('My favorite color is blue!')
}
let blueForever = document.getElementById('color');
blueForever.addEventListener('click', favColor);


function favPlace () {
    alert('My favorite place in the world is Spain!')
}
let esForever = document.getElementById('place');
esForever.addEventListener('click', favPlace);


function favRitual () {
    alert('My favorite ritual is coding after work!')
}
let codingForever = document.getElementById('ritual');
codingForever.addEventListener('click', favRitual);

// FUNCTION FOR CHORRI'S PROFILE PAGE PIC

function chorizo() {
    alert('What a good girl!')
}
let chorriPic = document.getElementById('chorri-pic');
chorriPic.addEventListener('mouseover', chorizo);

// FUNCTION FOR SUBMITTING NICKNAME

function nicknameSubmit () {
    alert('Your response has been submitted!')
}
let submission = document.getElementById('nickname-sbmssn');
submission.addEventListener('click', nicknameSubmit);

