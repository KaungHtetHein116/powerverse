import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Detail, Home } from '@/screens'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/navigator/utils'
import { DETAIL_SCREEN, HOME_SCREEN } from '@/navigator/routeName'
import { TApplicationStackNavigator } from '@/navigator/types'

const Stack = createNativeStackNavigator<TApplicationStackNavigator>()

function ApplicationStackNavigator() {
	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator initialRouteName={HOME_SCREEN}>
				<Stack.Screen
					name={HOME_SCREEN}
					component={Home}
					options={{
						title: 'Products',
					}}
				/>
				<Stack.Screen
					name={DETAIL_SCREEN}
					component={Detail}
					options={{
						title: 'Product Detail',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default ApplicationStackNavigator
