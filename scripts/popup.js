import { CollectData } from './collect_data.js'


const cd = new CollectData();

window.onload = () => { setEventListeners() }


function setEventListeners() {
    const cpuInfo = document.getElementById('cpuInfo');
    const storageInfo = document.getElementById('storageInfo');

    // storageInfo.addEventListener("click", handleBtnClick)
    // cpuInfo.addEventListener("click", handleBtnClick)
    let optionsEls = [ ...document.getElementById('optionsSection').getElementsByClassName('option') ]
    console.log(optionsEls)

    optionsEls.forEach((el) => {
        console.log(el)

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