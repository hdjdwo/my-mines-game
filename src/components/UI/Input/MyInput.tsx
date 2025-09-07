import React from 'react'
import { setStake } from '../../../app/gameSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import classes from './MyInput.module.css'

export const MyInput = () => {
  const dispatch = useAppDispatch();
  const stake = useAppSelector((state) => state.game.stake)
  const multiplier = 100000000;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setStake(Number(event.target.value)))
  }

 const handleStake = (e: React.MouseEvent<HTMLDivElement>, value: string): void => {
    
    const currentStakeInt = Math.round(stake * multiplier);

    if (value === 'increment') {
      const incStakeInt = currentStakeInt + 1;
      const incStake = incStakeInt / multiplier;
      dispatch(setStake(incStake));
    } else if (value === 'decrement') {
      const decStakeInt = currentStakeInt - 1;
      const decStake = decStakeInt / multiplier;
      // Проверяем, чтобы ставка не ушла в минус
      if (decStake >= 0) {
        dispatch(setStake(decStake));
      }
    }
  };


  return (
    <div>
      <label className={classes.intputLabel} htmlFor="stake">Текущая ставка:</label>
      <div className={classes.inputBlock}>
        <input
        className={classes.input}
        autoComplete='on'
      id='stake'
       type="number"
       min={0.00000001}
       max={1}
       step={0.00000001}
       onChange={handleInputChange}
       value={stake}
       />
       <div onClick={(event) => handleStake(event, 'increment')} className={classes.increment}></div>
       <div onClick={(event) => handleStake(event, 'decrement')} className={classes.decrement}></div>
       
      </div>
    </div>
  )
}
