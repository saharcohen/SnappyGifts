import React from "react";
import BuildField from "../BuildField/BuildField";
import classes from "./BuildForm.css";


const fields = [
  { label: "First Name", name: "firstName" },
  { label: "Last Name", name: "lastName" },
  { label: "Address", name: "address" },
  { label: "Zip Code", name: "zipCode" },
  { label: "City", name: "city" },
  { label: "State", name: "state" },
  { label: "Email", name: "email" },
  { label: "Phone Number", name: "phoneNumber"},
];
const buildForm = props => {
  return (
    <div className={classes.Row}>
      <div className={classes.Col50}>
        {fields.map(field => {
          return (
            <BuildField
              key={field.label}
              label={field.label}
              name={field.name}
              valueShown={props.values[field.name]}
              changed={props.changed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default buildForm;
