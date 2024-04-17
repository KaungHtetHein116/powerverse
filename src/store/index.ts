import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
	persistReducer,
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { reduxStorage } from '@/utils'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import { baseAPI } from '@/service'
import appData from './appData'

export const reducers = combineReducers({
	appData,
	[baseAPI.reducerPath]: baseAPI.reducer,
})

export type RootState = ReturnType<typeof reducers>

const persistConfig: any = {
	key: 'root',
	storage: reduxStorage,
	version: 1,
	whiteList: ['appData'],
	stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const setupStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: getDefaultMiddleware => {
			const middlewares = getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			}).concat(baseAPI.middleware)

			return middlewares
		},
	})
}

const store = setupStore()

const persistor = persistStore(store)

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch

setupListeners(store.dispatch)

export { store, persistor }
