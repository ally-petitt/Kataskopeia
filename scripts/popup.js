import SelectData from './select_data.js'


// load HTML options and event listeners for them
document.addEventListener("DOMContentLoaded", loadUserOptions)
// window.onload = () => { setEventListeners() }


function loadUserOptions() {

    const options = [
        "cpu", "storage", "memory", "display", "tabs", "syncedDevices",
        "closedTabs"
    ]

    options.forEach(option => {
        const userOption = createUserOption(option)
        console.log(userOption)
        document.getElementById('optionsSection').appendChild(userOption)
    })
}


function createUserOption(option) {
    const optionContainer = document.createElement('div')
    optionContainer.id = "option"
    optionContainer.classList.add("option")

    const label = createLabel(option)
    const btn = createBtn(option)

    optionContainer.appendChild(label)
    optionContainer.appendChild(btn)

    return optionContainer
}


function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.substr(1);
}


function createLabel(option) {
    const label = document.createElement("label")
    label.for = option
    label.textContent = "Show " + capitalizeFirstLetter(option) + " Information" 

    return label
}


function createBtn(option) {
    const btn = document.createElement("button")
    btn.className = "optionBtn"
    btn.id = option
    btn.textContent = "Show" 
    btn.addEventListener("click", handleBtnClick)

    return btn
}


// function setEventListeners() {

//     let optionsEls = [ ...document.getElementById('optionsSection').getElementsByClassName('option') ]

//     optionsEls.forEach(el => {

//         const optionButton = el.getElementsByTagName('button')[0]
//         optionButton.addEventListener("click", handleBtnClick)
//     })
// }


async function handleBtnClick(e) {
    toggleButton(e);
    const outputEl = document.getElementById('output')

    const sd = new SelectData()
    const info = await sd.getAppropriateInfo(e.target.id)


    info ? outputEl.innerHTML = "<pre>" + JSON.stringify(info,null, '\t') + "</pre>"
        : outputEl.textContent = "No information returned"
    
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