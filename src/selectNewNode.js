import { GameNode } from './StartGameSimulation';

const selectNewNode = (
  gameTree,
  gameNode,
  gamePolicy,
  level,
  player,
  pickPosition
) => {
  // find open positions

  gameNode.boardState = gameTree[0].boardState.slice();

  console.log('BOARD ON NEXT MOVE ', gameTree[0].boardState.slice());
  console.log('BOARD ON NEXT MOVE ', gameNode.boardState);

  let availablePositions = gameNode.boardState
    .slice()
    .map((position, index) => {
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

  console.log('GAMENODE CHILDREN ', gameNode.children);
  console.log('FILTERED POSITIONS ', availablePositionsAlreadyVisited);

  const availablePositionsByIndex = [];

  for (let i = 0; i < gameNode.children.length; i++) {
    if (availablePositionsAlreadyVisited.includes(gameNode.children[i])) {
      availablePositionsByIndex.push(gameNode.childrenIndex[i]);
    }
  }

  console.log('VISITED CHILDREN: ', gameNode.children);
  console.log('VISITED CHILDREN INDEX: ', gameNode.childrenIndex);
  console.log('FILTERED POSITIONS BY INDEX ', availablePositionsByIndex);

  //--------------------------------------------------------------

  // COMPARE NODES TO POLICY

  // -------------------------------------------------------------

  // SELECT NODE ON POLICY -- CURRENTLY FAKE
  const selectedPosition = availablePositions[0];

  // -------------------------------------------------------------

  // THIS SEEMS TO BE WORKING

  let needNewNode = true;
  let selectedIndex = -1;

  if (availablePositionsAlreadyVisited.includes(selectedPosition)) {
    needNewNode = false;
    selectedIndex = availablePositionsAlreadyVisited.indexOf(selectedPosition);
    selectedIndex = availablePositionsByIndex[selectedIndex];
  }

  if (gameTree.length < 2) needNewNode = true;

  // -------------------------------------------------------------

  // THIS SEEMS TO BE WORKING

  // This portion of code either creates a new child node if it doesn't exist in the tree, or it updates a child node already in the tree.

  if (needNewNode) {
    const visitNode = new GameNode(
      null,
      gameNode.currentIndex,
      [],
      [],
      gameTree.length,
      gameNode.boardState,
      player,
      level
    );

    gameNode.children.push(selectedPosition);
    gameNode.childrenIndex.push(gameTree.length);
    console.log('OLD TREE: ', gameTree);
    visitNode.boardState[selectedPosition] = player;

    visitNode.position = selectedPosition;
    visitNode.visitCount++;
    gameTree[0].gameHistory.push(selectedPosition);
    gameTree[0].boardState = visitNode.boardState;
    gameTree.push(visitNode);
    const updatedGameTree = gameTree;

    console.log('NEW NODE: ', visitNode);
    console.log('NEW TREE: ', gameTree);
    return [updatedGameTree, visitNode, gameTree.length - 1];
  } else {
    const visitNode = gameTree[selectedIndex];
    gameNode.boardState[selectedPosition] = player;
    visitNode.visitCount++;
    gameTree[0].gameHistory.push(selectedPosition);
    gameTree[0].boardState = gameNode.boardState;
    const updatedGameTree = gameTree;

    console.log('UPDATED NODE: ', visitNode.boardState.slice());
    console.log('UPDATED NODE INDEX: ', selectedIndex);
    console.log('UPDATED TREE: ', gameTree);
    return [updatedGameTree, visitNode, selectedIndex];
  }
};

export default selectNewNode;
