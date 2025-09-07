import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootSlice } from "../app/store";
import seedrandom from "seedrandom";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootSlice> = useSelector


const randomaizer = () => {
  const seed = `${new Date().getTime()}${Math.random()}`
  const rng = seedrandom(seed)
  return rng()
}

export const getMinesArray = (minesCount: number, totalTiles: number = 25): number[] => {
  const allTileIndices = Array.from({length: 25}, (_, i) => i);
  const minesArray: number[] = [];
  for (let i = 0; i < minesCount; i++) {
    const randomIndex = Math.floor(Number(randomaizer()) * allTileIndices.length);
    const mineIndex = allTileIndices.splice(randomIndex, 1)[0];
    minesArray.push(mineIndex)
  }
return minesArray
}


