document.querySelector("button").addEventListener("click", addTransaction)

function addTransaction() {
    const transactionValue = inputTransactionValue.value
    const transactionName = inputTransactionName.value

    const stringToArray = transactionValue.split("")

    //Find the character in the array
    const lessSignalFound = stringToArray.find(minus => minus.startsWith("-"))
    const plusSignalFound = stringToArray.find(minus => minus.startsWith("+"))
    
    //Errors found 
    if(lessSignalFound == "-" && plusSignalFound == "+"){
        alert("Foram encontrados dois caracteres no valor da transação")
        return
    }

    if(transactionName === "" || transactionValue === "") {
        alert("Nome da transação ou valor da transação estão vazios")
        return
    }

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

    for(let value of transactions) {
        if(plusSignalFound == "+"){
            transactionsElement.innerHTML += `
            <div class="transaction-wrapper">
                <div class="delete">X</div>
                <div class="transaction-details" style="border-right: 5px solid #2ecc71">
                    <div>
                        <p>${transactionName}</p>
                        <p class="added">+ R$  <span>${value.added}</span> </p>
                    </div>
                </div>
            </div>
            `
            const addedSpanLength = document.querySelectorAll("p.added span")
            const addedSpanArray = []

            addedSpanLength.forEach((item) => {
                let textToNumber = Number(item.textContent)
                addedSpanArray.push(textToNumber)
            })

            const totalAmountAdded = addedSpanArray.reduce((valueOne, ValueTwo) => valueOne + ValueTwo)
            
            revenues.innerHTML = `<p class="money plus">R$ <span>${totalAmountAdded.toFixed(2)}</span> </p>`
            totalAdded = totalAmountAdded

            transactions.splice(0, transactions.length)

        } else {
            transactionsElement.innerHTML += `
            <div class="transaction-wrapper">
                <div class="delete">X</div>
                <div class="transaction-details" style="border-right: 5px solid #c0392b">
                    <div>
                        <p>${transactionName}</p>
                        <p class="removed">- R$ <span>${value.removed}</span> </p>
                    </div>
                </div>
            </div>
            `
            const removedSpanLength = document.querySelectorAll("p.removed span")
            const removedSpanArray = []

            removedSpanLength.forEach((item) => {
                let textToNumber = Number(item.textContent)
                removedSpanArray.push(textToNumber)
            })

            const totalAmountRemoved = removedSpanArray.reduce((valueOne, ValueTwo) => valueOne + ValueTwo)

            expenses.innerHTML = `<p class="money minus">R$ <span>${totalAmountRemoved.toFixed(2)}</span> </p>`
            totalRemoved = totalAmountRemoved
            transactions.splice(0, transactions.length)
        }
    }

    const total = totalAdded - totalRemoved
    currentBalance.innerText = `R$ ${total.toFixed(2)}`

    deleteTransaction()
}