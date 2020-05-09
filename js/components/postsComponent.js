class PostsComponent {
    constructor( posts, callback) {

        this.posts = document.getElementById('Bees Posts');
        this.postsContainer = document.createElement('div');
        this.dataDiv = document.createElement('div');
        //this.buttonsDiv = document.createElement('div');


        this.title = document.createElement('h2');
        this.bodyP = document.createElement('p');

         
        this.title.classList.add('bees-card-text');
        this.bodyP.classList.add('bees-card-text');

        this.postsContainer.appendChild(this.dataDiv);
        //this.postsContainer.appendChild(this.buttonsDiv);

        this.dataDiv.appendChild(this.title);
        this.dataDiv.appendChild(this.bodyP);

        this.title.innerHTML = posts.title;
        this.bodyP.innerHTML = posts.body;
        
        this.dataDiv.classList.add('bees-card');

        this.postsContainer.classList.add('bees-container');
        this.posts.appendChild(this.postsContainer);

        this.callback = callback;

        this.postsContainer.onclick = this.showBeesPost.bind(this);

    }

    showBeesPost(e) {
        this.callback(this.bees);
    }
}
