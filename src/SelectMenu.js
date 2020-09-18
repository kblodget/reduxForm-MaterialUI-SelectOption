import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => {
  return {
    subMenuItem: {
      display: "flex",
      justifyContent: "center"
    },
    menuItem: {}
  };
};

const chapterFormValues = [
  {
    key: "international-0",
    caption: "None"
  },
  {
    key: "international-4",
    caption: "France"
  },
  {
    key: "international-5",
    caption: "Africa"
  },
  {
    key: "international-6",
    caption: "United Kingdom"
  },
  {
    key: "usa-key",
    caption: "North America",
    subMenuItems: [
      {
        key: "usaChapter-1",
        caption: "Central"
      },
      {
        key: "usaChapter-2",
        caption: "East"
      }
    ]
  }
];

const SelectMenu = (props) => {
  const { label, classes } = props;
  const renderMenuItems = () => {
    return (
      chapterFormValues !== undefined &&
      chapterFormValues.map((option) => {
        if (option.hasOwnProperty("subMenuItems")) {
          return (
            <React.Fragment>
              <optgroup label={option.caption} className={classes.menuItem}>
                {option.subMenuItems.map((item) => (
                  <option key={item.key} className={classes.subMenuItem}>
                    {item.caption}
                  </option>
                ))}
              </optgroup>
            </React.Fragment>
          );
        }
        return (
          <option
            className={classes.menuItem}
            key={option.key}
            value={option.caption === "None" ? "" : option.caption}
          >
            {option.caption === "None" ? "" : option.caption}
          </option>
        );
      })
    );
  };

  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        native
        input={<Input id={`${props.id}-select`} />}
        value={props.value}
        {...props.input}
        {...props.custom}
      >
        {renderMenuItems()}
      </Select>
    </FormControl>
  );
};
export default withStyles(styles)(SelectMenu);
