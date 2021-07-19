const inputTransactionName = document.querySelector("input#transaction-name")
const inputTransactionValue = document.querySelector("input#transaction-value")

const revenues = document.querySelector(".balance .revenues div")
const expenses = document.querySelector(".balance .expenses div")

const currentBalance = document.querySelector(".current-balance strong")

let transactions = []
let totalAdded = 0
let totalRemoved = 0

document.querySelector("button").addEventListener("click", () => {
    const transactionValue = inputTransactionValue.value
    const transactionName = inputTransactionName.value
    const stringToArray = transactionValue.split("")

    if(transactionName === "" || transactionValue === "") {
        alert("Nome da transação ou valor da transação estão vazios")
        return
    }

    //Find the character in the array
    const lessSignalFound = stringToArray.find(minus => minus.startsWith("-"))
    const plusSignalFound = stringToArray.find(minus => minus.startsWith("+"))

    //Remove character
    const removeLess = transactionValue.split("-")
    const removePlus = transactionValue.split("+")

    const filteredLess = removeLess.filter(el => el != "")
    const filteredPlus = removePlus.filter(el => el != "")

    if(lessSignalFound == "-") {
        transactions.push({
            removed: `${filteredLess}`
        })
    }

    if(plusSignalFound == "+") {
        transactions.push({
            added: `${filteredPlus}`
        })
    }
    
    const transactionsElement = document.querySelector(".transactions .transactions-block")

    for(let value of transactions) {
        if(plusSignalFound == "+"){
            transactionsElement.innerHTML += `
            <div class="transactions-details" style="border-right: 5px solid #2ecc71">
                <div>
                    <p>${transactionName}</p>
                    <p class="added">+ R$  <span>${value.added}</span> </p>
                </div>
            </div>
            `
            const addedSpanLength = document.querySelectorAll("p.added span")
            const addedSpanArray = []

            addedSpanLength.forEach((item) => {
                let textToNumber = Number(item.textContent)
                addedSpanArray.push(textToNumber)
            })

            const totalAmountAdded = addedSpanArray.reduce((acc, acc2) => acc + acc2)
            
            revenues.innerHTML = `<p class="money plus">R$ <span>${totalAmountAdded.toFixed(2)}</span> </p>`
            totalAdded = totalAmountAdded
            transactions.splice(0, transactions.length)

        } else {
            transactionsElement.innerHTML += `
            <div class="transactions-details" style="border-right: 5px solid #c0392b">
                <div>
                    <p>${transactionName}</p>
                    <p class="removed">- R$ <span>${value.removed}</span> </p>
                </div>
            </div>
            `
            const removedSpanLength = document.querySelectorAll("p.removed span")
            const removedSpanArray = []

            removedSpanLength.forEach((item) => {
                let textToNumber = Number(item.textContent)
                removedSpanArray.push(textToNumber)
            })

            const totalAmountRemoved = removedSpanArray.reduce((acc, acc2) => acc + acc2)

            expenses.innerHTML = `<p class="money minus">R$ <span>${totalAmountRemoved.toFixed(2)}</span> </p>`
            totalRemoved = totalAmountRemoved
            transactions.splice(0, transactions.length)
        }
    }

    const total = totalAdded - totalRemoved
    currentBalance.innerText = `R$ ${total.toFixed(2)}`
})