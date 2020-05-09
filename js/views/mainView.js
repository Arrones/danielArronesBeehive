function MainView(posts, parent, newPostCallback) {

    this.beesComponents = [];

    posts.forEach(post => {
        this.beesComponents.push(new BeesComponent(post, parent));
    });

}