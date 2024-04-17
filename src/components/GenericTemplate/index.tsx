import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { commonStyles } from '@/theme/CommonStyles'
import { IGenericTemplateProps } from './GenericTemplate'

const GenericTemplate = ({
	children,
	scrollable = false,
	style,
	contentContainerStyle,
	refreshControl,
	safeTopOnly,
	showsVerticalScrollIndicator = false,
	bounces = true,
	scrollEnabled = false,
	safeAreaStyle,
	scrollViewRef,
	testID = 'generic-template',
}: IGenericTemplateProps) => {
	const ViewGroup = scrollable ? KeyboardAwareScrollView : View
	const SafeArea = safeTopOnly ? View : SafeAreaView

	const { top } = useSafeAreaInsets()

	return (
		<SafeArea
			style={[
				commonStyles.fill,
				{ marginTop: safeTopOnly ? top : 0 },
				safeAreaStyle,
			]}
			testID={testID}
		>
			<ViewGroup
				ref={scrollViewRef}
				enableOnAndroid
				showsVerticalScrollIndicator={showsVerticalScrollIndicator}
				style={[commonStyles.fill, style]}
				contentContainerStyle={[
					commonStyles.flexGrow,
					contentContainerStyle,
				]}
				refreshControl={refreshControl}
				bounces={bounces}
				enableResetScrollToCoords={false}
				scrollEnabled={scrollEnabled}
				keyboardShouldPersistTaps="handled"
				automaticallyAdjustContentInsets={false}
			>
				{children}
			</ViewGroup>
		</SafeArea>
	)
}

export default GenericTemplate
