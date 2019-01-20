// import React, { Component } from 'react';

const checkTerminalCondition = (gameTree, player) => {
  console.log('CHECKING WIN CONDITION FOR BOARDSTATE: ', gameTree);

  const A = gameTree.boardState[1];
  const B = gameTree.boardState[2];
  const C = gameTree.boardState[3];
  const D = gameTree.boardState[4];
  const E = gameTree.boardState[5];
  const F = gameTree.boardState[6];
  const G = gameTree.boardState[7];
  const H = gameTree.boardState[8];
  const I = gameTree.boardState[9];
  let statusCode = 0;

  console.log('XXXXXXX PLAYER, ', player);
  console.log('XXXXXXX A, ', A);
  console.log('XXXXXXX B, ', B);
  console.log('XXXXXXX C, ', C);
  console.log(A === B && B === C && A === 'X');

  if (player === 'X') statusCode = 1;
  if (player === 'O') statusCode = -1;

  if (A === B && B === C && A === player) return statusCode;
  if (D === E && E === F && D === player) return statusCode;
  if (G === H && H === I && G === player) return statusCode;
  if (A === D && D === G && A === player) return statusCode;
  if (B === E && E === H && B === player) return statusCode;
  if (C === F && F === I && C === player) return statusCode;
  if (A === E && E === I && A === player) return statusCode;
  if (C === E && E === G && C === player) return statusCode;

  let isDraw = gameTree.boardState.filter(BS => {
    if (BS === 'X') return false;
    if (BS === 'O') return false;
    if (BS === '_') return true;
    return false;
  });

  console.log('ISDRAW: ', isDraw);

  if (isDraw.length < 1) return 0;

  return 1000;

  /******* 
  // 5. RETURN: Accept playout array of tree, return evaluation of this playout.
  *******/
};

export default checkTerminalCondition;
