import React from "react";
import { BiRocket } from "@react-icons/all-files/bi/BiRocket";
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";
import { Accordion } from "react-bootstrap";

const DelegatorDark = () => {
  return (
    <div>
      <div id="banner-part">
        <div className="container">
          <div className="row">
            <div className="delegatorAddress">
              <div className="col-lg-12 text-center">
                <h3>Enter Delegator Dark address</h3>
                <form>
                  <span>
                    <input type="text" placeholder="Delegator address" />
                    <BiSearchAlt />
                  </span>

                  <button type="submit">
                    Submit <BiRocket />{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="moonbeam">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>MOONBEAM</h2>
              <p>
                Updated every 5 minutes. Last Updated 2022-02-17{" "}
                <span> 18:17:35.498046</span> UTC{" "}
              </p>
            </div>

            <div className="col-lg-12">
              <div className="table-head">
                <ul>
                  <li className="one">Collator</li>
                  <li className="two">Collator Address</li>
                  <li className="three">GLMR</li>
                  <li className="four">Rank</li>
                  <li className="five">Effective On</li>
                  <li className="six">Status</li>
                </ul>
              </div>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <ul>
                      <li className="one">Brightlystake</li>
                      <li className="two">
                        0x7fa2033272db2e4116ce314fd789a3a148f2ed55
                      </li>
                      <li className="three">80000.0</li>
                      <li className="four">2</li>
                      <li className="five">182.27</li>
                      <li className="six">
                        <button className="active-btn">Active</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>APY (4 rounds)</p>
                        <h4>83.16%</h4>
                      </li>
                      <li className="two">
                        <p>Revoke Amount</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="four">
                        <button className="action-btn">
                          Action
                          <BiDotsHorizontalRounded />
                        </button>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <ul>
                      <li className="one">Brightlystake</li>
                      <li className="two">
                        0x7fa2033272db2e4116ce314fd789a3a148f2ed55
                      </li>
                      <li className="three">80000.0</li>
                      <li className="four">2</li>
                      <li className="five">182.27</li>
                      <li className="six">
                        <button className="active-btn">Active</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>APY (4 rounds)</p>
                        <h4>83.16%</h4>
                      </li>
                      <li className="two">
                        <p>Revoke Amount</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="four">
                        <button className="action-btn">
                          Action
                          <BiDotsHorizontalRounded />
                        </button>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <ul>
                      <li className="one">Brightlystake</li>
                      <li className="two">
                        0x7fa2033272db2e4116ce314fd789a3a148f2ed55
                      </li>
                      <li className="three">80000.0</li>
                      <li className="four">2</li>
                      <li className="five">182.27</li>
                      <li className="six">
                        <button className="inactive-btn">InActive</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>APY (4 rounds)</p>
                        <h4>83.16%</h4>
                      </li>
                      <li className="two">
                        <p>Revoke Amount</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="four">
                        <button className="action-btn">
                          Action
                          <BiDotsHorizontalRounded />
                        </button>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div id="moonriver">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="moonriver-header">MOONRIVER</h2>
            </div>

            <div className="col-lg-12">
              <div className="table-head">
                <ul>
                  <li className="one">Collator</li>
                  <li className="two">Collator Address</li>
                  <li className="three">GLMR</li>
                  <li className="four">Rank</li>
                  <li className="five">Effective On</li>
                  <li className="six">Status</li>
                </ul>
              </div>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <ul>
                      <li className="one">Brightlystake</li>
                      <li className="two">
                        0x7fa2033272db2e4116ce314fd789a3a148f2ed55
                      </li>
                      <li className="three">80000.0</li>
                      <li className="four">2</li>
                      <li className="five">182.27</li>
                      <li className="six">
                        <button className="active-btn">Active</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>APY (4 rounds)</p>
                        <h4>83.16%</h4>
                      </li>
                      <li className="two">
                        <p>Revoke Amount</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="four">
                        <button className="action-btn">
                          Action
                          <BiDotsHorizontalRounded />
                        </button>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <ul>
                      <li className="one">Brightlystake</li>
                      <li className="two">
                        0x7fa2033272db2e4116ce314fd789a3a148f2ed55
                      </li>
                      <li className="three">80000.0</li>
                      <li className="four">2</li>
                      <li className="five">182.27</li>
                      <li className="six">
                        <button className="active-btn">Active</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>APY (4 rounds)</p>
                        <h4>83.16%</h4>
                      </li>
                      <li className="two">
                        <p>Revoke Amount</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="four">
                        <button className="action-btn">
                          Action
                          <BiDotsHorizontalRounded />
                        </button>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <ul>
                      <li className="one">Brightlystake</li>
                      <li className="two">
                        0x7fa2033272db2e4116ce314fd789a3a148f2ed55
                      </li>
                      <li className="three">80000.0</li>
                      <li className="four">2</li>
                      <li className="five">182.27</li>
                      <li className="six">
                        <button className="inactive-btn">InActive</button>
                      </li>
                    </ul>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li className="one">
                        <p>APY (4 rounds)</p>
                        <h4>83.16%</h4>
                      </li>
                      <li className="two">
                        <p>Revoke Amount</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="three">
                        <p>Effective on</p>
                        <h4>$1,125.12</h4>
                      </li>
                      <li className="four">
                        <button className="action-btn">
                          Action
                          <BiDotsHorizontalRounded />
                        </button>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelegatorDark;
