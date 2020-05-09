function UIManager(appManager) {
    this.appManager = appManager;
    this.mainView = null;
    this.newPostView = null;
    this.appContainer = document.getElementById('Bees');

}

UIManager.prototype.showLoader = function () {
    console.log('showLoader');
}

UIManager.prototype.createUI = function () {
    console.log('showBeesView');
    this.mainView = new MainView(this.appManager.dataManager.posts, this.appContainer, this.showNewPostView.bind(this));

   // this.newPostView = new NewPostView(this.appContainer, null);
    //this.newPostView.hide();
};

UIManager.prototype.showNewPostView = function () {
    console.log(this);
    this.newPostView.show();
};


UIManager.prototype.hideNewPostView = function () {
    console.log(this);
};
