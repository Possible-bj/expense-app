import uuid from 'react-uuid'
// ADD_EXPENSE
export const addExpense = ({
  description,
  amount = 0,
  note = '',
  createdAt = 0
} = {}) => ({
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
export const removeExpense = ({ id } = {}) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
