/**
 * Created by jitel on 21.4.18.
 */
import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Header.css";




class Header extends Component {

    render() {
        return (
            <header className="Header">
                <div>
                    <nav>
                        <ul>
                            <Link to="/">/>
                            </Link>
                            <Link to="/">
                                <button className="Rectangle-5"><a className="Deposit">Deposit</a></button>
                            </Link>
                            <Link to="transfer">
                                <button className="Rectangle-5-Copy"><a className="Transfer">Transfer</a></button>
                            </Link>
                            <Link to="Withdrawal">
                                <button className="Rectangle-5-Copy"><a className="Withdrawal">Witdrawal</a></button>
                            </Link>
                            <Link to="history">
                                <button className='Rectangle-5-Copy'><a className="History">History</a></button>
                            </Link>
                        </ul>
                    </nav>

                </div>

            </header>
        )
    }
}

export default Header;