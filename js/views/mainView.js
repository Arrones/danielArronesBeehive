function MainView(datamanager, parent, newPostCallback) {

    this.beesComponents = [];
    this.postComponents = [];
    this.albumComponent = [];
    this.todosComponent = [];
    
    datamanager.users.forEach(user => {
        this.beesComponents.push(new BeesComponent(user));
    });

    datamanager.users[0].post.forEach(post => {
        this.postComponents.push(new PostsComponent(post));
    });

    console.log(datamanager.users[0]);

    datamanager.users[0].album.forEach(album => {
        this.albumComponent.push(new AlbumComponent(album));
    });

    datamanager.users[0].todos.forEach(todo => {
        this.todosComponent.push(new TodosComponent(todo));
    });


}