import React from "react";
import Delegator from "./delegator/delegator";
import Moonbeam from "./moonbeam/moonbeam";
import { Route, Switch, Redirect } from "react-router-dom";

const Body = () => {
  return (
    <Switch>
      <Route path="/" exact component={Delegator} />
      <Route path="/moonbeam" exact component={Moonbeam} />
      <Redirect to='/' />
    </Switch>
  );
};

export default Body;
