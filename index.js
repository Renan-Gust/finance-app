const inputTransactionName = document.querySelector("input#transaction-name")
const inputTransactionValue = document.querySelector("input#transaction-value")

const transactionsHTML = document.querySelector(".transactions")

let transactions = []

document.querySelector("button").addEventListener("click", () => {
    const transactionValue = inputTransactionValue.value
    // const stringToArray = transactionValue.split("")

    // //Find the character in the array
    // const lessSignalFound = stringToArray.find(minus => minus.startsWith("-"))
    // const plusSignalFound = stringToArray.find(minus => minus.startsWith("+"))


    
    
    // //Remove character
    // const removeLess = transactionValue.split("-")
    // const removePlus = transactionValue.split("+")


    // const filteredLess = removeLess.filter((el) => {
    //     return el != ""
    // })

    // const filteredPlus = removePlus.filter((el) => {
    //     return el != ""
    // })

    // if(lessSignalFound == "-") {
    //     transactions.push({
    //         removed: `${filteredLess.toString()}`
    //     })
    // }

    // if(plusSignalFound == "+") {
    //     transactions.push({
    //         added: `${filteredPlus.toString()}`
    //     })
    // }

    transactions.push({
        added: transactionValue
    })

    // console.log(transactions[0].added)


    

    // const total = transactions.reduce((accumulator, finaValue) => {
    //     // return Number(accumulator) + Number(finaValue)
    //     return console.log(transactions[0])
    // })
    

    const transactionsElement = document.querySelector(".transactions")
    
    for(let value of transactions) {
        console.log(value)
        console.log(transactions)

        transactionsElement.innerHTML += `
            <div>
            <p>Adicionado: ${value.added}</p>
            </div>
        `
        

        // if(plusSignalFound == "+"){
        //     transactionsElement.innerHTML += `
        //     <div>
        //         <p>Adicionado: ${value.added}</p>
        //     </div>
        //     `
        // } 
        // else {
        //     transactionsElement.innerHTML += `
        //     <div>
        //         <p>Retirado: ${transactions[i].removed}</p>
        //     </div>
        //     `
    
        //     console.log(transactions[i].removed)
        // }

        // if(lessSignalFound == "-") {
            
            
        // }

        
    }
})


/*
Quando clicar no botão 

verificar se o input value e o nome da transação não estar vazio
e verificar o sinal

e adicionar no array transitions que vai renderizar
nas transações


*/