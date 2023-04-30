class CollectData {
    // constructor() {
    // }    

	async getCPUInfo(){
        return await chrome.system.cpu.getInfo()
	}

    async getStorageInfo(){
        return await chrome.system.storage.getInfo()
    }

    async getMemoryInfo() {
        return await chrome.system.memory.getInfo()
    }

}

export { CollectData }
