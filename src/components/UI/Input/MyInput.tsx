import React from 'react'
import { setStake } from '../../../app/gameSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import classes from './MyInput.module.css'

export const MyInput = () => {
  const dispatch = useAppDispatch();
  const stake = useAppSelector((state) => state.game)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setStake(Number(event.target.value)))
  }
  return (
    <div>
      <label className={classes.intputLabel} htmlFor="stake">Текущая ставка:</label>
      <div>
        
        <input
        className={classes.input}
      id='stake'
       type="number"
       min='1'
       onChange={handleInputChange}
       value={stake.stake}
       />
       
      </div>
    </div>
  )
}
