import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { ISearchInput } from './SearchInput'
import searchInputStyles from './SearchInputStyles'
import { commonStyles } from '@/theme/CommonStyles'
import { AppLightColors } from '@/theme/Variable'

const SearchInput = ({ label, style, ...props }: ISearchInput) => {
	return (
		<View style={style}>
			<Text style={[commonStyles.regularBMargin]}>{label}</Text>
			<TextInput
				style={[
					commonStyles.regularHPadding,
					searchInputStyles.inputContainer,
				]}
				placeholderTextColor={AppLightColors.lowEmphasis}
				{...props}
			/>
		</View>
	)
}

export default SearchInput
