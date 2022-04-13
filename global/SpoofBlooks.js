var Amount = Number(prompt("What amount would you like to Spoof it to?"))
setInterval(() => {
  document.getElementById("blookQuantity").innerText = `Quantity: ${Amount}`
}, 50)
