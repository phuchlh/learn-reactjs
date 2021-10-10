import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../../components/NotFound";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";
TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        {/* match.path -> thằng cha xài path nào thì thằng con xài path đấy */}
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoID`} component={DetailPage} exact />
        {/* khi nó nhập /todo-list/abcz mà nó nhập thêm /abcaksdjh -> direct về not found */}
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
