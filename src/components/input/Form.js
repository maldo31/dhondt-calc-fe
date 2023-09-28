import "./Form.css";
import PartyResult from "./PartyResult";
const Form = (props) => {
  const setPrediction = (pred) => {
    props.updatePredictions(pred);
  }
  
  return (
    <div>
      <p className="form-title">Podaj przewidywany wynik procentowy:</p>
      <ul className="party-results">
        {props.parties.map((party) => (
          <PartyResult party={party} updatePredictions={setPrediction} label={party.label} id={party.key} key={party.key} />
        ))}
      </ul>
    </div>
  );
};
export default Form;
