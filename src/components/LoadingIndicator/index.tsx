import { ActivityIndicator } from 'react-native'
import React from 'react'
import { commonStyles } from '@/theme/CommonStyles'

const LoadingIndicator = () => {
	return (
		<ActivityIndicator
			size="large"
			style={[commonStyles.fill, commonStyles.center]}
			testID="loading-indicator"
		/>
	)
}

export default LoadingIndicator
