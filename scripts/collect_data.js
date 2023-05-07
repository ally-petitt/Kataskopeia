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
            // only works on Chrome OS
            const displayLayout = await chrome.system.display.getDisplayLayout()
            return info + displayLayout
        } catch {
            return info
        }    
    }

    async getTabsInfo() {
        return await chrome.tabs.query({})
    }

    async getWindowsInfo() {
        return await chrome.windows.getAll({ "populate" :true })
    }

    async getSyncedDevicesInfo() {
        return await chrome.sessions.getDevices()
    }
    
    async getRecentlyClosedTabs() {
        return await chrome.sessions.getRecentlyClosed()
    }


}

export { CollectData }
