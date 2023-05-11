export default class CollectData {
    
    async getAppropriateInfo(infoId){

        switch(infoId){

            case 'cpu': 
                return await this.getCPUInfo();
            case 'storage': 
                return await this.getStorageInfo()
            case 'memory':
                return await this.getMemoryInfo()
            case 'display':
                return await this.getDisplayInfo()
            case 'tabs':
                return await this.getTabsInfo()
            case 'windows':
                return await this.getWindowsInfo()
            case 'syncedDevices':
                return await this.getSyncedDevicesInfo()
            case 'syncedDevices':
                return await this.getRecentlyClosedTabs()
        }
    }


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

