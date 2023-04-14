import { CollectData } from '../scripts/collect_data.js'

console.log("test")
let state = new Object
const cd = new CollectData(state);

window.onload = () => {
    setEventListeners()
}


function setEventListeners() {
    const cpuInfo = document.getElementById('cpuInfo');

    cpuInfo.addEventListener("click", (e) => {toggleButton(e); cd.getCPUInfo()})
}

function toggleButton(e) {
    const state = e.target.innerText
    
    if (state === "Enabled") e.target.innerText = 'Disabled'
    else if (state == "Disabled") e.target.innerText = 'Enabled'


}