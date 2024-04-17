import { LegacyRef } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

export interface IGenericTemplateProps {
	children: React.ReactNode
	footer?: React.ReactElement
	scrollable?: boolean
	style?: StyleProp<ViewStyle>
	contentContainerStyle?: StyleProp<ViewStyle>
	refreshControl?: React.ReactElement
	safeTopOnly?: boolean
	showsVerticalScrollIndicator?: boolean
	bounces?: boolean
	scrollEnabled?: boolean
	scrollToYPosition?: number
	enableResetScrollToCoords?: boolean
	testID?: string
	safeAreaStyle?: StyleProp<ViewStyle>
	scrollViewRef?: LegacyRef<T>
}
