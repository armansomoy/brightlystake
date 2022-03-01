import React from 'react';
import { BiRocket } from "@react-icons/all-files/bi/BiRocket";
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";

const Body = () => {
    return (
        <div>
            <div id="banner-part">
                <div className="container">
                    <div className="delegatorAddress">
                        <div className="col-lg-12 text-center">
                            <h3>Enter Delegator address</h3>
                            <form>
                                <span>
                                <input type="text" placeholder="Delegator address" />
                                <BiSearchAlt/>
                                </span>
                               
                                
                                <button type="submit">Submit <BiRocket />  </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Body;