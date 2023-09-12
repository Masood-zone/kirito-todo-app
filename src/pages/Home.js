import Container from "../components/cards/Container";
import SideBar from "../components/sideBar/SideBar";
import Links from "../assets/data";
import AllTasks from "./tasks/AllTasks";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Groceries from "./Groceries/Groceries";
import Payments from "./Payments/Payments";
import College from "./college/College";

function Home() {
  return (
    <>
      <Container>
        <Router>
          <SideBar links={Links} />
          <Switch>
            <Route exact path="/">
              <AllTasks title="All Tasks" />
            </Route>
            <Route path="/groceries">
              <Groceries title="All Groceries" />
            </Route>
            <Route path="/college">
              <College title="All College" />
            </Route>
            <Route path="/payments">
              <Payments title="All Payments" />
            </Route>
          </Switch>
        </Router>
      </Container>
    </>
  );
}

export default Home;
