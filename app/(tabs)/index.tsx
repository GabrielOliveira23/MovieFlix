import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import TrendingCard from '@/components/TrendingCard';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { movieFlixApi } from '@/services/api';
import { fetchMovies } from '@/services/tmdb-api';
import useAxios from '@/services/useAxios';
import useFetch from '@/services/useFetch';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Image,
	ScrollView,
	Text,
	View,
} from 'react-native';

const { getTrendings } = movieFlixApi();

export default function Index() {
	const router = useRouter();

	const {
		data: trendingMovies,
		loading: trendingLoading,
		error: trendingError,
		refetch: refetchTrendingMovies,
	} = useAxios(getTrendings, false);

	useFocusEffect(
		useCallback(() => {
			refetchTrendingMovies();
		}, []),
	);

	const {
		data: movies,
		loading: moviesLoading,
		error: moviesError,
	} = useFetch(() => fetchMovies({ query: '' }));

	return (
		<View className="flex-1 bg-primary">
			<Image source={images.bg} className="absolute w-full z-0" />
			<ScrollView
				className="flex-1 px-5"
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
			>
				<Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

				{moviesLoading || trendingLoading ? (
					<ActivityIndicator
						size="large"
						color="#0000FF"
						className="mt-10 self-center"
					/>
				) : moviesError || trendingError ? (
					<Text>{moviesError?.message || trendingError?.message}</Text>
				) : (
					<View className="flex-1 mt-5">
						<SearchBar
							onPress={() => router.push('/search')}
							placeholder="Search for a movie"
						/>

						{trendingMovies && trendingMovies.length > 0 && (
							<View className="-mr-5 mt-10">
								<Text className="text-lg text-white font-bold mb-3">
									Trending Movies
								</Text>

								<FlatList
									className="mb-4 mt-3 -ml-5 pl-5"
									data={trendingMovies}
									renderItem={({ item, index }) => (
										<TrendingCard movie={item} index={index} />
									)}
									keyExtractor={(item) => item.movie_id.toString()}
									horizontal={true}
									showsHorizontalScrollIndicator={false}
									ItemSeparatorComponent={() => <View className="w-6" />}
								/>
							</View>
						)}

						<>
							<Text className="text-lg text-white font-bold mt-5 mb-3">
								Latest Movies
							</Text>
							<FlatList
								className="mt-2 pb-32"
								data={movies}
								renderItem={({ item }) => <MovieCard {...item} />}
								keyExtractor={(item) => item.id.toString()}
								numColumns={3}
								columnWrapperStyle={{
									justifyContent: 'flex-start',
									gap: 20,
									paddingRight: 5,
									marginBottom: 20,
								}}
								scrollEnabled={false}
							/>
						</>
					</View>
				)}
			</ScrollView>
		</View>
	);
}
