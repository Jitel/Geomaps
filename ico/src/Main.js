/**
 * Created by jitel on 21.4.18.
 */
import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Transfer from './Transfer'
import Withdrawal from './Withdrawal'
import History from "./History";


class Main extends Component {
    render() {
        return (
            <main color="green">
                <Switch >
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Transfer' component={Transfer}/>
                    <Route exact path='/Deposit' component={Home}/>
                    <Route exact path='/Withdrawal' component={Withdrawal}/>
                    <Route exact path='/History' component={History} />
                </Switch>
            </main>
        )
    }
}


export default Main