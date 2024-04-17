import Detail from '.'
import { render } from '@testing-library/react-native'
import { useGetProductDetailQuery } from '@/service/product'
import React from 'react'

jest.mock('@/service/product')

describe('Detail', () => {
	it('should render the loading component', () => {
		//@ts-ignore
		useGetProductDetailQuery.mockReturnValue({
			isLoading: true,
			data: null,
		})

		const props: any = {
			route: {
				params: {
					id: '1',
				},
			},
		}
		const { getByTestId } = render(<Detail {...props} />)
		expect(getByTestId('loading-indicator')).toBeTruthy()
	})

	it('should render the list component', () => {
		//@ts-ignore
		useGetProductDetailQuery.mockReturnValue({
			isLoading: false,
			data: { id: '1' },
		})

		const props: any = {
			route: {
				params: {
					id: '1',
				},
			},
		}
		const { getByTestId } = render(<Detail {...props} />)
		expect(getByTestId('generic-template')).toBeTruthy()
	})
})
