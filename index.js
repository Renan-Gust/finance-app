const inputTransactionName = document.querySelector("input#transaction-name")
const inputTransactionValue = document.querySelector("input#transaction-value")

const revenues = document.querySelector(".balance .revenues span")
const expenses = document.querySelector(".balance .expenses span")

const currentBalance = document.querySelector(".current-balance strong")

let transactions = []

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
                    <p>+ R$ ${value.added}</p>
                </div>
            </div>
            `
            revenues.innerText = `R$ ${Number(value.added).toFixed(2)}`

        } else {
            transactionsElement.innerHTML += `
            <div class="transactions-details" style="border-right: 5px solid #c0392b">
                <div>
                    <p>${transactionName}</p>
                    <p>- R$ ${value.removed}</p>
                </div>
            </div>
            `
            expenses.innerText = `R$ ${Number(value.removed).toFixed(2)}`
        }
    }

    // transactions.splice(0, transactions.length)    
})

