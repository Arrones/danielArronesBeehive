function AppManager() {
    this.dataManager = new DataManager(this);
    this.uiManager = new UIManager(this);
    this.uiManager.showLoader();
    this.dataManager.startUsersDownload();
    this.dataManager.startTodosDownload();
    this.dataManager.startPhotosDownload();
    this.dataManager.startAlbumsDownload();
    this.dataManager.startCommentsDownload();
    this.dataManager.startPostsDownload();
}