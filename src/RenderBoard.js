import React from 'react';

const RenderBoard = props => {
  const { boardState } = props.boardState;
  const topRow = [boardState[1], boardState[2], boardState[3]];
  const middleRow = [boardState[4], boardState[5], boardState[6]];
  const bottomRow = [boardState[7], boardState[8], boardState[9]];

  return (
    <div className="boardContainer">
      <div className="boardRow">
        {topRow.map((position, index) => (
          <div
            key={`TR${index}`}
            className="boardPosition"
            style={{ display: 'inline', width: '100px' }}
          >
            <h1 style={{ display: 'inline', width: '90px' }}> {position} </h1>
          </div>
        ))}
      </div>
      <div className="boardRow">
        {middleRow.map((position, index) => (
          <div
            key={`MR${index}`}
            className="boardPosition"
            style={{ display: 'inline', width: '100px' }}
          >
            <h1 style={{ display: 'inline', width: '90px' }}> {position} </h1>
          </div>
        ))}
      </div>
      <div className="boardRow">
        {bottomRow.map((position, index) => (
          <div
            key={`BR${index}`}
            className="boardPosition"
            style={{ display: 'inline', width: '100px' }}
          >
            <h1 style={{ display: 'inline', width: '90px' }}> {position} </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderBoard;
