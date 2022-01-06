import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import NotFound from '../components/NotFound'
import ExpensifyDashboard from '../components/Dashboard'
import AddExpensePage from '../components/AddExpensePage'
// import EditExpense from '../components/EditExpense'
import HelpPage from '../components/HelpPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />    
      <Switch>
        <Route path="/" component={ExpensifyDashboard} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        {/* <Route path="/edit/:id" component={EditExpense} /> */}
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter