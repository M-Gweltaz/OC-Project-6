export default class Media {
	constructor(id, photographerId, title, srcType, likes, date, price) {
		this.id = id;
		this.photographerId = photographerId;
		this.title = title;
		this.srcType = srcType;
		this.likes = likes;
		this.date = date;
		this.price = price;
	}

	// "id": 342550,
	// "photographerId": 82,
	// "title": "Fashion Yellow Beach",
	// "image": "Fashion_Yellow_Beach.jpg",
	// "likes": 62,
	// "date": "2011-12-08",
	// "price": 55

	getMediaSrcType() {
		this.srcType ? (srcType = 'image') : (srcType = 'video');
	}
	getMediaDate() {
		let mediaDate = Date(this.date);
		console.log(mediaDate);
		return mediaDate;
	}
}
