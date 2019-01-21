// import React, { Component } from 'react';
import RunGameSimulation from './RunGameSimulation';

// Structure of a game node.
export class GameNode {
  constructor(
    parent,
    parentIndex,
    children,
    childrenIndex,
    currentIndex,
    boardState,
    player,
    level
  ) {
    this.parent = parent;
    this.children = children;
    this.parentIndex = parentIndex;
    this.childrenIndex = childrenIndex;
    this.player = player;
    this.level = level + 1;
    this.position = 0;
    this.currentIndex = currentIndex;
    this.winRate = 0;
    this.visitCount = 0;
    this.gameHistory = [];
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
  console.log('Starting Game Policy', gamePolicy);

  // Initialize the head node of a new game tree if one does not exist or was not passed into the simulation. The head node has a base state of empty squares.

  if (!gameTreeInstance[0]) {
    const initialChildren = [];
    const initialChildrenIndex = [];
    const boardState = [1000, '_', '_', '_', '_', '_', '_', '_', '_', '_'];
    const gameStart = new GameNode(
      null,
      0,
      initialChildren,
      initialChildrenIndex,
      0,
      boardState,
      null,
      -1
    );

    gameTreeInstance = [gameStart];
  } else {
    gameTreeInstance[0].boardState = [
      1000,
      '_',
      '_',
      '_',
      '_',
      '_',
      '_',
      '_',
      '_',
      '_'
    ];
  }

  gameTreeInstance[0].visitCount++;

  const [gameTreeLastInstance, boardState] = RunGameSimulation(
    gameTreeInstance,
    gameTreeInstance[0],
    gamePolicy,
    0,
    playerStarting
  );

  console.log('Endinging Game Tree', gameTreeLastInstance);

  return [gameTreeLastInstance, boardState];
};

export default StartGameSimulation;
