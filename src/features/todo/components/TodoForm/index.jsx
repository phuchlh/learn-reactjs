import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "components/form-control/InputField";
// import InputField from "../../../../components/form-control/InputField";
// để gom gọn cái đường dẫn ở trên (thay vì ../../../../) thì dùng jsconfig.json
// dùng baseUrl: 'src' để thu gọn lại
TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const form = useForm({
    // tạo form
    defaultValues: {
      // cần phải liệt kê tất cả các field
      value: "",
    },
  });

  const handleSubmit = (values) => {
    console.log("todo submit ", values);
  };
  return (
    // form object cung cấp cho hàm handleSubmit (form.handleSubmit), truyền vào 1 hàm
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
