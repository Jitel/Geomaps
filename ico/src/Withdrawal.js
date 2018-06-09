/**
 * Created by jitel on 22.4.18.
 */
import React, {Component} from "react";
import "./Home.css";
class Withdrawal extends Component {

    render() {
        return (
            <div className="Rectangle-Copy-2">
                <div className="Rectangle-4">
                    <h2 className='Wallet'>Wallet</h2>
                    <div>
                        <input className="Rectangle-2-Copy-10 " list='languages'
                               placeholder='0xa5b28931b3ee0cb7766dc95fa89c027a69d924e9'/>
                        <datalist className="xa5b28931b3ee0cb776" id='languages'>
                            <optionc value='0xa5b28931b3ee0cb7766dc95fa89c027a69d924e9'/>
                        </datalist>
                    </div>
                    <div className='Rectangle-Copy'>
                        <div>
                            <b className="layer">0</b>
                            <b className="-copy">0</b>
                        </div>
                        <div>
                            <b className="ETHER-ON-CHAIN"><b className="fb">ETHER</b> ON-CHAIN</b>
                            <b className="ETHER-OFF-CHAIN"><b className="fb">ETHER</b> OFF-CHAIN</b>
                        </div>
                        <input className="Rectangle-3-Copy" id="amount" placeholder="AMOUNT"/>
                        <button color='yellow' id="button" className='DEPOSIT '>WITHDRAW</button>
                    </div>
                </div>

            </div>


        );
    }

}
export default Withdrawal