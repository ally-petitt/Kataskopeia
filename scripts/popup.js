import { CollectData } from './collect_data.js'


const cd = new CollectData();

window.onload = () => { setEventListeners() }


function setEventListeners() {
    const cpuInfo = document.getElementById('cpuInfo');

    cpuInfo.addEventListener("click", handleBtnClick)
}


async function handleBtnClick(e) {
    toggleButton(e);

    const outputEl = document.getElementById('output')
    let info 

    switch(e.target.id){

        case 'cpuInfo': info = await cd.getCPUInfo()
        // case 'storageInfo': info = await cd.getStorageInfo()

    }
    

    if (info) {
        
        outputEl.innerText = JSON.stringify(info,null, 2)
        return
    }
    
    outputEl.innerText = ""
    
}


function toggleButton(e) {
    const outputEl = document.getElementById('dataOutput')
        
    if (e.target.innerText == 'Hide') {
        e.target.innerText = 'Show'
        outputEl.classList.add('d-none')
        return 
    }

    e.target.innerText = 'Hide'
    outputEl.classList.remove('d-none')
    return

}