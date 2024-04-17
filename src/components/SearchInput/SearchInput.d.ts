import { StyleProp, TextInputProps, ViewStyle } from 'react-native'

export interface ISearchInput extends TextInputProps {
	label: string
	style?: StyleProp<ViewStyle>
}
