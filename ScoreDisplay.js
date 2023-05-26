import React, { useContext } from 'react';
import { ScoreContext } from './ScoreContext';

const ScoreDisplay = () => {
  const { score, incrementScore, decrementScore } = useContext(ScoreContext);

  return (
    <div>
      <h2>Pontuação: {score}</h2>
      <button onClick={incrementScore}>Incrementar</button>
      <button onClick={decrementScore}>Decrementar</button>
    </div>
  );
};

export default ScoreDisplay;
