import React from 'react'
import { Mine } from '../Mine/Mine'
import classes from './MinesField.module.css'
import {  useAppSelector } from '../../hooks/hooks'
import { Modal } from '../UI/Modal/Modal'

export const MinesField = () => {

  const board = useAppSelector((state) => state.game.board);
   const isLose = useAppSelector((state) => state.game.gameIsLose)
   const isWin = useAppSelector((state) => state.game.gameisWin)
   const wincurrency = useAppSelector((state) => state.game.winCurrency)
   const stake = useAppSelector((state) => state.game.stake)
   const seceltedTiles = useAppSelector((state) => state.game.selectedTiles)
 
   const currentWin = wincurrency * stake

  return (
    <div className={classes.fieldWrapper}>
    <div  className={classes.field}>
      { <Modal win={wincurrency} isWin={isWin} winCurrency={currentWin}/> }
      { board.map((tile, index) => (
        <Mine 
        key={index}
        index={index}
        isRevealed={isLose ? tile.hasMine || tile.isRevealed : tile.isRevealed}
        hasMine={tile.hasMine}
        isSelected = {seceltedTiles.includes(index)}
        />
      ))}
    </div>
    </div>
  )
}