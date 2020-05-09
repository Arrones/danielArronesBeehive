class AlbumComponent {
    constructor(albums, callback) {

        this.albums = document.getElementById('Bees Album');
        this.albumsContainer = document.createElement('div');
        this.dataDiv = document.createElement('div');
        //this.buttonsDiv = document.createElement('div');

        this.title = document.createElement('h2');
        this.title.classList.add('bees-card-text');
        this.albumsContainer.appendChild(this.dataDiv);
        this.dataDiv.appendChild(this.title);
        this.title.innerHTML = albums.title;
        
        this.dataDiv.classList.add('bees-card');

        this.albumsContainer.classList.add('bees-container');
        this.albums.appendChild(this.albumsContainer);


        albums.photos.forEach(photo => {
            new PhotoComponent(photo);
            
        });

        this.callback = callback;

        this.albumsContainer.onclick = this.showBeesPost.bind(this);

    }

    showBeesPost(e) {
        this.callback(this.bees);
    }
}
