import React from 'react'
import { GenericTemplate, SearchInput } from '@/components'
import { commonStyles } from '@/theme/CommonStyles'
import homeStyles from './HomeStyles'
import ProductList from './components/ProductList'
import useHome from './hooks/useHome'

const Home = () => {
	const { data, isLoading, searchText, setSearchText } = useHome()

	return (
		<GenericTemplate
			style={[
				commonStyles.regularHPadding,
				commonStyles.regularTMargin,
				homeStyles.container,
			]}
		>
			<SearchInput
				value={searchText}
				onChangeText={setSearchText}
				label="Search"
				placeholder="iPhone 15"
				style={[commonStyles.regularBMargin]}
			/>
			<ProductList data={data?.products} isLoading={isLoading} />
		</GenericTemplate>
	)
}

export default Home
