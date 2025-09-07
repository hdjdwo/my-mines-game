import React from 'react'
import { MyInput } from '../UI/Input/MyInput';
import { MySelect } from '../UI/Select/MySelect';
import { MyButton } from '../UI/Button/MyButton';
import classes from './BetPanel.module.css'
import { getMinesArray, useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeBalance, setGameStatus, setMines, setWin, setWinCurrency } from '../../app/gameSlice';
import { BalancePanel } from '../Balance/BalancePanel';
import { WinField } from '../WinField/WinField';

export const BetPanel = () => {

  const dispatch = useAppDispatch()
  const mines = useAppSelector((state) => state.game.mines)
  const gameStatus = useAppSelector((state) => state.game.gameIsStarted)
  const stake = useAppSelector((state) => state.game.stake)
  const board = useAppSelector((state) => state.game.board)
  

  const handleStatusGame = (event: React.MouseEvent<HTMLDivElement>) => {
    if(gameStatus) {
      dispatch(setWin(true))
      dispatch(setWinCurrency(currentWin))
    }
    if(gameStatus) {
dispatch(setGameStatus(false))
    } else {
dispatch(setGameStatus(true))
dispatch(setWin(false))
    }
    dispatch(changeBalance(-stake))
    dispatch(setMines(getMinesArray(mines)))
  }
  

  const getMultipliers = () => {
  const openTile = board.filter(item => item.isRevealed === true).length;
  const N = 25;
  let currentMultiplier = 1;
  const firstMultiplier= 23 / (25 - mines)
  if(openTile > 0) {
   currentMultiplier = firstMultiplier;
    for (let i = 0; i < openTile; i++) {
      const pSafe = (N - mines - i)/ (N - i)
      currentMultiplier /= pSafe
    }
  }
  const nextStepSafeProbability = (N - mines - openTile) / (N - openTile);
  const nextMultiplier = currentMultiplier / nextStepSafeProbability;

  

  return {
    current: (openTile > 0) ? currentMultiplier : 0,
    next: nextMultiplier,
  };
  }

  const {current, next} = getMultipliers()
  const currentWin = current * stake
  const nextWin = next * stake

  

  return (
    <div className={classes.container}>
    <div><MyInput /></div>
    <div><MySelect /></div>
    <div  className={classes.betBtn}><MyButton hadleStatusGame={handleStatusGame} text={gameStatus ? 'Забрать' : 'Ставка'} /></div>
    <WinField current={currentWin} next={nextWin}/>
    <div className={classes.balance}><BalancePanel/></div>
    </div>
  )
}
