import { renderHook } from '@testing-library/react-hooks'
import useCheckDevice from '../useCheckDevice'

jest.mock('react-native', () => ({
	NativeModules: {
		DeviceCheck: {
			isEmulator: jest.fn().mockResolvedValue(true),
		},
	},
}))

describe('useCheckDevice', () => {
	it('should return isEmulator value', async () => {
		const mockIsEmulator = true

		const { result, waitForNextUpdate } = renderHook(() => useCheckDevice())

		expect(result.current.isEmulator).toBeNull()

		// Wait for the hook to update
		await waitForNextUpdate()

		// Assert updated value
		expect(result.current.isEmulator).toBe(mockIsEmulator)
	})
})
