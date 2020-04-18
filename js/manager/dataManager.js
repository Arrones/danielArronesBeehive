function DataManager(appManager) {
    this.appManager = appManager;
    this.posts = [];
}

DataManager.prototype.startUsersDownload = function () {
    var url = 'https://beehive-270a2.firebaseio.com/data/users.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processPostsRequest.bind(this);
}

DataManager.prototype.startTodosDownload = function () {
    var url = 'https://beehive-270a2.firebaseio.com/data/todos.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processPostsRequest.bind(this);
}
DataManager.prototype.startPhotosDownload = function () {
    var url = 'https://beehive-270a2.firebaseio.com/data/photos.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processPostsRequest.bind(this);
}
DataManager.prototype.startAlbumsDownload = function () {
    var url = 'https://beehive-270a2.firebaseio.com/data/albums.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processPostsRequest.bind(this);
}

DataManager.prototype.startCommentsDownload = function () {
    var url = 'https://beehive-270a2.firebaseio.com/data/comments.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processPostsRequest.bind(this);
}

DataManager.prototype.startPostsDownload = function () {
    var url = 'https://beehive-270a2.firebaseio.com/data/posts.json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = this.processPostsRequest.bind(this);
}

DataManager.prototype.processPostsRequest = function (e) {
    var request = e.target;
    if (request.readyState === 4) {
        console.log(request);
        switch (request.status) {
            case 200:
                console.log('TODO COOOL');
                this.processPostResponse(request.responseText);
                break;
            case 404:
                console.log('ALGO NO ESTA BIEN');
                break;
        }
    }
};

DataManager.prototype.processPostResponse = function (text) {

    var data = JSON.parse(text);

    console.log(data);

    /*for (const key in data) {
        if (data.hasOwnProperty(key)) {
            var post = data[key];
            this.posts.push(new Post(post.title, post.body, post.email, post.name));
        }
    }

    console.log(this.posts);
    this.appManager.uiManager.createUI();*/
};