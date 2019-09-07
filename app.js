window.onload = function() {

  let firstValue        //no va a tener valores
  let selectedOperator //no va a tener valores
  let secondValue

  const display   = document.getElementById("display")
  const btnMC     = document.getElementById("btnMC")
  const btnMadd   = document.getElementById("btnMadd")
  const btnMsub   = document.getElementById("btnMsub")
  const btnDiv    = document.getElementById("btnDiv")
  const btnSeven  = document.getElementById("btnSeven")
  const btnEight  = document.getElementById("btnEight")
  const btnNine   = document.getElementById("btnNine")
  const btnMult   = document.getElementById("btnMult")
  const btnFour   = document.getElementById("btnFour")
  const btnFive   = document.getElementById("btnFive")
  const btnSix    = document.getElementById("btnSix")
  const btnSub    = document.getElementById("btnSub")
  const btnOne    = document.getElementById("btnOne")
  const btnTwo    = document.getElementById("btnTwo")
  const btnThree  = document.getElementById("btnThree")
  const btnAdd    = document.getElementById("btnAdd")
  const btnC      = document.getElementById("btnC")
  const btnCero   = document.getElementById("btnCero")
  const btnPoint  = document.getElementById("btnPoint")
  const btnEqual  = document.getElementById("btnEqual")

  btnOne.onclick = function(event){
    display.innerText += event.target.textContent
  }
  const numberOnclick = function(event) {
    display.innerText += event.target.textContent
  }

btnSeven.onclick  = numberOnclick
btnEight.onclick  = numberOnclick
btnNine.onclick   = numberOnclick
btnSix.onclick    = numberOnclick
btnFive.onclick   = numberOnclick
btnFour.onclick   = numberOnclick
btnThree.onclick  = numberOnclick
btnTwo.onclick    = numberOnclick
btnOne.onclick    = numberOnclick
btnCero.onclick   = numberOnclick
btnPoint.onclick  = numberOnclick

btnC.onclick = function() {
  display.innerText = ""
}

const operatorFunction = function(event) {
  firstValue = parseFloat(display.innerText)
  display.innerText = "" //permite limpiar la pantalla
  selectedOperator = event.target.textContent
  console.log("firstValue", firstValue)
  console.log("selectedOperator", selectedOperator)
}

btnDiv.onclick = operatorFunction
btnMult.onclick = operatorFunction
btnSub.onclick = operatorFunction
btnAdd.onclick = operatorFunction

btnEqual.onclick = function(event) {
  secondValue = parseFloat(display.innerText) //guarda lo que está en el display
  let result
  switch (selectedOperator)  {
    case '+':
      result = firstValue + secondValue
      break;
    case '-':
      result = firstValue - secondValue
      break;
    case '*':
      result = firstValue - secondValue
      break;
    case '/':
      result = firstValue / secondValue
      break;
      default:
      break;
    }
    display.innerText = result
  }
}
