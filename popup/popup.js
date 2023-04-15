import { CollectData } from '../scripts/collect_data.js'


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

        case 'cpuInfo': info = await cd.toggleCPUInfo()
        
    }
    

    if (info) {
        
        outputEl.innerText = JSON.stringify(info)
        return
    }
    
    outputEl.innerText = ""
    
}


function toggleButton(e) {
        
    // remove the classname "show" if it already has it and update the text
    if (e.target.classList.contains("show")) {
        e.target.innerText = 'Hidden'
        e.target.classList.remove('show')
        return
    }

    e.target.innerText = 'Shown'

    // Make sure that only one element hass the classname "show"
    Array.from(document.getElementsByClassName('show')).forEach((el) => {
        el.classList.remove('show')
    })
    e.target.classList.add('show')


}