import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

const inset = { top: 0, right: 0, bottom: 0, left: 0 }

module.exports = {
	...mockSafeAreaContext,
	SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
	SafeAreaConsumer: jest
		.fn()
		.mockImplementation(({ children }) => children(inset)),
	useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
	SafeAreaView: ({ children }: any) => children,
}
