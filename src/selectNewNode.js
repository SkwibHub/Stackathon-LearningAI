import { GameNode } from './StartGameSimulation';

const selectNewNode = (gameTree, gameNode, gamePolicy, level, player) => {
  /*
      constructor(
    parent = null,
    parentIndex = null,
    children,
    childrenIndex,
    currentIndex,
    boardState,
    player,
    level = 0
  )
  */

  // find open positions

  let availablePositions = gameNode.boardState.map((position, index) => {
    if (position === '_') return index;
    return '!';
  });

  availablePositions = availablePositions.filter(position => {
    if (position === '!') return false;
    return true;
  });

  console.log('AVAILABLE POSITIONS ', availablePositions);

  // find if open positions have nodes

  const availablePositionsAlreadyVisited = availablePositions.filter(
    position => {
      if (gameNode.children.includes(position)) return true;
      return false;
    }
  );

  const availablePositionsByIndex = [];

  for (let i = 0; i < gameNode.children.length; i++) {
    if (availablePositionsAlreadyVisited.includes(gameNode.children[i])) {
      availablePositionsByIndex.push(gameNode.childrenIndex[i]);
    }
  }

  console.log('VISITED CHILDREN: ', gameNode.children);
  console.log('VISITED CHILDREN INDEX: ', gameNode.childrenIndex);
  console.log('FILTERED POSITIONS ', availablePositionsAlreadyVisited);
  console.log('FILTERED POSITIONS BY INDEX ', availablePositionsByIndex);

  //--------------------------------------------------------------

  // COMPARE NODES TO POLICY

  // -------------------------------------------------------------

  // SELECT NODE ON POLICY
  const selectedPosition = 4;
  const selectedIndex = 1;
  let nextPlayer = player;

  if (player === 'X') nextPlayer = 'O';
  if (player === 'O') nextPlayer = 'X';
  let needNewNode = false;
  if (gameTree.length < 2) needNewNode = true;

  // -------------------------------------------------------------

  // THIS SEEMS TO BE WORKING

  if (needNewNode) {
    const visitNode = new GameNode(
      null,
      gameNode.currentIndex,
      [],
      [],
      gameTree.length,
      gameNode.boardState,
      nextPlayer,
      level
    );

    gameNode.children.push(selectedPosition);
    gameNode.childrenIndex.push(gameTree.length);
    console.log('OLD TREE: ', gameTree);
    visitNode.boardState[selectedPosition] = player;

    visitNode.position = selectedPosition;
    visitNode.visitCount++;
    gameTree.push(visitNode);

    console.log('NEW NODE: ', visitNode);
    console.log('NEW TREE: ', gameTree);
    return [gameTree, gameTree.length];
  } else {
    const visitNode = gameTree[selectedIndex];
    visitNode.visitCount++;
    console.log('NEW NODE: ', visitNode);
    console.log('NEW TREE: ', gameTree);
    return [gameTree, selectedIndex];
  }
};

export default selectNewNode;
