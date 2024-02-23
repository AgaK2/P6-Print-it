const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	},
];


let currentIndex = 0;

// Fonctions à appeler au chargement du site
addEventsToArrows();
paginationDots();

// Ajout des events sur les flèches
function addEventsToArrows() {
	let arrowLeft = document.getElementById("arrow-left");
	arrowLeft.addEventListener("click", () => {
		console.log("CLIQUE FLECHE GAUCHE");
		// Faire bouger la variable currentIndex (le défilement infini)
		if (currentIndex === 0) {
			// Si currentIndex === 0 on passe à la dernière valeur du tableau
			currentIndex = slides.length - 1;
		} else {
			// sinon on retire 1 à l'index et on passe à la slide précédente
			currentIndex = currentIndex - 1;
		}

		switchSlide();
		changeDotSelected();

	});

	let arrowRight = document.getElementById("arrow-right");
	arrowRight.addEventListener("click", () => {
		console.log("CLIQUE FLECHE DROITE");
		// Faire bouger la variable currentIndex (le défilement infini)
		if (currentIndex === slides.length - 1) {
			// Si currentIndex === à la dernière valeur du tableau on passe à la première valeur du tableau
			currentIndex = 0;
		} else {
			// Sinon on ajoute 1 à l'index et on passe à la slide suivante
			currentIndex = currentIndex + 1;
		}

		switchSlide();
		changeDotSelected();

	});
};


function switchSlide() {
	// Modification de l'image dans la slide
	const bannerImg = document.querySelector(".banner-img");
	bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;

	// Modification du texte dans la slide
	const bannerText = document.querySelector(".banner-text");
	bannerText.innerHTML = slides[currentIndex].tagLine;
};

function changeDotSelected() {
	// Supprimer la classe dot_selected du premier élément
	const dotParents = document.getElementById("dots");
	const dotSelected = dotParents.querySelector(".dot_selected");
	dotSelected.className = "dot";

	// Ajouter la classe dot_selected à la bonne slide
	dotParents.children[currentIndex].className = "dot dot_selected";
}

// Ajout des dots
function paginationDots() {
	// Récupérer le parent via l'id
	const parentDots = document.getElementById("dots");

	// Parcourez le tableau pour ajouter des points
	for (let i = 0; i < slides.length; i++) {
		// Créer un élément pour insérer différents points
		const dot = document.createElement("div");

		// Condition pour ajouter la classe dots_selected sur la slide visualisée
		if (i === 0) {
			dot.classList.add("dot", "dot_selected");

		} else {
			dot.classList.add("dot");
		}

		// Ajouter des enfants à l'élément parent 
		parentDots.appendChild(dot);
	}
};