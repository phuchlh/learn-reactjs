import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func, // thằng cha sẽ truyền cái này xuống cho mình
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({todoList, onTodoClick}) { // trong trường hợp ít props thì để nó lên như này
    // nhiều props thì phải làm như này cho đỡ rối mắt
    // const {abc} = props;T    return (
        const handleTodoClick = (todo, index)=>{
            if(!onTodoClick) return; //neu ko truyen -> ko lam gi ca
            onTodoClick(todo, index); // nếu có truyền xuống thì gọi ngược lại thằng cha
        }
    return(
        <ul className='todo-list'>
            {todoList.map((todo, index) => (
                <li key={todo.id} 
                    className={classnames({'todo-item': true, // sẽ luôn luôn có class todo-item, do có - nên phải đặt trong ''
                    completed: todo.status === 'completed'})}
                    onClick = {()=> handleTodoClick(todo, index)} // khi click -> gọi hàm handle
                >
                    {todo.title}
                </li>
                // mỗi thằng con phải có 1 key - unique key
                // khi ở status có trạng thái completed ~ phải có cái class = completed để dễ style cho nó
                // => nên cài package classnames để build classname string
                // trong classNames{obj} truyền vào obj, obj chứa các key, mỗi key đó là tên class
            ))}
        </ul>
    );
}

export default TodoList;