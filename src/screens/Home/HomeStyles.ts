import { AppLightColors } from '@/theme/Variable'
import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const homeStyles = StyleSheet.create({
	container: {
		backgroundColor: AppLightColors.backgroundLight,
	},
	listContainer: {
		gap: moderateScale(10),
		flexGrow: 1,
	},
	itemContainer: {
		backgroundColor: AppLightColors.background,
	},
})

export default homeStyles
