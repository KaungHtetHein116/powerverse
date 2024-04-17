import { baseAPI } from '../index'
import { endpoints } from '../endpoints'
import { IProductDetail, IProducts } from './Product'

export const productService = baseAPI.injectEndpoints({
	endpoints: builder => ({
		getProduct: builder.query<IProducts, { params: { q?: string } }>({
			query: ({ params }) => {
				return {
					url: endpoints.product,
					method: 'GET',
					params,
				}
			},
		}),
		getProductDetail: builder.query<IProductDetail, string>({
			query: (id: string) => {
				return {
					url: endpoints.productDetail(id),
					method: 'GET',
				}
			},
		}),
	}),
	overrideExisting: true,
})

export const {
	useGetProductQuery,
	useGetProductDetailQuery,
	useLazyGetProductQuery,
} = productService
