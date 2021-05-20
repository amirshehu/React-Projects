import React from 'react';
// import ExpenseDashBoardPage from '../components/ExpenseDashboard'
// import CreateExpensePage from '../components/CreateExpense'
// import EditExpensePage from '../components/EditExpense'
// import HelpPage from '../components/HelpPage'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import PortfolioProject from '../components/PortfolioItemPage'
import PageNotFound from '../components/NotFoundPage'
import { BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

// set up individual pages

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
                
        {/* <Route path='/' component={ExpenseDashBoardPage} exact={true} />
        <Route path='/create' component={CreateExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path='/help' component={HelpPage} /> */}
        <Route path='/' component = {Home} exact = {true} />     
        <Route path='/portfolio/:id' component = {PortfolioProject}  />     
        <Route path='/portfolio' component = {Portfolio}  />     
                <Route path='/contact' component={Contact}/>
                <Route component={PageNotFound} />
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;