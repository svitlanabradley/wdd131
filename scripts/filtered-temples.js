const mainNav = document.querySelector('.navigation')
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	
	mainNav.classList.toggle('show');
	hamButton.classList.toggle('show');
});



function toggleActiveElement(activeClass = 'active') {
    // Select all menu items
    const navItems = document.querySelectorAll('.nav-item');
	const headerTitle = document.getElementById('header-title');

    // Add a click event listener to each item
    navItems.forEach((item) => {
        item.addEventListener('click', function () {
            // Remove the active class from all items
            navItems.forEach((el) => el.classList.remove(activeClass));

            // Add the active class to the clicked item
            this.classList.add(activeClass);

			// Update the header title with the data-header value
			headerTitle.textContent = this.getAttribute('data-header');
        });
    });
}

// Call the function to activate the menu
toggleActiveElement();



const temples = [
	{
	templeName: "Aba Nigeria",
	location: "Aba, Nigeria",
	dedicated: "2005, August, 7",
	area: 11500,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	templeName: "Manti Utah",
	location: "Manti, Utah, United States",
	dedicated: "1888, May, 21",
	area: 74792,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	templeName: "Payson Utah",
	location: "Payson, Utah, United States",
	dedicated: "2015, June, 7",
	area: 96630,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	templeName: "Yigo Guam",
	location: "Yigo, Guam",
	dedicated: "2020, May, 2",
	area: 6861,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	templeName: "Washington D.C.",
	location: "Kensington, Maryland, United States",
	dedicated: "1974, November, 19",
	area: 156558,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	templeName: "Lima Perú",
	location: "Lima, Perú",
	dedicated: "1986, January, 10",
	area: 9600,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	templeName: "Mexico City Mexico",
	location: "Mexico City, Mexico",
	dedicated: "1983, December, 2",
	area: 116642,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	templeName: "Kyiv Ukraine Temple",
	location: "Kyiv, Ukraine",
	dedicated: "2010, August, 29",
	area: 22184,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/kyiv-ukraine-temple/kyiv-ukraine-temple-3989.jpg"
	},
	{
	templeName: "Frankfurt Germany Temple",
	location: "Friedrichsdorf, Germany",
	dedicated: "1987, August, 29",
	area: 32895,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-38924-main.jpg"
	},
	{
	templeName: "Bern Switzerland Temple",
	location: "Zollikofen, Switzerland",
	dedicated: "1955, September, 11",
	area: 35546,
	imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
	}
];

createTempleCard(temples);

const templesWithYearBuilt = temples.map((temple) => ({
	...temple,
	yearBuilt: parseInt(temple.dedicated.match(/\d{4}/)), 
}));

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
	createTempleCard(temples);
});

oldLink.addEventListener("click", () => {
	createTempleCard(templesWithYearBuilt.filter(temple => temple.yearBuilt < 1900));
});

newLink.addEventListener("click", () => {
	createTempleCard(templesWithYearBuilt.filter(temple => temple.yearBuilt > 2000));
});

largeLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area <= 10000));
});

function createTempleCard(filteredTemples) {
	document.querySelector("#templeContainer").innerHTML = "";
	filteredTemples.forEach(temple => {
			const card = document.createElement("section");
			card.classList.add("temple-card");

			const name = document.createElement("h3");
			name.textContent = temple.templeName;

			const location = document.createElement("p");
			location.innerHTML = `<span class="label">Location: </span>  ${temple.location}`;

			const dedicated = document.createElement("p");
			dedicated.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;

			const size = document.createElement("p");
			size.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;

			const image = document.createElement("img");
			image.src = temple.imageUrl;
			image.alt = `${temple.templeName}`;
			image.loading = "lazy"; 

			card.appendChild(name);
			card.appendChild(location);
			card.appendChild(dedicated);
			card.appendChild(size);
			card.appendChild(image);

			document.querySelector("#templeContainer").appendChild(card);
		});

}

