import { createSlice } from '@reduxjs/toolkit'
import { AppDataState } from './appData'

const initialState: AppDataState = {}

const slice = createSlice({
	name: 'appData',
	initialState,
	reducers: {},
})

export const {} = slice.actions

export default slice.reducer
