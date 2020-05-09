class TodosComponent {
    constructor( todos, callback) {

        this.todos = document.getElementById('Bees Todos');
        this.todosContainer = document.createElement('div');
        this.dataDiv = document.createElement('div');
        //this.buttonsDiv = document.createElement('div');


        this.title = document.createElement('h2');
        //this.bodyP = document.createElement('p');

         
        this.title.classList.add('bees-card-text');
        //this.bodyP.classList.add('bees-card-text');

        this.todosContainer.appendChild(this.dataDiv);
        //this.postsContainer.appendChild(this.buttonsDiv);

        this.dataDiv.appendChild(this.title);
        //this.dataDiv.appendChild(this.bodyP);

        this.title.innerHTML = todos.title;
        //this.bodyP.innerHTML = posts.body;
        
        this.dataDiv.classList.add('bees-card');

        this.todosContainer.classList.add('bees-container');
        this.todos.appendChild(this.todosContainer);

        this.callback = callback;

        this.todosContainer.onclick = this.showBeesPost.bind(this);

    }

    showBeesPost(e) {
        this.callback(this.bees);
    }
}
