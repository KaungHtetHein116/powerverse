import { View } from 'react-native'
import GenericTemplate from '.'
import { render } from '@testing-library/react-native'
import React from 'react'

const Component = () => {
	return (
		<GenericTemplate>
			<View testID="child" />
		</GenericTemplate>
	)
}

describe('GenericTemplate', () => {
	it('should render the GenericTemplate component', () => {
		const { getByTestId } = render(<Component />)
		expect(getByTestId('generic-template')).toBeTruthy()
		expect(getByTestId('child')).toBeTruthy()
	})
})
