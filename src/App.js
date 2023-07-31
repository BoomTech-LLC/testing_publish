import "./App.css";
import { Builder } from "boomform-builder";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.wrapper} style={{"--cssVariable":"300px"}}>
      <Builder
        global={{
          name: "Fill your name",
          onSubmit: (args) => {
            console.log("Testing onSubmit", args);
          },
        }}
        fields={[
          {
            id: "name",
            type: "name",
            label: "Please Type Your Name",
            middleName: true,
            validations: {
              HTMLValidate: true,
              first: { required: { msg: "First name is required" } },
              last: { required: { msg: "Last name is required" } },
            },
          },
          {
            id: "scale_rating",
            type: "scaleRating",
            min: 0,
            max: 11,
            initial: 4,
          },
        ]}
        button={{
          text: "Submit",
        }}
      />
    </div>
  );
}

export default App;
