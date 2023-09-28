import './PartyResult.css';

const PartyResult = (props) => {
    const party = props.party;
    const handleInputChange = (event) => {
        party.predictedResult = event.target.value;
        props.updatePredictions(party);
        console.log(party);
    }

    return (
        <li className="party-item party-item-color">
            <label>{props.label}</label>
            <input onChange={handleInputChange} type='number'></input>
        </li>
    )
}
export default PartyResult;