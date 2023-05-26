import React, { createContext, useState } from 'react';


export const ScoreContext = createContext();


export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  // Função para incrementar a pontuação
  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  };

  // Função para decrementar a pontuação
  const decrementScore = () => {
    setScore(prevScore => prevScore - 1);
  };

  return (
    <ScoreContext.Provider
      value={{
        score,
        incrementScore,
        decrementScore
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
