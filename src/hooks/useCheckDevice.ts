import { useEffect, useState } from 'react'
import { NativeModules } from 'react-native'

const { DeviceCheck } = NativeModules

const useCheckDevice = () => {
	const [isEmulator, setIsEmulator] = useState(null)

	useEffect(() => {
		checkDevice()
	}, [])

	const checkDevice = async () => {
		try {
			const isEmulator = await DeviceCheck.isEmulator()
			setIsEmulator(isEmulator)
		} catch (error) {
			console.log(error)
		}
	}

	return { isEmulator }
}

export default useCheckDevice
