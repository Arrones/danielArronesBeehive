function UIManager(appManager) {
    this.appManager = appManager;
    this.mainView = null;
    this.newPostView = null;
    this.appContainer = document.getElementById('MainView');

}

UIManager.prototype.showLoader = function () {

}

UIManager.prototype.createUI = function () {
    this.mainView = new MainView(this.appManager.dataManager, this.appContainer, this.showNewPostView.bind(this));
};

UIManager.prototype.showNewPostView = function () {
    console.log(this);
    this.newPostView.show();
};


UIManager.prototype.hideNewPostView = function () {
    console.log(this);
};
