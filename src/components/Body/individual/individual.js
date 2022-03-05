import React from "react";
import { BiRocket } from "@react-icons/all-files/bi/BiRocket";
import { BiSearchAlt } from "@react-icons/all-files/bi/BiSearchAlt";
import { BiDotsHorizontalRounded } from "@react-icons/all-files/bi/BiDotsHorizontalRounded";
import graph1 from "../../../assets/images/Graph 1.png";
import graph2 from "../../../assets/images/Graph 2.png";
import { Accordion } from "react-bootstrap";

const Individual = () => {
  return (
    <div>
      <div id="individualBanner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>
                <a href="#">0x0a0952e7d58817c40473d57a7e37f188ddb81ff9</a>
              </h4>

              <div className="luckyveBtn">
                <p>'luckyve'</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="moonbeamBoxes">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="box">
                <p>Total Supply</p>
                <h6>1,007,966,870</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>Inflation</p>
                <h6>5%</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>Collators</p>
                <h6>53</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>Total Stakedt</p>
                <h6>5,715</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>Approx APY</p>
                <h6>440931%</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>Round Length</p>
                <h6>1800 blocks</h6>
              </div>
            </div>
          </div>
          <div className="row second-line">
            <div className="col-lg-1"></div>
            <div className="col-lg-2">
              <div className="box">
                <p>Minimum Stacking</p>
                <h6>50 GLMR</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>Block time</p>
                <h6>~12 sec</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>UnStake Durationt</p>
                <h6>~ 7.00days</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>Rewards Distribution</p>
                <h6>~ 6 hrs</h6>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="box">
                <p>Rewards Eligibility</p>
                <h6>Top 300 Nominators</h6>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>

      <div id="chartPart">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={graph1} />
            </div>
            <div className="col-lg-6">
              <img src={graph2} />
            </div>
          </div>
        </div>
      </div>

      <div id="moonbeamStage">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Click on each collator address for more details</h2>
              <p>Updated every 5 minutes.</p>
              <p className="last-line">
                Updated as of block : <span>446812</span>{" "}
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
                <Accordion.Item eventKey="3">
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
                <Accordion.Item eventKey="4">
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
                <Accordion.Item eventKey="5">
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
                <Accordion.Item eventKey="6">
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
                <Accordion.Item eventKey="7">
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
                <Accordion.Item eventKey="8">
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

export default Individual;
