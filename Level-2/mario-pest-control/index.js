const form = document.pestForm
var totalPrice = document.getElementById("totalPrice")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const numGoombas = form.numGoombas.value
    const numBobombs = form.numBobombs.value
    const numCheeps = form.numCheeps.value
    var goombaBill = numGoombas * 5
    var bobombBill = numBobombs * 7
    var cheepBill = numCheeps * 11
    var totalBill = goombaBill + bobombBill + cheepBill

    
    totalPrice.append(totalBill + " coins")
    
})