import { FlatList } from 'react-native'
import React from 'react'
import { IProductDetail } from '@/service/product/Product'
import { commonStyles } from '@/theme/CommonStyles'
import homeStyles from '../HomeStyles'
import ProductItem from './ProductItem'
import { LoadingIndicator } from '@/components'

const ProductList = ({
	data,
	isLoading,
}: {
	data?: IProductDetail[]
	isLoading: boolean
}) => {
	const renderItem = ({ item }: { item: IProductDetail }) => {
		return <ProductItem item={item} />
	}

	if (isLoading) return <LoadingIndicator />

	return (
		<FlatList
			keyExtractor={item => item.id}
			data={data}
			renderItem={renderItem}
			contentContainerStyle={[
				commonStyles.regularTMargin,
				homeStyles.listContainer,
			]}
		/>
	)
}

export default ProductList
