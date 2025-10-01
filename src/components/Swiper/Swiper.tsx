import React, { useState } from 'react'
import classes from './Swiper.module.css'
import { useAppSelector } from '../../hooks/hooks'

interface ISwiper {
  gameMode?: string,
  handlerGameMode?: (event: React.MouseEvent<HTMLDivElement>) => void,
}

export const Swiper: React.FC<ISwiper> = ({gameMode, handlerGameMode}) => {
const gameStatus = useAppSelector((state) => state.game.gameIsStarted)


  const ignor = (event?: React.MouseEvent<HTMLDivElement>) => {

  }

  console.log(gameStatus)



const manualStyle = (gameMode === 'Manual') ? `${classes.manual} ${classes.active}` : `${classes.manual}`
const autoStyle = (gameMode === 'Auto') ? `${classes.auto} ${classes.active}` : `${classes.auto}`


  return (
    <div className={classes.SwiperContainer}>
      <div onClick={gameStatus ? ignor : handlerGameMode} className={manualStyle}>Manual</div>
      <div onClick={gameStatus ? ignor : handlerGameMode}  className={autoStyle}>Auto</div>
    </div>
  )
}
