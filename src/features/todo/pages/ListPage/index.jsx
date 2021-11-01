import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import TodoList from "../../components/TodoList";
import queryString from "query-string";
import TodoForm from "../../components/TodoForm";
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    //do ông này truyền xuống con là props, không thể thay đổi được status, nên phải biến nó thành states
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Code",
      status: "completed",
    },
    {
      id: 3,
      title: "Sleep",
      status: "new",
    },
  ];

  //   function handleTodoFormSubmit(formValues) {
  //     console.log("Form submit: ", formValues);
  //     // add new todo -> todoList
  //     const newTodo = {
  //       id: todoList.length + 1, //nếu có api trả về thì ở đây lấy id ở trên api luôn, không cần làm như này
  //       ...formValues,
  //     };
  //     const newTodoList = [...todoList];
  //     newTodoList.push(newTodo);
  //     setTodoList(newTodoList);
  //   }

  // useLocation de lay dc sau dau ? cua url
  // tuong tu voi window.location.search
  const location = useLocation();
  // update URL param --> dùng history để điều hướng
  const history = useHistory();
  // cần đường dẫn/path
  const match = useRouteMatch();
  // biến todoList ở trên thành states
  // tạo mỗi state là mỗi dòng khai báo như này
  const [todoList, setTodoList] = useState(initTodoList);
  // để dùng url param lọc ra những thằng status = ? -> không truyền all đc
  // dùng hàm
  const [filterStatus, setFilterStatus] = useState(() => {
    // dùng query string để parse sang obj param
    const param = queryString.parse(location.search);
    console.log(param);

    return param.status || "all";
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || "all");
  }, [location.search]);

  const handleTodoClick = (todo, index) => {
    // các bước để thực hiện chuyển đổi status
    // 1. clone current array
    const newTodoList = [...todoList];
    // 2. toggle states -> khi click thì phải đổi
    /*const newTodo*/ newTodoList[index] = {
      ...newTodoList[index], // lấy ra cái object ở vị trí [index]
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    // newTodoList[index] = newTodo; //cập nhật lại phần tử ở [index]
    // 3. update todoList
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    // setFilterStatus("all");

    //những cái này là để thay đổi URL
    const queryparams = { status: "all" };
    history.push({
      pathname: match.path, // sửa lại url
      search: queryString.stringify(queryparams), // lấy ra tất cả
    });
  };
  const handleShowCompletedClick = () => {
    // setFilterStatus("completed");
    const queryparams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryparams), // lấy ra completed
    });
  };
  const handleShowNewClick = () => {
    // setFilterStatus("new");
    const queryparams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryparams), // lấy ra completed
    });
  };
  // không show cái todoList, mà show cái list đã được lọc
  // const rederedTodoList = todoList.filter(
  //   (todo) => filterStatus === "all" || filterStatus === todo.status
  // );

  // có thể dùng useMemo để render lại khi filterStatus hoặc todoList thay đổi
  // chứ không cần mỗi lần mỗi render
  const rederedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filterStatus === "all" || filterStatus === todo.status
    );
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log("form submit: ", values);
  };
  return (
    <div>
      <h3>Todo form</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo list</h3>
      <TodoList todoList={rederedTodoList} onTodoClick={handleTodoClick} />
      {/* nghĩa là vứt cho TodoList render cái list đó đi, khi nào mà có click thì gọi giùm cái handle */}
      <div>
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowCompletedClick}>Show completed</button>
        <button onClick={handleShowNewClick}>Show new</button>
      </div>
      {/* <div>
        <TodoForm onSubmit={handleTodoFormSubmit} />
      </div> */}
    </div>
  );
}

export default ListPage;
