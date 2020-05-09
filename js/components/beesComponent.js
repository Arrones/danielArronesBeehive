class BeesComponent {
    constructor(bees, callback) {

        this.bees = document.getElementById('Bees');
        this.beesContainer = document.createElement('div');
        this.imgDiv = document.createElement('div');
        this.dataDiv = document.createElement('div');
        //this.buttonsDiv = document.createElement('div');


        this.nameH3 = document.createElement('h2');
        this.userNameP = document.createElement('p');
        this.emailP = document.createElement('p');
        this.phoneP = document.createElement('p');
        this.cityP = document.createElement('p');
        this.postP = document.createElement('p');
        this.photosP = document.createElement('p');
        this.todosP = document.createElement('p');
         
        this.nameH3.classList.add('bees-card-text');
        this.userNameP.classList.add('bees-card-text');
        this.emailP.classList.add('bees-card-text');
        this.phoneP.classList.add('bees-card-text');
        this.cityP.classList.add('bees-card-text');
        this.postP.classList.add('bees-card-text');
        this.photosP.classList.add('bees-card-text');
        this.todosP.classList.add('bees-card-text');


        //this.beesContainer.appendChild(this.imgDiv);
        this.beesContainer.appendChild(this.dataDiv);
        //this.beesContainer.appendChild(this.buttonsDiv);

        this.dataDiv.appendChild(this.imgDiv);
        this.dataDiv.appendChild(this.nameH3);
        this.dataDiv.appendChild(this.userNameP);
        this.dataDiv.appendChild(this.emailP);
        this.dataDiv.appendChild(this.phoneP);
        this.dataDiv.appendChild(this.cityP);
        this.dataDiv.appendChild(this.postP);
        this.dataDiv.appendChild(this.photosP);
        this.dataDiv.appendChild(this.todosP);

        this.imgDiv.innerHTML = "<img src=resources/homero.jpg width=\'99px\' height=\'99px\'>";
        this.nameH3.innerHTML = bees.name;
        this.userNameP.innerHTML = bees.userName;
        this.emailP.innerHTML = bees.email;
        this.phoneP.innerHTML = bees.phone;
        this.cityP.innerHTML = bees.city;
        this.postP.innerHTML = "Posts " + bees.post.length;
        this.photosP.innerHTML = "Photos " +bees.album.length;
        this.todosP.innerHTML = "To-Do's " +bees.todos.length;
        
        this.imgDiv.classList.add('profile-image');
        this.dataDiv.classList.add('bees-card');
        //this.buttonsDiv.classList.add('column');


        this.beesContainer.classList.add('bees-container');
        //this.nameH3.classList.add('beesContainerH3');
        this.bees.appendChild(this.beesContainer);

        this.callback = callback;

        this.beesContainer.onclick = this.showBeesPost.bind(this);

    }

    showBeesPost(e) {
        this.callback(this.bees);
    }
}
