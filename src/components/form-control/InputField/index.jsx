import { TextField } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  // 2 thứ quan trọng của 1 cái input field - từ thừng TodoForm truyền xuống
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      render={TextField}
      fullWidth // nó được truyền thẳng vào textfield luôn
      label={label}
      disabled={disabled}
      // muốn custom onChange, onBlur thì dùng render
    />
  );
}

export default InputField;
