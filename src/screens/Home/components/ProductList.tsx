import { FlatList, Text } from 'react-native'
import React from 'react'
import { IProductDetail } from '@/service/product/Product'
import { commonStyles } from '@/theme/CommonStyles'
import homeStyles from '../HomeStyles'
import ProductItem from './ProductItem'
import { LoadingIndicator } from '@/components'

const ProductList = ({ data }: { data?: IProductDetail[] }) => {
	const renderItem = ({ item }: { item: IProductDetail }) => {
		return <ProductItem item={item} />
	}

	const renderListEmptyComponent = () => {
		return <Text style={commonStyles.textCenter}>{'result not found'}</Text>
	}

	return (
		<FlatList
			keyExtractor={item => item.id}
			data={data}
			renderItem={renderItem}
			contentContainerStyle={[
				commonStyles.regularTMargin,
				homeStyles.listContainer,
			]}
			showsVerticalScrollIndicator={false}
			ListEmptyComponent={renderListEmptyComponent}
		/>
	)
}

export default ProductList
