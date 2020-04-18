class BeesComponent {
    constructor(bees, beesContainer, callback) {

        this.bees = bees;
        this.beesContainer = document.createElement('div');
        this.imgDiv = document.createElement('div');
        this.nameH3 = document.createElement('h3');
        this.userNameP = document.createElement('p');
        this.emailP = document.createElement('p');
        this.phoneP = document.createElement('p');
        this.cityP = document.createElement('p');
        this.postP = document.createElement('p');
        this.photosP = document.createElement('p');
        this.todosP = document.createElement('p');



        this.beesContainer.appendChild(this.imgDiv);
        this.beesContainer.appendChild(this.nameH3);
        this.beesContainer.appendChild(this.userNameP);
        this.beesContainer.appendChild(this.emailP);
        this.beesContainer.appendChild(this.phoneP);
        this.beesContainer.appendChild(this.cityP);
        this.beesContainer.appendChild(this.postP);
        this.beesContainer.appendChild(this.photosP);
        this.beesContainer.appendChild(this.todosP);


        this.imgDiv.innerHTML = '';
        this.nameH3.innerHTML = bees.name;
        this.userNameP.innerHTML = bees.userName;
        this.emailP.innerHTML = bees.email;
        this.phoneP.innerHTML = bees.phone;
        this.cityP.innerHTML = bees.city;
        this.postP.innerHTML = bees.post;
        this.photosP.innerHTML = bees.photos;
        this.todosP.innerHTML = bees.todos;
        //"<img src=\'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80\' width=\'80px\' height=\80px\'>";


        this.beesContainer.classList.add('beesContainer');
        this.nameH3.classList.add('beesContainerH3');
        beesContainer.appendChild(this.beesContainer);

        this.callback = callback;

        this.beesContainer.onclick = this.showBeesPost.bind(this);

    }

    showBeesPost(e) {
        this.callback(this.bees);
    }
}
