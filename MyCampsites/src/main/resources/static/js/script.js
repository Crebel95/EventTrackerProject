console.log('script.js loaded.');

window.addEventListener('load', function(e) {
	console.log('Window loaded, DOM created');
	init();
});

function init() {
	console.log('In init');

	//TODO: Load all events...
	getAllCampsites();
	

	//TODO: Add event Listeners for existing buttons/forms etc...
	document.campsiteForm.lookup.addEventListener('click', function(e) {
		e.preventDefault();
		let campsiteId = document.campsiteForm.campsiteId.value;
		console.log(campsiteId);
		if (!isNaN(campsiteId) && campsiteId > 0) {
			getCampsiteDetails(campsiteId);
		}
	});




	document.newCampsiteForm.addCampsiteButton.addEventListener('click', function(e) {
		e.preventDefault();

		let form = document.newCampsiteForm;

		let theCampsite = {
			name: form.name.value,
			description: form.description.value,
			visitDate: form.visitDate.value,
			pictureUrl: form.pictureUrl.value,
		};
		addNewCampsite(theCampsite);
	});

}

function getAllCampsites() {
	//TODO: XHR to GET list endpoint of API, call displayAllCampsites to show on page
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/campsites');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let campsiteList = JSON.parse(xhr.responseText)
				console.log(campsiteList);
				displayAllCampsites(campsiteList);
			}
			else {

			}
		}
	};
	xhr.send();
}

function displayAllCampsites(campsiteList) {
	let tbody = document.getElementById("campsiteListTableBody");
	tbody.textContent = '';
	if (campsiteList && Array.isArray(campsiteList)) {
		for (let campsite of campsiteList) {
			let tr = document.createElement('tr');
			tbody.appendChild(tr);
			let td = document.createElement('td');
			td.textContent = campsite.id;
			tr.appendChild(td);

			td = document.createElement('td');
			let logoImg = document.createElement('img');
			logoImg.src = campsite.pictureUrl;
			logoImg.classList.add('logoImageThumbnail');
			td.appendChild(logoImg);
			tr.appendChild(td);



			td = document.createElement('td');
			td.textContent = campsite.name;
			tr.appendChild(td);



			tr.addEventListener('click', function(e) {
				let campsiteId = campsite.id;
				getCampsiteDetails(campsiteId);
			});
		}
	}

}

function getCampsiteDetails(campsiteId) {
	//TODO: XHR for single event...
	console.log('Getting campsite details for campsite iD ' + campsiteId);
	let xhr = new XMLHttpRequest();

	xhr.open('GET', `api/campsites/${campsiteId}`, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let campsite = JSON.parse(xhr.responseText);
				console.log(campsite);
				displayCampsiteDetails(campsite);
			}
			else { }
			console.log('no campsite found')
		}
	};

	xhr.send();
}

