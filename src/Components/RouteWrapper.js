import React, {Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Form from './Form';
import Home from "./Home";

function RouteWrapper({match}) {
  console.log(match);
  return(
    <Fragment>
      <Route path={`${match.path}/`} exact render={(props) => <Home {...props} path={match.path} />} />
      <Route path={`${match.path}/login`} render={(props) => <Form {...props} path={match.path} />} />
      <Route path={`${match.path}/account-recovery`} render={(props) => <Form {...props} path={match.path} />}/>
      <Route path={`${match.path}/signup`} render={(props) => <Form {...props} path={match.path} />} />
    </Fragment>
  )
}

export default RouteWrapper;