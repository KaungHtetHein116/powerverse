import ProductList from '.'
import { render } from '@testing-library/react-native'

describe('ProductList', () => {
	it('should render the product list component', () => {
		const { getByTestId } = render(
			<ProductList
				data={[{ id: '1', title: 'test', description: 'test' }]}
			/>,
		)
		expect(getByTestId('product-list')).toBeTruthy()
	})
})
