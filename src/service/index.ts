import {
	BaseQueryFn,
	FetchArgs,
	FetchBaseQueryError,
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
	baseUrl: 'https://dummyjson.com/',
})

const baseQueryWithInterceptor: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	return result
}

const baseAPI = createApi({
	refetchOnMountOrArgChange: true,
	refetchOnReconnect: true,
	refetchOnFocus: true,
	keepUnusedDataFor: process.env.NODE_ENV !== 'test' ? 3600 : 0,
	baseQuery: baseQueryWithInterceptor,
	endpoints: builder => {
		return {}
	},
})

export { baseAPI }
