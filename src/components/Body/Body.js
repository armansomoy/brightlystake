import React from "react";
import Delegator from "./delegator/delegator";
import Moonbeam from "./moonbeam/moonbeam";
import Individual from "./individual/individual";
import DelegatorData from "./delegator/delegatorDark";
import { Route, Switch, Redirect } from "react-router-dom";

const Body = () => {
  return (
    <Switch>
      <Route path="/" exact component={Delegator} />
      <Route path="/moonbeam" exact component={Moonbeam} />
      <Route path="/individual" exact component={Individual} />
      <Route path="/delegatordark" exact component={DelegatorData} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Body;
