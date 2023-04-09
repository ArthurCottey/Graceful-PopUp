console.log("OK")


function popupCreator() {
    let popUpWindow = document.createElement("div")
    document.body.appendChild(popUpWindow)
    popUpWindow.classList.add("pop-up-window")


    let popUp = document.createElement("div")

    popUpWindow.appendChild(popUp)

    popUp.classList.add("pop-up")


}

function popup() {

    popupCreator()

    let background = document.querySelector(".pop-up-window")

    background.addEventListener("click", function () {
        background.remove()
    })




}

