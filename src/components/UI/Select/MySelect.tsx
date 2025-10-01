import React from 'react'
import classes from './MySelect.module.css'
import { useAppDispatch } from '../../../hooks/hooks';
import { setMinesCount } from '../../../app/gameSlice';

export const MySelect = () => {
  const dispatch = useAppDispatch();
  

  const handleOptionClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setMinesCount(Number(event.target.value)));
    
  }

  return (
    <div className={classes.container}>
    <label className={classes.selectLabel} htmlFor="mines">Mines:</label>
    <select onChange={handleOptionClick} className={classes.select} name="" id="mines" >
    <option value="3" selected>3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20">20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
      </select>
    </div>
  )
}
