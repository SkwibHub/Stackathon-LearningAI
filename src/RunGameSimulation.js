// import React, { Component } from 'react';
import checkTerminalCondition from './checkTerminalCondition';

const RunGameSimulation = (gameTree, gamePolicy, player) => {
  console.log('NOW RUNNING: ', gameTree);
  console.log('USING POLICY: ', gamePolicy);
  console.log('WITH PLAYER: ', player);
  console.log('WITH BOARDSTATE: ', gameTree.boardState);

  /******* 
  // MONITOR. CONDITIONS FUNCTION: Tree needs to verify if a terminal   condition has been met.
  *******/
  const winCondition = checkTerminalCondition(gameTree.boardState, player);
  if (winCondition !== 1000) {
    return [winCondition, gameTree];
  }

  return [winCondition, gameTree];
};

/******* 
// 1. SELECTION FUNCTION: Node needs to decide which child to select.
*******/

/******* 
// 2. EXPLORATION FUNCTION: Node needs to decide move to child in tree.
*******/

/******* 
// 3. SIMULATION FUNCTION: Node needs to simulate until terminal state reached.
*******/

/******* 
// 4. BACKPROPAGATE FUNCTION: Node needs to backpropagate values from child to parent.
*******/

export default RunGameSimulation;
