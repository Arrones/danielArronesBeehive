function MainView(posts, parent, newPostCallback) {

    this.container = document.createElement('div');
    this.container.classList.add('mainView');
    parent.appendChild(this.container);

    this.beesComponents = [];

    posts.forEach(post => {
        //TODO: Add post components
        this.beesComponents.push(new BeesComponent(post, this.container));
        console.log(post);
    });

    this.newPostBtn = document.createElement('div');
    this.container.appendChild(this.newPostBtn);
    this.newPostBtn.classList.add('newPostBtn');
    this.newPostBtn.style.top = (window.innerHeight - 60) + 'px';
    this.newPostBtn.style.left = (window.innerWidth - 90) + 'px';
    this.newPostBtn.innerHTML = 'NEW';
    this.newPostBtn.onclick = newPostCallback;
}