// console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('Your response has been submitted');
}
let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);



function catPun() {
	alert('Hey purrty, are you a composer? Because you can come pose over here!')
}
let catPic = document.getElementById('cat-pic');
catPic.addEventListener('mouseover', catPun);
