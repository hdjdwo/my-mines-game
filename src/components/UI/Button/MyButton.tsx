import React from 'react'
import classes from './MyButton.module.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { resetMines, setGameStatus } from '../../../app/gameSlice'

export const MyButton = () => {
  const dispatch = useAppDispatch()
  const gameStatus = useAppSelector((state) => state.game.gameIsStarted)

  const handleStatusGame = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setGameStatus(true))
    
  }

  const btnStyle = `${classes.button} ${classes.gameStarted}`

  return (
    <div onClick={handleStatusGame} className={gameStatus ? btnStyle : classes.button}>Ставка</div>
  )
}
