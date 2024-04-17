import { Text } from 'react-native'
import React from 'react'
import { GenericTemplate, LoadingIndicator } from '@/components'
import { TProductDetailProps } from './types'
import { useGetProductDetailQuery } from '@/service/product'
import { commonStyles } from '@/theme/CommonStyles'

const Detail = ({ route }: TProductDetailProps) => {
	const { id } = route.params
	const { isLoading, data } = useGetProductDetailQuery(id)

	if (isLoading) return <LoadingIndicator />

	return (
		<GenericTemplate style={[commonStyles.center]}>
			<Text>{`Product name - ${data?.title}`}</Text>
		</GenericTemplate>
	)
}

export default Detail
