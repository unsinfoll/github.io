window.onload = function() {
	let myImage = document.querySelector('img');

	myImage.onclick = function() {
		let mySrc = myImage.getAttribute('src');

		if(mySrc === 'images/cat-1.jpg') {
			myImage.setAttribute('src', 'images/cat-2.jpg');
		}
		else {
			myImage.setAttribute('src', 'images/cat-1.jpg');
		}
	}

	let myButton = document.querySelector('button');
	let myHeading = document.querySelector('h1');

	function setUserName() {
		let myName = prompt('Bitte gib Deinen Namen ein.');

		if(!myName) {
			setUserName();
		}
		else {
			localStorage.setItem('name', myName);
			myHeading.textContent = 'Katzen sind toll, ' + myName;
		}
	}

	if(!localStorage.getItem('name')) {
  		setUserName();
	} else {
  		let storedName = localStorage.getItem('name');
  		myHeading.textContent = 'Katzen sind toll, ' + storedName;
	}

	myButton.onclick = function() {
  		setUserName();
	}
}