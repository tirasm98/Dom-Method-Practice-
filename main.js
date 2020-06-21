let addElement = document.createElement('button')
let anchorElement = document.createElement('A')
let buttonElement= document.createElement('BUTTON')
let imageElement= document.createElement('img')
let mainElement = document.createElement('main')
let parentElement = document.querySelector('body')
let removeElement= document.createElement('button')
let userInput = document.createElement('input')

parentElement.append(buttonElement)
parentElement.append(mainElement)
parentElement.append(imageElement)
parentElement.append(anchorElement)
parentElement.append(removeElement)
parentElement.append(addElement)
parentElement.append(userInput)

buttonElement.append("Remove")

buttonElement.addEventListener("click", function () {
 parentElement.remove()
    console.log("button clicked")
})

imageElement.className = "image"
imageElement.src = "https://i1.wp.com/butwhythopodcast.com/wp-content/uploads/2020/02/t7qz74ugklzz57zsnzqod3zod42tligc_hq.jpg?resize=735%2C413&ssl=1"

anchorElement,className = "link"
anchorElement.href = "https://www.healthline.com/health/13-self-love-habits-every-woman-needs-to-have#1"
anchorElement.append('In need of self-love?')

removeElement.append('Clear')

removeElement.addEventListener("click", function () {
 userInput.remove()
})

addElement.append('Change')

addElement.addEventListener("click", function (){
})