// import React, { Component } from 'react';

const checkTerminalCondition = (boardState, player) => {
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

  if (player === 'X') statusCode = 1;
  if (player === 'O') statusCode = -1;

  if (A === B && B === C && A === player) return (boardState[0] = statusCode);
  if (D === E && E === F && D === player) return (boardState[0] = statusCode);
  if (G === H && H === I && G === player) return (boardState[0] = statusCode);
  if (A === D && D === G && A === player) return (boardState[0] = statusCode);
  if (B === E && E === H && B === player) return (boardState[0] = statusCode);
  if (C === F && F === I && C === player) return (boardState[0] = statusCode);
  if (A === E && E === I && A === player) return (boardState[0] = statusCode);
  if (C === E && E === G && C === player) return (boardState[0] = statusCode);

  let isDraw = boardState.filter(BS => {
    if (BS === 'X') return false;
    if (BS === 'O') return false;
    if (BS === '_') return true;
    return false;
  });

  if (isDraw.length < 1) return (boardState[0] = 0);

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
