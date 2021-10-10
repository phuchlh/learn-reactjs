// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import NotFound from "./components/NotFound";
import AlbumFeatures from "./features/Album/pages";
import TodoFeature from "./features/todo/pages";

function App() {
  return (
    <div className="App">
      {/* header của tất cả các trang sẽ nằm ở đây */}
      <h1>Đây là header</h1>
      {/* Nav Link */}
      <p>
        <NavLink to="/todo" activeClassName="active-menu">
          Navlink todo
        </NavLink>
      </p>
      <p>
        <NavLink to="/album" activeClassName="active">
          Navlink album
        </NavLink>
      </p>
      <Switch>
        {/* để render những thằng cần thiết, vd /albums thì render album, /todo để render todo list */}
        {/* dùng route */}
        {/* dùng exact = false khi muốn nó render đúng với cái path bắt đầu */}
        {/* dùng exact = true khi muốn nó match chính xác với đường dẫn */}
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postID" to="/posts/:postID" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos-list" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeatures} />
        <Route component={NotFound} />
      </Switch>
      {/* footer của tất cả các trang sẽ nằm ở đây */}
      <h4>Footer nè</h4>
    </div>
  );
}

export default App;
