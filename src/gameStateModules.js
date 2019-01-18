import React, { Component } from 'react';

export const updateGameStateArray = (player, position, gameStateArray) => {
    if (gameStateArray[position]==='O') {return 'BLOCKED'}
    if (gameStateArray[position]==='X') {return 'BLOCKED'}
    
}