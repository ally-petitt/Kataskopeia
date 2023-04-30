class CollectData {
    constructor(state = new Object) {
        // this.state = state
    }    

	async getCPUInfo(){

        return await chrome.system.cpu.getInfo()
	}

    async getStorageInfo(){
        // add other info to this
        return await chrome.system.storage.getInfo()
    }


}

export { CollectData }