function displayCampsiteDetails(campsite) {
	//TODO: DOM - display in details div...	
	let detailDiv = document.getElementById("campsiteDetailsDiv");
	detailDiv.textContent = '';
	let h3 = document.createElement('h3');
	h3.textContent = campsite.name;
	detailDiv.appendChild(h3);
	//TODO: display desription, image, logo, address etc...
	//TODO: update/delete buttons with click events to pass that site ID to new update/delete function

	let h1Name = document.createElement('h1');
	h1Name.textContent = campsite.name;
	detailDiv.appendChild(h1Name);

	let description = document.createElement('blockquote');
	description.textContent = campsite.description;
	detailDiv.appendChild(description);

	let visitDate = document.createElement('h3');
	visitDate.textContent = campsite.visitDate;
	detailDiv.appendChild(visitDate);

	let picture = document.createElement('img');
	picture.src = campsite.pictureUrl;
	picture.classList.add('logoImageThumbnail');
	detailDiv.appendChild(picture);


	let deleteForm = document.createElement("form");
	deleteForm.name = "deleteCampsiteForm";
	detailDiv.appendChild(deleteForm);
	let campsiteIdInput = document.createElement("input");
	campsiteIdInput.type = "hidden";
	campsiteIdInput.name = "campsiteId";
	campsiteIdInput.value = campsite.id;
	deleteForm.appendChild(campsiteIdInput);

	let delButton = document.createElement("button");
	delButton.textContent = "Delete this Campsite";
	deleteForm.appendChild(delButton);

	delButton.addEventListener('click', function(e) {
		e.preventDefault();
		let campsiteId = document.deleteCampsiteForm.campsiteId.value;
		console.log('campsite #: ' + campsiteId + ' Deleted')
		deleteCampsite(campsiteId);

	});

	let updateForm = document.createElement("form");
	updateForm.name = "updateCampsiteForm";
	detailDiv.appendChild(updateForm);
	campsiteIdInput = document.createElement("input");
	campsiteIdInput.type = "hidden";
	campsiteIdInput.name = "campsiteId";
	campsiteIdInput.value = campsite.id;
	updateForm.appendChild(campsiteIdInput);

	let updateButton = document.createElement("button");
	updateButton.textContent = "Edit Campsite";
	updateForm.appendChild(updateButton);
	

	updateButton.addEventListener('click', function(e) {
		e.preventDefault();
		let campsiteId = document.updateCampsiteForm.campsiteId.value;
		console.log('campsite #' + campsiteId + ' brought to update page')
		displayUpdateForm(campsiteId);
	});




}

function addNewCampsite(newCampsite) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/campsites', true);
	xhr.onreadystagechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				let createdCampsite = JSON.parse(xhr.responseText);
				displayCampsiteDetails(createdCampsite);
			} else {
				console.error('error adding campsite! AHHHHHHH!!');
			}

		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	let newcampsiteJson = JSON.stringify(newCampsite);
	xhr.send(newcampsiteJson);
};

function deleteCampsite(campsiteId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/campsites/' + campsiteId);
	xhr.onreadystagechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('The delete had great success!');
			}
			else {
				console.error('Delete was NOT successful');
			}
		}
	}
	xhr.send();
}

function displayUpdateForm(campsiteId) {
	let updateDiv = document.getElementById("campsiteUpdateDiv");
	let form = document.createElement('form');
	form.name = 'editCampsite';
	updateDiv.appendChild(form);

	let input = document.createElement('input');
	input.name ="campsiteId";
	input.type = 'hidden';
	input.id = 'updateCampsiteId';
	input.value = campsiteId;
	form.appendChild(input);

	input = document.createElement('input');
	input.name = 'name';
	input.type = 'text';
	
	form.appendChild(input);

	input = document.createElement('input');
	input.name = 'description';
	input.description = 'description';
	input.type = 'text';
	form.appendChild(input);

	input = document.createElement('input');
	input.name = 'visitDate';
	input.description = 'visitDate';
	input.type = 'text';
	form.appendChild(input);

	input = document.createElement('input');
	input.name = 'pictureUrl';
	input.pictureUrl = 'pictureUrl';
	input.type = 'text';
	form.appendChild(input);
	
	console.log(form);

	let updateButton = document.createElement('button');
	updateButton.textContent = 'Update Campsite';
	form.appendChild(updateButton);
	updateButton.classList.add('btn');

	updateButton.addEventListener('click', function(e) {
		e.preventDefault();
	

		let campsite = {
		 	campsiteId: document.editCampsite.campsiteId.value,
			name: document.editCampsite.name.value,
			description: document.editCampsite.description.value,
			visitDate: document.editCampsite.visitDate.value,
			pictureUrl: document.editCampsite.pictureUrl.value,
		}

	console.log(campsite);
		updateCampsite(campsite.campsiteId, campsite);
	});

}

function updateCampsite(campsiteId, updatedCampsite) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/campsites/' + campsiteId);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('The update had great success!' + updatedCampsite);
				displayCampsiteDetails(updatedCampsite);
			}
			else {
				console.error('Update was NOT successful', xhr.status, xhr.responseText);
			}
		}

	}
	xhr.send(JSON.stringify(updatedCampsite));
}



