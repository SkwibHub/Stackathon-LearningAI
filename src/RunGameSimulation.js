// import React, { Component } from 'react';
import checkTerminalCondition from './checkTerminalCondition';
import selectNewNode from './selectNewNode';

const RunGameSimulation = (gameTree, gameNode, gamePolicy, level, player) => {
  let [updatedGameTree, visitNode, selectedIndex] = selectNewNode(
    gameTree,
    gameNode,
    gamePolicy,
    level,
    player
  );

  gameNode.boardState = checkTerminalCondition(gameNode.boardState, player);

  if (gameNode.boardState[0] !== 1000) {
    return [gameTree, gameNode.boardState];
  }

  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }

  const [gameTreeLastInstance, boardState] = RunGameSimulation(
    updatedGameTree,
    visitNode,
    gamePolicy,
    level + 1,
    player
  );

  visitNode.winRate = visitNode.winRate + gameTreeLastInstance[0].boardState[0];

  return [gameTreeLastInstance, boardState];
};

export default RunGameSimulation;
