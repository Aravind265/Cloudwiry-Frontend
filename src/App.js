import RadioButtons from "./components/RadioButtons/RadioButtons";
import { useStyles } from "./StyleApp";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <h4>Savings Instrument Fee & Benefit Distribution</h4>
      <RadioButtons />
    </div>
  );
}

export default App;
