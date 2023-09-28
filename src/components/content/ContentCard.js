import React, { useState } from "react";

import "./ContentCard.css";
import Form from "../input/Form";
import ResultsContainer from "../output/ResultsContainer";
import { unhover } from "@testing-library/user-event/dist/hover";

const ContentCard = () => {
  const parties = [
    {
      label: "Koalicja Obywatelska",
      key: "KO",
      predictedResult: 0,
      resultReps: 0,
    },
    {
      label: "Prawo i Sprawiedliwość",
      key: "PIS",
      predictedResult: 0,
      resultReps: 0,
    },
    { label: "Trzecia Droga", key: "TD", predictedResult: 0, resultReps: 0 },
    { label: "Nowa Lewica", key: "NL", predictedResult: 0, resultReps: 0 },
    { label: "Konfederacja", key: "KF", predictedResult: 0, resultReps: 0 },
    {
      label: "Bezpartyjni Samorządowcy",
      key: "BS",
      predictedResult: 0,
      resultReps: 0,
    },
  ];

  let simulateResults = {};
  const [results, setResults] = useState(parties);

  const updatePredition = (prediction) => {
    setResults(
      parties.map((party) => (party !== prediction.key ? party : prediction))
    );
  };

  return (
    <div className="content-container">
      <Form parties={parties} updatePreditions={updatePredition} />
      <ResultsContainer predictions={results} />
    </div>
  );
};
export default ContentCard;
