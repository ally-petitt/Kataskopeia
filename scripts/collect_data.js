class CollectData {
    constructor(state = new Object) {
        // this.state = state
    }    

	async getCPUInfo(){
        console.log('cpu')
        return await chrome.system.cpu.getInfo()
	}

    async getStorageInfo(){
        // add other info to this
        // let info = await chrome.system.storage.getInfo()
        // console.log(info)
        console.log('storage')
        return {'test': "test2"}
    }


}

export { CollectData }
