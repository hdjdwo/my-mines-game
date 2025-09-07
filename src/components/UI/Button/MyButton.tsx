import React from 'react'
import classes from './MyButton.module.css'
import { useAppSelector } from '../../../hooks/hooks'

interface IBnt {
  text: string
  hadleStatusGame: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const MyButton: React.FC<IBnt> = ({text, hadleStatusGame}) => {
const gameStatus = useAppSelector((state) => state.game.gameIsStarted)


  const btnStyle = `${classes.button} ${classes.gameStarted}`

  return (
    <div onClick={hadleStatusGame} className={gameStatus ? btnStyle : classes.button}>{text}</div>
  )
}
