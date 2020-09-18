import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import SelectField from "material-ui/SelectField";
import SelectMenu from './SelectMenu'
import MenuItem from "material-ui/MenuItem";
import asyncValidate from "./asyncValidate";
import validate from "./validate";
import { withStyles } from "@material-ui/core/styles";

const styles = () => {
  return {
    menuItem: {},
    contentContainer: {
      display: "flex",
      alignItems: "center",
      marginLeft: "24px",
      padding: "8px 0 "
    },
    name: {
      paddingRight: "6px",
      fontSize: "15px"
    },
    expandIcon: {
      fontSize: "15px"
    },
  };
};


const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
);

const MaterialUiForm = (props) => {
 

  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="favoriteColor"
          component={renderSelectField}
          label="Favorite Color"
        >
          <MenuItem value="ff0000" primaryText="Red" />
          <MenuItem value="00ff00" primaryText="Green" />
          <MenuItem value="0000ff" primaryText="Blue" />
        </Field>
      </div>
      <div>
        <Field
          id='chapter'
           name='chapter'
           component={SelectMenu}
           label='Chapter'
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "MaterialUiForm", // a unique identifier for this form
  validate,
  asyncValidate
})(withStyles(styles)(MaterialUiForm));
