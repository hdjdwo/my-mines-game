import React from 'react'
import { MyInput } from '../UI/Input/MyInput';
import { MySelect } from '../UI/Select/MySelect';
import { MyButton } from '../UI/Button/MyButton';
import classes from './BetPanel.module.css'
import { getMinesArray, useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setMines } from '../../app/gameSlice';

export const BetPanel = () => {

  const dispatch = useAppDispatch()
  const mines = useAppSelector((state) => state.game.mines)
  
  const getMinesList = (event: React.MouseEvent<HTMLDivElement>) => {
dispatch(setMines(getMinesArray(mines)))
  }

  return (
    <div className={classes.container}>
    <div><MyInput /></div>
    <div><MySelect /></div>
    <div onClick={getMinesList} className={classes.betBtn}><MyButton /></div>
    </div>
  )
}
