import React from 'react'
import classes from './WinField.module.css'
import { useAppSelector } from '../../hooks/hooks'




interface iWin {
 current : number,
next : number
}

export const WinField: React.FC<iWin> = ({current, next}) => {

const currency = useAppSelector((state) => state.game.currency)

  return (
    <div>
      <p className={classes.text}>Текущий выигрыш: <br />{current}
        <img className={classes.currency} src={currency} alt="" />
      </p>
      
      <p className={classes.text}>Следующий выигрыш: <br />{next}
        <img className={classes.currency} src={currency} alt="" />
      </p>
      
      </div>
  )
}
