import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TileState {
  isRevealed: boolean,
  hasMine: boolean,
  selected?: boolean
}

interface GameState {
  stake: number,
  mines: number,
  minesArray: number[],
  gameIsStarted: boolean,
  gameIsLose: boolean,
  gameisWin: boolean,
  board: TileState[],
  balance: number,
  winCurrency: number,
  numOfBets: number,
  gameMode: string,
  selectedTiles: number[]
}

const initialState: GameState = {
  stake: 0.00000001,
  mines: 3,
  minesArray: [],
  gameIsStarted: false,
  gameIsLose: false,
  gameisWin: false,
  board: Array.from({ length: 25 }, (_, i) => ({
    isRevealed: false,
    hasMine: false,
  })),
  balance: 2,
  winCurrency: 0,
  numOfBets: 0,
  gameMode: 'Manual',
  selectedTiles: []
}

const gameSlice = createSlice({
name: 'game',
initialState,
reducers: {
     setStake: (state, action: PayloadAction<number>) => {
      state.stake = action.payload;
    },
    setMinesCount: (state, action: PayloadAction<number>) => {
      state.mines = action.payload
    },
    setMines: (state, action: PayloadAction<number[]>) => {
      state.minesArray = action.payload
      state.board = Array.from({length: 25}, (_, i) => ({
        isRevealed: false,
        hasMine: state.minesArray.includes(i)
      }))
    },
    resetMines: (state) => {
      state.minesArray = [];
      state.gameIsStarted = false
      state.gameIsLose = false;
      state.gameisWin = false;
    },
    setGameStatus: (state, action: PayloadAction<boolean>) => {
      state.gameIsStarted = action.payload
      if(action.payload) {
        state.gameIsLose = false;
        state.gameisWin = false
      }
      if(action.payload && state.gameMode === 'Auto') {
       
        state.gameIsStarted = action.payload
      }
    },
    setLose: (state, action: PayloadAction<boolean>) => {
      state.gameIsLose = action.payload
    },
    setWin: (state, action: PayloadAction<boolean>) => {
      state.gameisWin = action.payload
    },
    revealTile: (state, action: PayloadAction<number>) => {
     
      const index = action.payload;
      if (state.board[index]) {
        state.board[index].isRevealed = true;
      }
    },
    changeBalance: (state, action: PayloadAction<number>) => {
      if(action.payload === 10000) {
        state.balance = 2
      } else {
state.balance += action.payload
      }
      
    },
    setWinCurrency: (state, action: PayloadAction<number>) => {
      state.winCurrency = action.payload
    },
    changeGameMode: (state, action: PayloadAction<string>) => {
      state.gameMode = action.payload
      state.selectedTiles = []
    },
    setNumberOfBets: (state, action: PayloadAction<number | undefined>) => {
      if (typeof action.payload === 'number') {
    state.numOfBets = action.payload
  } else {
    state.numOfBets -= 1
  }
    },
    setSelectedTiles: (state, action: PayloadAction<number>) => {
      if(state.selectedTiles.includes(action.payload)) {
       state.selectedTiles = state.selectedTiles.filter(i => i !== action.payload)
      } else {
state.selectedTiles.push(action.payload)
      }
      
    },
}
})

export const {setStake, setMines, setWinCurrency,  setMinesCount,  revealTile,setGameStatus, setLose, setWin, changeBalance, changeGameMode, setNumberOfBets, setSelectedTiles} = gameSlice.actions;
export default gameSlice.reducer