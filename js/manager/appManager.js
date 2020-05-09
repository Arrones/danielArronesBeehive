function AppManager() {
    this.dataManager = new DataManager(this);
    this.uiManager = new UIManager(this);
    this.uiManager.showLoader();
    this.dataManager.startBeesDownloads();
}