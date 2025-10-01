import React, { useState } from 'react'
import classes from './Mine.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { revealTile, setGameStatus, setLose, setSelectedTiles, setWin } from '../../app/gameSlice';

interface IMine {
  index: number,
  isRevealed: boolean,
  hasMine: boolean, 
  isSelected?: boolean
}



export const Mine: React.FC<IMine> = ({index, isRevealed, hasMine, isSelected = false}) => {

 const dispatch = useAppDispatch()
 const gameStatus = useAppSelector((state) => state.game.gameIsStarted)
const gameMode = useAppSelector((state) => state.game.gameMode)


 const clickHandler = () => {
  if(gameMode === 'Manual') {
    if(gameStatus && !isRevealed) {
    dispatch(revealTile(index));
    
  if(hasMine) {
  dispatch(setGameStatus(false))
  dispatch(setLose(true))
  }
  }}
  if(gameMode === 'Auto') {
    dispatch(setSelectedTiles(index))
  }
       
 }


 const mineStyle = isSelected ? `${classes.mine} ${classes.selected}` : `${classes.mine}`

  return (
     <div onClick={clickHandler} className={mineStyle}>
      {isRevealed && (
        <img
          src={hasMine ? process.env.PUBLIC_URL + '/mines.png' : process.env.PUBLIC_URL + '/diamond.png'}
          className={`${classes.mineImage} ${hasMine? classes.mineBomb : classes.diamond }`}
          alt={hasMine ? 'Mine' : 'Diamond'}
        />
      )}
    </div>
  
  )
}
