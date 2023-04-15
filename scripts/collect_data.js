class CollectData {
    constructor(state = new Object) {
        this.state = state
        this.state.activeData = "test"
    }    

	async toggleCPUInfo(){
        this.state.cpuInfo = !this.state.cpuInfo


        if (!this.state.cpuInfo){
            this.state.activeData = null

        } else {

            const info = await chrome.system.cpu.getInfo()
            this.state.activeData = info
        }


        return this.state.activeData
	}


}

export { CollectData }
