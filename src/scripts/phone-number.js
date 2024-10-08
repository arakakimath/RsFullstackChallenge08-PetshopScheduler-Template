const phoneInput = document.getElementById("clientPhone");
let phoneNumber = "";
const listOfNumbers = " 0123456789";
const listOfCaracteres = "+()-"

phoneInput.addEventListener("focus",() => {
  if (!phoneInput.value.includes("+"))
    phoneInput.value = "+";
})

phoneInput.addEventListener("input", () => {
  if (!phoneInput.value.includes("+"))
    phoneInput.value = "+";

  if (!listOfNumbers.includes(phoneInput.value[phoneInput.value.length - 1]) && Verify()) 
    phoneInput.value = phoneInput.value.slice(0,-1)

  function Verify() {
    let contain = false
    phoneInput.value.slice(0,-1).map((c) => {
      if (listOfCaracteres.includes(c))
        contain = true
    })
    return contain
  }

  if (phoneInput.value[phoneInput.value.length - 1] === " ") {
    if (!phoneInput.value.includes("("))
      phoneInput.value += "("
    else if (!phoneInput.value.includes(")")) {
      phoneInput.value = phoneInput.value.slice(0,-1)
      phoneInput.value += ") "
    }
    else if (!phoneInput.value.includes("-") && listOfNumbers.includes(phoneInput.value[phoneInput.value.length - 2])) {
      phoneInput.value = phoneInput.value.slice(0,-1)
      phoneInput.value += "-"
    }
  }
})