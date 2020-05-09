function MainView(datamanager, parent, newPostCallback) {

    this.beesComponents = [];
    this.postComponents = [];

    datamanager.users.forEach(user => {
        this.beesComponents.push(new BeesComponent(user));
    });

    datamanager.posts.forEach(post => {
        this.postComponents.push(new PostsComponent(post));
    });


}