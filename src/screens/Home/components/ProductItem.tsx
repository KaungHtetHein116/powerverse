import { Text, Pressable } from 'react-native'
import React, { useCallback } from 'react'
import { IProductDetail } from '@/service/product/Product'
import { commonStyles } from '@/theme/CommonStyles'
import homeStyles from '../HomeStyles'
import { navigate } from '@/navigator/utils'
import { DETAIL_SCREEN } from '@/navigator/routeName'

const ProductItem = ({ item }: { item: IProductDetail }) => {
	const onPress = useCallback(() => {
		navigate(DETAIL_SCREEN, { id: item.id })
	}, [])

	return (
		<Pressable
			onPress={onPress}
			style={[
				commonStyles.smallBorderRadius,
				commonStyles.regularPadding,
				homeStyles.itemContainer,
			]}
		>
			<Text>{item?.title}</Text>
		</Pressable>
	)
}

export default ProductItem
