import React, { useState } from 'react'
import classes from './Mine.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { revealTile, setGameStatus, setLose, setWin } from '../../app/gameSlice';

interface IMine {
  index: number,
  isRevealed: boolean,
  hasMine: boolean, 
}



export const Mine: React.FC<IMine> = ({index, isRevealed, hasMine}) => {

 const dispatch = useAppDispatch()
 const gameStatus = useAppSelector((state) => state.game.gameIsStarted)



 const clickHandler = () => {
  if(gameStatus && !isRevealed) {
    dispatch(revealTile(index));
    
  if(hasMine) {
  dispatch(setGameStatus(false))
  dispatch(setLose(true))
  }
  }
    
 }


  const tileClasses = `${classes.mine} ${isRevealed ? (hasMine ? classes.mineBomb : classes.diamond ) : ''}`
 

  return (
    <div onClick={clickHandler}  className={tileClasses}>
      
    </div>
  
  )
}
