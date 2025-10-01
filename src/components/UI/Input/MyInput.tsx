import React from 'react'
import classes from './MyInput.module.css'

interface IInput {
  title?: string,
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value?: number,
  min?: number,
  max?: number,
  step?: number,
  hidden?: boolean
}

export const MyInput:React.FC<IInput> = ({title, handleInputChange, value, min, max, step, hidden = false}) => {

  const svgStyle = (hidden === true) ? `${classes.isHidden}` : `${classes.btc}`
 

  return (
    <>
      <label className={classes.intputLabel} htmlFor="stake">{title}</label>
      <div className={classes.inputBlock}>
        <input
          className={classes.input}
          id='stake'
          type="number"
          min={min}
          max={max}
          step={step}
          onChange={handleInputChange}
          value={value} 
        />
        <div className={svgStyle} >
          <svg data-ds-icon="BTC" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" className={classes.svg}><path fill="#F7931A" d="M22.974 12.026C22.974 18.086 18.06 23 12 23S1.026 18.087 1.026 12.026C1.026 5.966 5.94 1.052 12 1.052s10.974 4.914 10.974 10.974"></path><path fill="#fff" d="M16.932 10.669c.213-1.437-.88-2.21-2.378-2.726l.484-1.948-1.182-.296-.481 1.897c-.313-.079-.633-.151-.949-.223l.481-1.9-1.185-.296-.485 1.945a31 31 0 0 1-.756-.179l-1.636-.409L8.532 7.8s.88.203.86.213a.633.633 0 0 1 .553.69V8.7l-.553 2.22q.071.018.13.04l-.007-.002-.123-.03-.777 3.093a.43.43 0 0 1-.546.28l.003.001-.863-.213-.588 1.351 1.544.381.845.22-.491 1.97 1.185.295.485-1.948q.483.129.945.244l-.485 1.941 1.186.296.488-1.966c2.024.382 3.544.227 4.183-1.601.515-1.471-.024-2.32-1.09-2.874.777-.165 1.358-.677 1.516-1.728m-2.712 3.797c-.364 1.475-2.842.688-3.646.478l.65-2.598c.804.189 3.381.588 2.996 2.12m.368-3.818c-.344 1.34-2.406.657-3.066.492l.591-2.365c.667.165 2.822.478 2.475 1.873"></path></svg>
        </div>
      </div>
    </>
  );
}