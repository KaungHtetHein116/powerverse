import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './store'
import ApplicationStackNavigator from './navigator/StackNavigator/ApplicationStackNavigator'

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ApplicationStackNavigator />
			</PersistGate>
		</Provider>
	)
}

export default App
