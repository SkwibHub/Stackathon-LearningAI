// import React, { Component } from 'react';

const checkTerminalCondition = (boardState, player) => {
  console.log('CHECKING WIN CONDITION FOR BOARDSTATE: ', boardState);

  const A = boardState[1];
  const B = boardState[2];
  const C = boardState[3];
  const D = boardState[4];
  const E = boardState[5];
  const F = boardState[6];
  const G = boardState[7];
  const H = boardState[8];
  const I = boardState[9];
  let statusCode = 0;

  console.log('XXXXXXX PLAYER, ', player);
  console.log('XXXXXXX A, ', A);
  console.log('XXXXXXX B, ', B);
  console.log('XXXXXXX C, ', C);
  console.log(A === B && B === C && A === 'X');

  if (player === 'X') statusCode = 1;
  if (player === 'O') statusCode = -1;

  if (A === B && B === C && A === player) boardState[0] = statusCode;
  if (D === E && E === F && D === player) boardState[0] = statusCode;
  if (G === H && H === I && G === player) boardState[0] = statusCode;
  if (A === D && D === G && A === player) boardState[0] = statusCode;
  if (B === E && E === H && B === player) boardState[0] = statusCode;
  if (C === F && F === I && C === player) boardState[0] = statusCode;
  if (A === E && E === I && A === player) boardState[0] = statusCode;
  if (C === E && E === G && C === player) boardState[0] = statusCode;

  let isDraw = boardState.filter(BS => {
    if (BS === 'X') return false;
    if (BS === 'O') return false;
    if (BS === '_') return true;
    return false;
  });

  console.log('ISDRAW: ', isDraw);

  if (isDraw.length < 1) boardState[0] = 0;

  return boardState;

  /******* 
  RETURN: Accept playout array of tree, return evaluation of this playout. It will return:
  1 for X win, 
  -1 for O win, 
  0 for draw, and 
  1000 for unfinished game
  in boardState[0].
  *******/
};

export default checkTerminalCondition;
