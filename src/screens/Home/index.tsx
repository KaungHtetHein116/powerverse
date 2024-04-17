import React from 'react'
import { GenericTemplate, SearchInput } from '@/components'
import { commonStyles } from '@/theme/CommonStyles'
import homeStyles from './HomeStyles'
import ProductList from './components/ProductList'
import useHome from './hooks/useHome'
import { useCheckDevice } from '@/hooks'
import { Text } from 'react-native'

const Home = () => {
	const { data, isLoading, searchText, setSearchText } = useHome()
	const { isEmulator } = useCheckDevice()

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
			<ProductList data={data?.products} isLoading={isLoading} />
		</GenericTemplate>
	)
}

export default Home
