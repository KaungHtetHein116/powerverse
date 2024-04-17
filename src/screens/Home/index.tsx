import React from 'react'
import { GenericTemplate, LoadingIndicator, SearchInput } from '@/components'
import { commonStyles } from '@/theme/CommonStyles'
import homeStyles from './HomeStyles'
import ProductList from './components/ProductList'
import useHome from './hooks/useHome'
import { useCheckDevice } from '@/hooks'
import { Text } from 'react-native'

const Home = () => {
	const { data, isLoading, searchText, setSearchText } = useHome()
	const { isEmulator } = useCheckDevice()

	if (isLoading) return <LoadingIndicator />

	return (
		<GenericTemplate
			style={[
				commonStyles.regularHPadding,
				commonStyles.regularTMargin,
				homeStyles.container,
			]}
		>
			{isEmulator !== null && (
				<Text style={[commonStyles.textCenter]}>
					{`You are running on ${
						isEmulator ? `Emulator` : `Real Device`
					}`}
				</Text>
			)}
			<SearchInput
				value={searchText}
				onChangeText={setSearchText}
				label="Search"
				placeholder="iPhone 15"
				style={[commonStyles.regularBMargin]}
			/>
			<ProductList data={data?.products} />
		</GenericTemplate>
	)
}

export default Home
