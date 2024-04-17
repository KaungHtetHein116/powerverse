import LoadingIndicator from '.'
import { render } from '@testing-library/react-native'
import React from 'react'

describe('LoadingIndicator', () => {
	it('should render the LoadingIndicator component', () => {
		const { getByTestId } = render(<LoadingIndicator />)
		expect(getByTestId('loading-indicator')).toBeTruthy()
	})
})
