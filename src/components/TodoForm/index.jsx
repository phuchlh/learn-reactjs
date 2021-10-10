import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react/cjs/react.development';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}
function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');

    function handleValueChange(e){
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleFormSubmit(e){
        e.preventDefault(); // prevent reloading browser
        if(!onSubmit) return; // không có hàm thì không cần gọi -> return
        // nếu có
        const formValues = { // báo cho thằng cha để cbi giá trị hiện tại
            title: value,
        }; 
        onSubmit(formValues);
        // khi submid thì phải reset form
        setValue('');
    }
    return (
        <form onSubmit={handleFormSubmit}>
            {/* do gán cứng value = '' nên nó sẽ không bấm được
                muốn bấm được thì phải xài onchange 
            */}
            <input type="text" value={value} onChange={handleValueChange}/>
        </form>
    );
}

export default TodoForm;