import { createStore, combineReducers  } from 'redux'
import uuid from 'react-uuid'
// ADD_EXPENSE
const addExpense = ({ description, amount, note = '', createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    amount,
    note,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
  return ({
  type: 'REMOVE_EXPENSE',
  id
})
}
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
})
// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

// expenses Reducer
const expensesReducerDefaulltState = []
const expensesReducer = ( state = expensesReducerDefaulltState, action) => {
  switch ( action.type ) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expenses
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id )
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if ( expense.id === action.id ) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}
// filters reducer
const filtersReducerDefaulltState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaulltState, action) => {
  switch ( action.type ) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }    
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }    
    default:
      return state
  }
}

// get visible expenses 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}
// store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)
store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})
// expenses dispatch
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -2100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expenses.id }))
// store.dispatch(editExpense( expenseTwo.expenses.id, { amount: 500 }))

// filter dispatch
// store.dispatch(setTextFilter('coffee'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
store.dispatch(sortByDate())

// store.dispatch(setStartDate(120))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(999))

// demo state
const demoState = {
  expenses: [{
    id: 'sjlnfs;obd',
    description: 'January rent',
    note: 'This is the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}
