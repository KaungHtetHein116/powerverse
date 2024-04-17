import { TApplicationStackNavigator } from '@/navigator/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TProductDetailProps = NativeStackScreenProps<
	TApplicationStackNavigator,
	'DETAIL_SCREEN'
>
