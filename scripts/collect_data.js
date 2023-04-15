class CollectData {
    constructor(state = new Object) {
        this.state = state
    }    

	async toggleCPUInfo(){
        this.state.cpuInfo = !this.state.cpuInfo
        let data


        if (!this.state.cpuInfo){
            data = null

        } else {

            const info = await chrome.system.cpu.getInfo()
            data = info
        }


        return data
	}


}

export { CollectData }
