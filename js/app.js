let display = document.querySelector(".display")
let buttons = Array.from(document.querySelectorAll(".button"))

buttons.map((button) => {
  button.addEventListener('click', (e) => {

   let symbol = document.querySelectorAll(".display")[0].textContent.length
   console.log(symbol)

   if (symbol === 9) {
    display.classList.toggle('display2')
   }

   if (symbol === 12) {
    display.classList.toggle('display3')
   }

   switch(e.target.innerText) {
    case "AC": 
      display.innerText = "0"
      location.reload()
      break 

    case "=": 
      try {
        display.innerText = eval(display.innerText)
      }
      catch (e) {display.innerText = "Ошибка."}
      break

    case "%":
      let passedText = display.innerText + "/100"
      display.innerText = eval(passedText)
      break

    case "+/-": 
      display.innerText = "-"
      break

    default: 
      if (display.innerText === "0" && e.target.innerText !== ".") {
        display.innerText = e.target.innerText
      } 

      else {
        display.innerText += e.target.innerText
      }
   }
  })
})
