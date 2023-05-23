import './index.css'

const TransactionItem = props => {
  const {transactionList, deleteTransaction} = props

  const {id, moneyTitle, moneyAmount, transactionType} = transactionList
  const onDeleteTransaction = () => {
    deleteTransaction(id, moneyAmount, transactionType)
  }
  return (
    <li className="each-transaction-container">
      <div className="div-transaction-container">
        <p className="each-transaction list-name-1">{moneyTitle}</p>
        <p className="each-transaction list-name-2">{moneyAmount}</p>
        <p className="each-transaction list-name-3">{transactionType}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        data-testid="delete"
        onClick={onDeleteTransaction}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
