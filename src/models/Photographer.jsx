export default class Photographer {
	constructor(name, id, city, country, tagline, price, portrait) {
		this.name = name;
		this.id = id;
		this.city = city;
		this.country = country;
		this.tagline = tagline;
		this.price = price;
		this.portrait = portrait;
	}

	getPicturePath() {
		const picture = require(`../assets/photographers/Photographers_ID_Photos/${this.portrait}`);
		return picture;
	}

	getLocation() {
		return `${this.city}, ${this.country}`;
	}

	getDailyRate() {
		return `${this.price}€ / jour`;
	}

	// creating a clean string to use as url params
	getCleanUrlParams() {
		const nameCleaned = this.name.replace(/\s/g, '_');
		const profilLink = `profil/${nameCleaned}`;
		return profilLink;
	}
}
