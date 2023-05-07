import { CollectData } from './collect_data.js'


const cd = new CollectData();

window.onload = () => { setEventListeners() }


function setEventListeners() {
    const cpuInfo = document.getElementById('cpuInfo');
    const storageInfo = document.getElementById('storageInfo');

    let optionsEls = [ ...document.getElementById('optionsSection').getElementsByClassName('option') ]

    optionsEls.forEach((el) => {

        const optionButton = el.getElementsByTagName('button')[0]
        optionButton.addEventListener("click", handleBtnClick)
    })
}


async function handleBtnClick(e) {
    toggleButton(e);

    const outputEl = document.getElementById('output')
    let info 

    switch(e.target.id){

        case 'cpuInfo': 
            info = await cd.getCPUInfo();
            break;
        case 'storageInfo': 
            info = await cd.getStorageInfo()
            break;
        case 'memoryInfo':
            info = await cd.getMemoryInfo()
            break;
        case 'displayInfo':
            info = await cd.getDisplayInfo()
            break;
        case 'tabsInfo':
            info = await cd.getTabsInfo()
            break;
        case 'windowsInfo':
            info = await cd.getWindowsInfo()
            break;
        case 'syncedDevicesInfo':
            info = await cd.getSyncedDevicesInfo()
            break;
        case 'syncedDevicesInfo':
            info = await cd.getRecentlyClosedTabs()
            break;

    }
    
    console.log('info')
    console.log(info)

    if (info) {
        outputEl.innerHTML = "<pre>" + JSON.stringify(info,null, '\t') + "</pre>"
        return
    }
    
    outputEl.textContent = "No information returned"
    
}


function toggleButton(e) {
    const outputEl = document.getElementById('dataOutput')
        
    if (e.target.textContent == 'Hide') {

        e.target.textContent = 'Show'
        outputEl.classList.add('d-none')
        return 
    }


    hideAllElements()

    e.target.textContent = 'Hide'
    outputEl.classList.remove('d-none')
}


function hideAllElements() {
    const optionBtns = [...document.getElementsByClassName("optionBtn")]
    optionBtns.forEach(el => {
        if (el.innerText != "Show") el.innerText = "Show"
    })
}