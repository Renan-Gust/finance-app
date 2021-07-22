const revenues = document.querySelector(".balance .revenues div")
const expenses = document.querySelector(".balance .expenses div")

const currentBalance = document.querySelector(".current-balance strong")
const transactionsElement = document.querySelector(".transactions .transactions-block")

const inputTransactionName = document.querySelector("input#transaction-name")
const inputTransactionValue = document.querySelector("input#transaction-value")

let transactions = []
let totalAdded = 0
let totalRemoved = 0