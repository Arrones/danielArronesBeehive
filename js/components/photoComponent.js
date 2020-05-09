class PhotoComponent {
    constructor(photo, callback) {

        this.photo = document.getElementById('Bees Album');
        this.photosContainer = document.createElement('div');
        this.dataDiv = document.createElement('div');

        this.title = document.createElement('h2');
        this.title.classList.add('bees-card-text');

        this.photosContainer.appendChild(this.dataDiv);
        this.dataDiv.appendChild(this.title);

        this.title.innerHTML = photo.title;
        this.dataDiv.innerHTML = "<img src=" + photo.url + "width=\'99px\' height=\'99px\'>";
        this.dataDiv.classList.add('bees-card');

        this.photosContainer.classList.add('bees-container');
        this.photo.appendChild(this.photosContainer);

        this.callback = callback;

        this.photosContainer.onclick = this.showBeesPost.bind(this);

    }

    showBeesPost(e) {
        this.callback(this.bees);
    }
}
