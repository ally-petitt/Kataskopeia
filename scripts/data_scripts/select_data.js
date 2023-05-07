import CollectData from "./collect_data.js";

export default class SelectData extends CollectData{

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
}