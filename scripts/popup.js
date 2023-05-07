import SelectData from './select_data.js'


// load HTML options and event listeners for them
document.addEventListener("DOMContentLoaded", loadUserOptions)
window.onload = () => { setEventListeners() }


function loadUserOptions() {

    const options = [
        "cpu", "storage", "memory", "display", "tabs", "syncedDevices",
        "closedTabs"
    ]

    options.forEach(option => {

    })

}


function setEventListeners() {

    let optionsEls = [ ...document.getElementById('optionsSection').getElementsByClassName('option') ]

    optionsEls.forEach(el => {

        const optionButton = el.getElementsByTagName('button')[0]
        optionButton.addEventListener("click", handleBtnClick)
    })
}


async function handleBtnClick(e) {
    toggleButton(e);
    const outputEl = document.getElementById('output')

    const sd = new SelectData()
    const info = await sd.getAppropriateInfo(e.target.id)

    sd.test()

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