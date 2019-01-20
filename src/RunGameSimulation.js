// import React, { Component } from 'react';
import checkTerminalCondition from './checkTerminalCondition';
import selectNewNode from './selectNewNode';

const RunGameSimulation = (gameTree, gameNode, gamePolicy, level, player) => {
  console.log('NOW RUNNING: ', gameTree);
  console.log('GAME NODE: ', gameNode);
  console.log('USING POLICY: ', gamePolicy);
  console.log('WITH PLAYER: ', player);
  console.log('WITH BOARDSTATE: ', gameTree.boardState);

  /******* 
  // MONITOR. CONDITIONS FUNCTION: Tree needs to verify if a terminal   condition has been met.
  *******/

  gameNode.boardState = checkTerminalCondition(gameNode.boardState, player);

  console.log('AFTER TERMINAL BOARDSTATE: ', gameNode.boardState);

  if (gameNode.boardState[0] !== 1000) {
    console.log('AFTER BACKPOROPAGATE NODE BOARDSTATE: ', gameNode.boardState);
    console.log('AFTER BACKPOROPAGATE NODE: ', gameNode);
    console.log('AFTER BACKPOROPAGATE TREE: ', gameTree);
    return gameTree;
  }

  //-----------------------------------------------------------------

  selectNewNode(gameTree, gameNode, gamePolicy, level, player);

  return gameTree;
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
