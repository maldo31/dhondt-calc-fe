import './ResultsContainer.css';

const ResultsContainer = (props) => {
    
  const calcDeputies = () => {
    return [0, 0, 0, 0, 0];
  };

  return (
    <div>
      <button onClick={calcDeputies}>Oblicz Liczbe Posłow</button>
    </div>
  );
};

export default ResultsContainer;
