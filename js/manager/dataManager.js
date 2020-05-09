function DataManager(appManager) {
  this.appManager = appManager;
  this.users = [];
  this.albums = [];
  this.posts = [];
  this.todos = [];
}

DataManager.prototype.startBeesDownloads = function () {
  const urlUsers = fetch(
    "https://beehive-270a2.firebaseio.com/data/users.json"
  );
  const urlPost = fetch("https://beehive-270a2.firebaseio.com/data/posts.json");
  const urlComments = fetch(
    "https://beehive-270a2.firebaseio.com/data/comments.json"
  );
  const urlAlbums = fetch(
    "https://beehive-270a2.firebaseio.com/data/albums.json"
  );
  const urlPhotos = fetch(
    "https://beehive-270a2.firebaseio.com/data/photos.json"
  );
  const urlTodos = fetch(
    "https://beehive-270a2.firebaseio.com/data/todos.json"
  );

  Promise.all([urlUsers, urlPost, urlComments, urlAlbums, urlPhotos, urlTodos])
    .then((response) => {
      return Promise.all(response.map((res) => res.json()));
    })
    .then((response) => {
      response[5].forEach((todos) => {
        var todos = new Todos(
          todos.id,
          todos.userId,
          todos.completed,
          todos.title
        );
        this.todos.push(todos);
      });

      response[3].forEach((album) => {
        var photoArray = [];
        response[4].forEach((photo) => {
          if (album.id === photo.albumId) {
            photo = new Photos(
              photo.id,
              album.id,
              photo.thumbnailUrl,
              photo.title,
              photo.url
            );
            photoArray.push(photo);
          }
        });
        album = new Album(album.id, album.title, album.userId, photoArray);
        this.albums.push(album);
      });

      response[1].forEach((post) => {
        var commentsArray = [];

        if (response[2] != null) {
          response[2].forEach((comments) => {
            if (post.id === comments.id) {
              comments = new Comments(
                comments.id,
                comments.email,
                comments.name,
                comments.body,
                post.id
              );
              commentsArray.push(comments);
            }
          });
        }
        posts = new Post(
          post.id,
          post.body,
          post.title,
          post.userId,
          commentsArray
        );
        this.posts.push(posts);
      });

      response[0].forEach((user) => {
        let albumsArray = [];
        let postsArray = [];
        let todosArray = [];

        this.albums.forEach((album) => {
          if (album.userId === user.id) {
            albumsArray.push(album);
          }
        });

        this.posts.forEach((post) => {
          if (post.userId === user.id) {
            postsArray.push(post);
          }
        });

        this.todos.forEach((todo) => {
          if (todo.userId === user.id) {
            todosArray.push(todo);
          }
        });

        user = new Bees(
          user.id,
          user.name,
          user.username,
          user.email,
          user.phone,
          user.address.city,
          postsArray,
          albumsArray,
          todosArray
        );
        this.users.push(user);
      });

      this.appManager.uiManager.createUI();
    });
};
