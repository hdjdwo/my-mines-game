import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import classes from './BalancePanel.module.css'
import { changeBalance } from '../../app/gameSlice'

export const BalancePanel = () => {

  const balance = useAppSelector((state) => state.game.balance)
  const dispatch = useAppDispatch()

  return (
    <div>
      <p className={classes.balanceText}>Игровой баланс:</p>
      <div className={classes.balance}>{balance}
      </div>
      <div onClick={() => dispatch(changeBalance(10000))} className={classes.refreshText}>Обновить баланс</div>
    </div>
  )
}
