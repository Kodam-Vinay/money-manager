import {Component} from 'react'
import {v4 as uniqueId} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialTransactionList = []

// Write your code here
class MoneyManager extends Component {
  state = {
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
    moneyTitle: '',
    moneyAmount: '',
    transactionType: 'INCOME',
    transactionList: initialTransactionList,
  }

  onAddMoney = event => {
    event.preventDefault()
    const {moneyTitle, moneyAmount, transactionType} = this.state
    let {balanceAmount, incomeAmount, expensesAmount} = this.state
    const newTransaction = {
      id: uniqueId(),
      moneyTitle,
      moneyAmount,
      transactionType,
    }
    if (transactionType === 'INCOME') {
      incomeAmount += moneyAmount
    } else {
      expensesAmount += moneyAmount
    }
    balanceAmount = incomeAmount - expensesAmount
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      incomeAmount,
      expensesAmount,
      balanceAmount,
      moneyTitle: '',
      moneyAmount: '',
    }))
    this.setState()
  }

  onSelectValue = event => {
    this.setState({transactionType: event.target.value})
  }

  onEnterTitle = event => {
    this.setState({moneyTitle: event.target.value})
  }

  onEnterAmount = event => {
    const money = parseInt(event.target.value)
    this.setState({moneyAmount: money})
  }

  deleteTransaction = (id, moneyAmount, transactionType) => {
    const {transactionList} = this.state
    let {incomeAmount, expensesAmount, balanceAmount} = this.state
    const filteredList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    if (transactionType === 'INCOME') {
      incomeAmount -= moneyAmount
    } else {
      expensesAmount -= moneyAmount
    }
    balanceAmount = incomeAmount - expensesAmount
    this.setState({
      transactionList: filteredList,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    })
  }

  render() {
    const {
      moneyTitle,
      moneyAmount,
      transactionList,
      balanceAmount,
      incomeAmount,
      expensesAmount,
    } = this.state
    return (
      <div className="bg-container">
        <div className="user-details-container">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="welcome-back-text">
            Welcome back to your
            <span className="money-manger-text"> Money Manager</span>
          </p>
        </div>

        {/* balance */}
        <ul className="balance-status-container">
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
        </ul>

        <div className="transaction-money-details-container">
          {/* transaction money */}
          <div className="form-container">
            <form className="transaction-form" onSubmit={this.onAddMoney}>
              <h1 className="add-transaction-text">Add Transaction</h1>
              <div className="each-input-container">
                <label htmlFor="transactionTitle" className="label-el">
                  TITLE
                </label>
                <input
                  className="input-element"
                  id="transactionTitle"
                  placeholder="TITLE"
                  onChange={this.onEnterTitle}
                  value={moneyTitle}
                />
              </div>
              <div className="each-input-container">
                <label htmlFor="transactionAmount" className="label-el">
                  AMOUNT
                </label>
                <input
                  className="input-element"
                  id="transactionAmount"
                  placeholder="AMOUNT"
                  onChange={this.onEnterAmount}
                  value={moneyAmount}
                />
              </div>
              <div className="each-input-container">
                <label htmlFor="transactionIncomeType" className="label-el">
                  AMOUNT
                </label>
                <select
                  className="input-element select-container"
                  onChange={this.onSelectValue}
                >
                  <option
                    value={transactionTypeOptions[0].optionId}
                    key={transactionTypeOptions[0].optionId}
                  >
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option
                    value={transactionTypeOptions[1].optionId}
                    key={transactionTypeOptions[1].optionId}
                  >
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
                <button type="submit" className="add-money-button">
                  Add
                </button>
              </div>
            </form>
          </div>

          {/* transaction details */}
          <ul className="transaction-details-container form-container">
            <h1 className="transaction-history-name">History</h1>
            <ul className="form-container transaction-list-container">
              <li className="list-head">
                <p className="each-list-name list-name-1">Title</p>
                <p className="each-list-name list-name-2">Amount</p>
                <p className="each-list-name list-name-3">Type</p>
              </li>
            </ul>
            {transactionList.map(eachTransaction => (
              <TransactionItem
                transactionList={eachTransaction}
                key={eachTransaction.id}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
