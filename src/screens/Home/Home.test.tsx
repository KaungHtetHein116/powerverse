import Home from '.'
import { render } from '@testing-library/react-native'
import React from 'react'
import useHome from './hooks/useHome'

jest.mock('@/hooks', () => ({
	useCheckDevice: jest.fn(() => ({
		isEmulator: true,
	})),
}))

jest.mock('./hooks/useHome')

describe('Home', () => {
	it('should render the loading component', () => {
		//@ts-ignore
		useHome.mockReturnValue({
			data: null,
			isLoading: true,
			searchText: '',
			setSearchText: jest.fn(),
		})

		const { getByTestId } = render(<Home />)
		expect(getByTestId('loading-indicator')).toBeTruthy()
	})

	it('should render the home component', () => {
		//@ts-ignore
		useHome.mockReturnValue({
			data: [{ id: '1' }],
			isLoading: false,
			searchText: '',
			setSearchText: jest.fn(),
		})

		const { getByTestId } = render(<Home />)
		expect(getByTestId('generic-template')).toBeTruthy()
	})
})
