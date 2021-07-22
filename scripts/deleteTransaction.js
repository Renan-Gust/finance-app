function deleteTransaction() {
    const deleteTransaction = document.querySelectorAll(".delete")

    deleteTransaction.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.target.closest(".transaction-wrapper").remove()
        })
    })
}