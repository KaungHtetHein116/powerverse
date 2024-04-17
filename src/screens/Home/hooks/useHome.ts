import React, { useCallback, useEffect } from 'react'
import { useLazyGetProductQuery } from '@/service/product'
import { debounce } from '@/utils/helpers'

const useHome = () => {
	const [searchText, setSearchText] = React.useState('')
	const [trigger, { isLoading, data }] = useLazyGetProductQuery()

	useEffect(() => {
		debounceTrigger(searchText)
	}, [searchText])

	const debounceTrigger = useCallback(
		debounce((text: string) => {
			trigger({ params: { q: text } })
		}, 300),
		[],
	)

	return {
		searchText,
		setSearchText,
		isLoading,
		data,
	}
}

export default useHome
