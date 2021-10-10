import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");

  // sử dụng debounce để hạn chế việc gõ bao nhiêu kí tự là call API bấy nhiêu lần
  // cần sử dụng biến mà nó phải giữ nguyên sau mỗi lần render - useRef
  const typingTimeoutRef = useRef(null);
  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      // khi đang gõ -> clear timeout cũ để setTimeout mới
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value, // do set searchTerm ở trên nên nó còn giá trị cũ
        // thêm value = e.target.value để fix
      };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <form action="">
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFilterForm;
