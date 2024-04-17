import ProductItem from '.'
import { fireEvent, render } from '@testing-library/react-native'
import { navigate } from '@/navigator/utils'

jest.mock('@/navigator/utils', () => ({
	navigate: jest.fn(),
}))

describe('ProductItem', () => {
	it('should render the product item component', () => {
		const { getByTestId } = render(
			<ProductItem
				item={{ id: '1', title: 'test', description: 'test' }}
			/>,
		)
		expect(getByTestId('product-item')).toBeTruthy()

		fireEvent.press(getByTestId('product-item'))
		expect(navigate).toHaveBeenCalledWith('DETAIL_SCREEN', { id: '1' })
	})
})
