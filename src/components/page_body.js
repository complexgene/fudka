import React, { useState } from "react";
import Home from "./navbar_items/home";
import "../css/index.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Fish from "./navbar_items/fish";
import { Dropdown } from "semantic-ui-react";

function PageBody() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Router>
      <div className="fudka_navbar">
        <ul>
          <li>
            <Link to="/" className="link_decorate">
              Home
            </Link>
          </li>
          <li>
            <Dropdown text="Categories">
              <Dropdown.Menu>
                <Link to="/fish" className="link_decorate">
                  <Dropdown.Item text="Fish" className="link_hover" />
                </Link>
                <Link to="/fish" className="link_decorate">
                  <Dropdown.Item text="Meat" className="link_hover" />
                </Link>
                {/* <Dropdown.Item icon="folder" text="Move to folder" />
                  <Dropdown.Item icon="trash" text="Move to trash" />
                  <Dropdown.Divider />
                  <Dropdown.Item text="E-mail Collaborators" /> */}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/fish" exact>
            <Fish />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default PageBody;
