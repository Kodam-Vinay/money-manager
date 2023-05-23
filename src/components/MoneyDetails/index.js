import {v4 as uniqueId} from 'uuid'
import './index.css'

const moneyManagerProperties = [
  {
    id: uniqueId(),
    name: 'Your Balance',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    alt: 'balance',
    containerClass: 'balance',
    imageClass: 'balance-logo',
  },
  {
    id: uniqueId(),
    name: 'Your Income',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    alt: 'income',
    containerClass: 'income',
    imageClass: 'income-logo',
  },
  {
    id: uniqueId(),
    name: 'Your Expenses',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    alt: 'expenses',
    containerClass: 'expenses',
    imageClass: 'expenses-logo',
  },
]

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  return (
    <>
      <li
        key={moneyManagerProperties[0].id}
        className={`each-money-details-container ${moneyManagerProperties[0].containerClass}`}
      >
        <img
          src={moneyManagerProperties[0].imgUrl}
          alt={moneyManagerProperties[0].alt}
          className={`image-logo ${moneyManagerProperties[0].imageClass}`}
        />
        <div className="text-container">
          <p className="balance-text">{moneyManagerProperties[0].name}</p>
          <p className="balance-rupees" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </li>
      <li
        key={moneyManagerProperties[1].id}
        className={`each-money-details-container ${moneyManagerProperties[1].containerClass}`}
      >
        <img
          src={moneyManagerProperties[1].imgUrl}
          alt={moneyManagerProperties[1].alt}
          className={`image-logo ${moneyManagerProperties[1].imageClass}`}
        />
        <div className="text-container">
          <p className="balance-text">{moneyManagerProperties[1].name}</p>
          <p className="balance-rupees" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </li>
      <li
        key={moneyManagerProperties[2].id}
        className={`each-money-details-container ${moneyManagerProperties[2].containerClass}`}
      >
        <img
          src={moneyManagerProperties[2].imgUrl}
          alt={moneyManagerProperties[2].alt}
          className={`image-logo ${moneyManagerProperties[2].imageClass}`}
        />
        <div className="text-container">
          <p className="balance-text">{moneyManagerProperties[2].name}</p>
          <p className="balance-rupees" data-testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </li>
    </>
  )
}
export default MoneyDetails
