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
            case 'storageInfo': info = await cd.getStorageInfo()
            break;
        case 'memoryInfo':
            case 'memoryInfo': info = await cd.getMemoryInfo()
            break;
        case 'displayInfo':
            case 'displayInfo': info = await cd.getDisplayInfo()
            break;
        case 'tabsInfo':
            case 'tabsInfo': info = await cd.getTabsInfo()
            break;
        case 'windowsInfo':
            case 'windowsInfo': info = await cd.getWindowsInfo()
            break;


    }
    

    if (info) {
        outputEl.innerHTML = "<pre>" + JSON.stringify(info,null, '\t') + "</pre>"
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

    // change any buttons that say "Hide" to "Show"
    const optionBtns = [...document.getElementsByClassName("optionBtn")]
    optionBtns.forEach(el => {
        if (el.innerText != "Show") el.innerText = "Show"
    })

    // change the text of the button cooresponding with the info being shown to "Hide"
    e.target.innerText = 'Hide'
    outputEl.classList.remove('d-none')
    return

}