export default class Media {
	constructor(id, photographerId, name, title, src, likes, date, price) {
		this.id = id;
		this.photographerId = photographerId;
		this.name = name;
		this.title = title;
		this.src = src;
		this.like = { mediaLike: likes, userHasLiked: false };
		this.date = date;
		this.price = price;
	}

	getMediaPath() {
		const asset = require(`../assets/photographers/${this.name}/${this.src}`);
		return asset;
	}

	getMediaRender(assetSrc, index, handleSliderClick, handleSliderKeyDown) {
		let mediaRender;
		switch (true) {
			case /\.(jpg|jpeg|png)/g.test(this.src):
				mediaRender = (
					<img
						id={this.title}
						index={index}
						onClick={handleSliderClick}
						onKeyDown={handleSliderKeyDown}
						style={{ widht: '20vw' }}
						className='photographerWall__picture'
						src={assetSrc}
						alt={this.title}
						aria-haspopup='dialog'
						aria-label='ouvrir la pop-up carouselle'
						tabIndex='0'
					/>
				);
				break;

			case /\.mp4/g.test(this.src):
				mediaRender = (
					<video
						id={this.title}
						index={index}
						onClick={handleSliderClick}
						style={{ widht: '20vw' }}
						className='photographerWall__picture'
						src={assetSrc}
						controls
						aria-haspopup='dialog'
						aria-label='ouvrir la pop-up carouselle'
					/>
				);
				break;

			default:
				return;
		}
		return mediaRender;
	}

	getSliderRender(assetSrc, title) {
		let mediaRender;
		switch (true) {
			case /\.(jpg|jpeg|png)/g.test(this.src):
				mediaRender = (
					<>
						<img
							className='slide__currentMedia'
							src={assetSrc}
							alt={title}
							tabIndex='0'
						/>
						<h2 className='slide__currentMedia--title'>{title}</h2>
					</>
				);
				break;

			case /\.mp4/g.test(this.src):
				mediaRender = (
					<>
						<video src={assetSrc} className='slide__currentMedia' controls />
						<h2 className='slide__currentMedia--title'>{title}</h2>
					</>
				);
				break;

			default:
				return;
		}
		return mediaRender;
	}
}
