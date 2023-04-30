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

    async getDisplayInfo() {
        const info = await chrome.system.display.getInfo()
        try {
            const displayLayout = await chrome.system.display.getDisplayLayout()
            return info + displayLayout
        } catch {
            return info
        }    
    }

    

}

export { CollectData }
