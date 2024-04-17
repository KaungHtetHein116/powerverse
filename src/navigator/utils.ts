/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
	createNavigationContainerRef,
	CommonActions,
	StackActions,
} from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef<any>()

export const navigate = (name: any, params?: any) => {
	if (navigationRef.isReady()) {
		navigationRef.navigate(name, params)
	}
}

export function push(name: any, params?: any) {
	navigationRef.current?.dispatch(StackActions.push(name, params))
}

export const navigateAndReset = (routes: any = [], index = 0) => {
	if (navigationRef.isReady()) {
		navigationRef.dispatch(
			CommonActions.reset({
				index,
				routes,
			}),
		)
	}
}

export const navigateAndSimpleReset = (name: string, index?: any) => {
	if (navigationRef.isReady()) {
		navigationRef.dispatch(
			CommonActions.reset({
				index,
				routes: [{ name }],
			}),
		)
	}
}
