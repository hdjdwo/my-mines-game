import React, { useEffect, useState } from 'react'
import { MyInput } from '../UI/Input/MyInput';
import { MySelect } from '../UI/Select/MySelect';
import { MyButton } from '../UI/Button/MyButton';
import classes from './BetPanel.module.css'
import { getMinesArray, getMultipliers, useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeBalance, changeGameMode, revealTile, setGameStatus, setMines, setNumberOfBets, setStake, setWin, setWinCurrency } from '../../app/gameSlice';
import { WinField } from '../WinField/WinField';
import { Swiper } from '../Swiper/Swiper';
import { store } from '../../app/store';

export const BetPanel = () => {

  const dispatch = useAppDispatch()
  const mines = useAppSelector((state) => state.game.mines)
  const gameStatus = useAppSelector((state) => state.game.gameIsStarted)
  const stake = useAppSelector((state) => state.game.stake)
  const board = useAppSelector((state) => state.game.board)
  const gameMode = useAppSelector((state) => state.game.gameMode) 
  const numberOfBets = useAppSelector((state) => state.game.numOfBets)
  const selectedTiles = useAppSelector((state) => state.game.selectedTiles)
  const minesArray = useAppSelector((state) => state.game.minesArray)

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
       const value = event.target.value;
     
    const numericValue = value === '' ? 0 : parseFloat(value);
    
    if (!isNaN(numericValue)) {
      dispatch(setStake(numericValue));
    }
  };

  const handleChangeNumberOfBets= (event: React.ChangeEvent<HTMLInputElement>) => { 
    const value = event.target.value
    const numericValue = value === '' ? 0 : parseFloat(value);

    if (!isNaN(numericValue)) {
      dispatch(setNumberOfBets(numericValue))
    }
  
  }

  useEffect(() => {
    dispatch(setWin(false))
  }, [gameMode])
  

  const handleStatusGame = (event?: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setMines(getMinesArray(mines)))
    if(gameMode === 'Manual') {
      if(gameStatus) {
      dispatch(setWin(true))
      dispatch(setWinCurrency(current))
      dispatch(setGameStatus(false))
    } else {
  dispatch(setGameStatus(true))
  dispatch(setWin(false))
    }
dispatch(setMines(getMinesArray(mines)))
  }
    if(gameMode === 'Auto') {
      if(gameStatus) {
        dispatch(setGameStatus(false))
        
      }
      else {
        dispatch(setGameStatus(true))
         const newMinesArray = getMinesArray(mines)
  dispatch(setMines(newMinesArray))
        selectedTiles.forEach(item => dispatch(revealTile(item)))
        const combine = [...newMinesArray, ...selectedTiles]
  const result = new Set(combine)
        if(result.size !== combine.length) {
          dispatch(setWin(false))
        }
        else {
          dispatch(setWin(true))
          dispatch(setWinCurrency(current))
        }
        setTimeout(() => {
          dispatch(setGameStatus(false))
          dispatch(setMines(getMinesArray(mines)))
        }, 1000)
      }
      if(numberOfBets !== 0) {
        setTimeout(() => {
  const state = store.getState().game
  const freshBets = state.numOfBets
  console.log("fresh bets:", freshBets)
  if (freshBets > 0) {
    dispatch(setNumberOfBets())
    dispatch(setWin(false))
    handleStatusGame()
  }
}, 1000)
      }
      
      
    }
  }

  const {current, next} = getMultipliers(board, mines, gameMode, selectedTiles.length)
const currentWin = current * stake
 const nextWin = next * stake
 


  const handlerGameMode = () => {
    if(gameMode === 'Manual') {
      dispatch(changeGameMode('Auto'))
    } else {
      dispatch(changeGameMode('Manual'))
    }

  }

const manualPanel = (gameMode === 'Manual') ? `${classes.swiperContainer}` : `${classes.swiperContainer} ${classes.disable}`
const autoPanel = (gameMode === 'Auto') ? `${classes.swiperContainer}` : `${classes.swiperContainer} ${classes.disable}`


  return (
    <div className={classes.BetContainer}>
    <div className={classes.swiper}><Swiper gameMode={gameMode} handlerGameMode={handlerGameMode}/></div>
    <div className={manualPanel}>
    <div className={classes.inputBlock}><MyInput value={stake} handleInputChange={handleChangeValue} title='Bet amount:' min={0.00000001} max={1} step={0.00000001}/></div>
    <div className={classes.mineBlock}><MySelect /></div>
    <div  className={classes.betBtn}><MyButton hadleStatusGame={handleStatusGame} text={gameStatus ? 'Забрать' : 'Ставка'} /></div>
    <WinField current={currentWin} next={nextWin}/>
    </div>
    <div className={autoPanel}>
    <div className={classes.inputBlock}><MyInput value={stake} handleInputChange={handleChangeValue} title='Bet amount:' min={0.00000001} max={1} step={0.00000001}/></div>
    <div className={classes.mineBlock}><MySelect /></div>
    <div className={classes.inputBlock}><MyInput value={numberOfBets} handleInputChange={handleChangeNumberOfBets} title='Number of Bets' min={0} max={999999} step={1} hidden={true}/></div>
    <div  className={classes.betBtn}><MyButton hadleStatusGame={handleStatusGame} text={'Начать автоставку'} /></div>
    <WinField current={currentWin} next={nextWin}/>
    </div>
    </div>
  )
}
