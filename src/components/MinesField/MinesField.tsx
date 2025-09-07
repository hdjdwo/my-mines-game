import React from 'react'
import { Mine } from '../Mine/Mine'
import classes from './MinesField.module.css'
import { useAppSelector } from '../../hooks/hooks'

export const MinesField = () => {

  const board = useAppSelector((state) => state.game.board);
   const isLose = useAppSelector((state) => state.game.gameIsLose)
   const isWin = useAppSelector((state) => state.game.gameisWin)
   const wincurrency = useAppSelector((state) => state.game.winCurrency)

   console.log(wincurrency)

  return (
    <div className={classes.fieldWrapper}>
    <div  className={classes.field}>
      <p className={`${classes.text} ${isLose ? classes.boom : ''}`}>Бум!</p>
      <p className={`${classes.text} ${isWin ? classes.win : ''}`}>Поздравляем, вы выиграли: {wincurrency}</p>
      { board.map((tile, index) => (
        <Mine 
        key={index}
        index={index}
        isRevealed={isLose ? tile.hasMine || tile.isRevealed : tile.isRevealed}
        hasMine={tile.hasMine}
        />
      ))}
    </div>
    </div>
  )
}