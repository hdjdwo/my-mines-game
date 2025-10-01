import React, { MouseEventHandler } from 'react'
import classes from './Modal.module.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { setWin } from '../../../app/gameSlice'

interface iModal {
  win?: number,
  isWin?: boolean,
  winCurrency?: number,
}

export const Modal: React.FC<iModal> = ({win, isWin, winCurrency}) => {

  const gameStatus = useAppSelector((state) => state.game.gameIsStarted )

  const dispatch = useAppDispatch()
  let modalStyles = isWin ? `${classes.container} ${classes.active}` : classes.container
  const handleContainerClick = () => {
    dispatch(setWin(false))
  }

const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  

  
  return (
    <div onClick={handleContainerClick} className={modalStyles}>
      <div onClick={handleContentClick} className={classes.content}>
        <div className={classes.x}>x{win}</div>
        <div className={classes.winBlock}>{winCurrency}
          <img className={classes.currency} src={process.env.PUBLIC_URL + '/bitcoin.png'} alt="" />
        </div>
        </div>
    </div>
  )
}
