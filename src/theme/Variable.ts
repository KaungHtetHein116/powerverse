import { moderateScale } from 'react-native-size-matters'
import { Dimensions } from 'react-native'

export const AppLightColors = {
	highEmphasis: '#202020',
	mediumEmphasis: '#565656',
	lowEmphasis: '#AAAAAA',
	backgroundLight: '#F0F2F5',
	backgroundGray: '#F7F7F7',
	background: '#FFFF',
}

/**
 * FontSize
 */
export const FontSize = {
	xxLarge: moderateScale(26),
	xLarge: moderateScale(24),
	large: moderateScale(20),
	regular: moderateScale(18),
	small: moderateScale(16),
	xSmall: moderateScale(14),
	xxSmall: moderateScale(12),
}

/**
 * Metrics Sizes
 */
const xSmall = moderateScale(4)
const small = moderateScale(8)
const regular = moderateScale(12)
const large = moderateScale(16)
const xLarge = moderateScale(20)
const xxLarge = moderateScale(24)
const xxxLarge = moderateScale(40)

export const MetricsSizes = {
	xSmall,
	small,
	regular,
	large,
	xLarge,
	xxLarge,
	xxxLarge,
}

export const RadiusSizes = {
	small: 6,
	regular: 8,
	large: 16,
	xLarge: 20,
	round: 100,
}

export const Dimension = {
	device: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
}

export default {
	FontSize,
	MetricsSizes,
}
