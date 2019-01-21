import { GameNode } from './StartGameSimulation';
import calculateNodeFromPolicy from './calculateNodeFromPolicy';

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

  // find if open positions have nodes

  const availablePositionsAlreadyVisited = availablePositions.map(position => {
    if (gameNode.children.includes(position)) return position;
    return 0;
  });

  let availablePositionsByIndex = availablePositionsAlreadyVisited.slice();
  const availablePositionsByData = availablePositionsAlreadyVisited.slice();
  const availablePositionsByVisit = availablePositionsAlreadyVisited.slice();

  for (let i = 0; i < gameNode.children.length; i++) {
    let indexValue = availablePositionsAlreadyVisited.indexOf(
      gameNode.children[i]
    );
    availablePositionsByIndex[indexValue] = gameNode.childrenIndex[i];
    availablePositionsByData[indexValue] =
      gameTree[gameNode.childrenIndex[i]].winRate;
    availablePositionsByVisit[indexValue] =
      gameTree[gameNode.childrenIndex[i]].visitCount;
  }

  //--------------------------------------------------------------

  // COMPARE NODES TO POLICY

  // -------------------------------------------------------------

  const [selectedPosition, selectedIndex] = calculateNodeFromPolicy(
    availablePositions,
    availablePositionsByIndex,
    availablePositionsByData,
    availablePositionsByVisit,
    player,
    gamePolicy
  );

  // -------------------------------------------------------------

  // THIS SEEMS TO BE WORKING

  let needNewNode = true;

  if (availablePositionsAlreadyVisited.includes(selectedPosition)) {
    needNewNode = false;
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
    visitNode.boardState[selectedPosition] = player;

    visitNode.position = selectedPosition;
    visitNode.visitCount++;
    gameTree[0].gameHistory.push(selectedPosition);
    gameTree[0].boardState = visitNode.boardState;
    gameTree.push(visitNode);
    const updatedGameTree = gameTree;

    return [updatedGameTree, visitNode, gameTree.length - 1];
  } else {
    const visitNode = gameTree[selectedIndex];
    gameNode.boardState[selectedPosition] = player;
    visitNode.visitCount++;
    gameTree[0].gameHistory.push(selectedPosition);
    gameTree[0].boardState = gameNode.boardState;
    const updatedGameTree = gameTree;

    return [updatedGameTree, visitNode, selectedIndex];
  }
};

export default selectNewNode;
