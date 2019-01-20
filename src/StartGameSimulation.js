// import React, { Component } from 'react';
import RunGameSimulation from './RunGameSimulation';

// Structure of a game node.
class gameNode {
  constructor(parent, children, boardState, player, level = 0) {
    this.parent = parent;
    this.children = children;
    this.player = player;
    this.level = level + 1;
    this.winRate = 0;
    this.visitCount = 0;
    this.boardState = boardState;
  }
}

const StartGameSimulation = (
  gameTreeInstance,
  runNumber,
  playerStarting,
  gamePolicy
) => {
  console.log('Starting Game Tree', gameTreeInstance);
  console.log('Starting Game Tree Run Number', runNumber);
  console.log('Starting Player', playerStarting);
  console.log('Starting Game Policy', gamePolicy);

  // Initialize the head node of a new game tree if one does not exist or was not passed into the simulation. The head node has a base state of empty squares.
  if (gameTreeInstance.length < 1) {
    const initialChildren = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const boardState = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
    const gameStart = new gameNode(null, initialChildren, boardState, null, -1);

    gameTreeInstance = [gameStart];

    console.log('INITIALIZED GAME TREE: ', gameTreeInstance);
  } else {
    gameTreeInstance = [gameTreeInstance];
    console.log('2nd RUN ', gameTreeInstance[0]);
  }

  const gameTreeLastInstance = RunGameSimulation(
    gameTreeInstance[0],
    gamePolicy,
    playerStarting
  );

  console.log('RETURNING THE POST-RUN INSTANCE: ', gameTreeLastInstance);

  return gameTreeLastInstance;
};

export default StartGameSimulation;
