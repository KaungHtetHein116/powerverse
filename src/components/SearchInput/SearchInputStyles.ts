import { AppLightColors } from '@/theme/Variable'
import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const searchInputStyles = StyleSheet.create({
	inputContainer: {
		height: moderateScale(48),
		backgroundColor: AppLightColors.background,
		borderRadius: moderateScale(8),
	},
})

export default searchInputStyles
