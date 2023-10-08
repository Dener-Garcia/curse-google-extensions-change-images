const form = document.querySelector("form")
const input = document.querySelector("input")

// funcao que a extensão enxerga 
const replaceImages = (inputField) =>{
   const getImages = document.querySelectorAll("img")
   getImages.forEach((image) => image.src = inputField)
}

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: replaceImages,
        args: [input.value]
    })
})