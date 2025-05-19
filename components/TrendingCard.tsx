import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import MaskedView from '@react-native-masked-view/masked-view';
import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

interface TrendingCardProps {
	movie: TrendingMovie;
	index: number;
}

const TrendingCard = ({
	movie: { movie_id, title, poster_path, genres, vote_average },
	index,
}: TrendingCardProps) => {
	return (
		<Link href={`/movies/${movie_id}`} asChild>
			<TouchableOpacity className="w-32 relative pl-3">
				<View className="w-32 h-48">
					<Image
						source={{
							uri: poster_path
								? `https://image.tmdb.org/t/p/w500${poster_path}`
								: 'https://placehold.co/600x400/1A1A1A/FFFFFF.png',
						}}
						className="w-full h-full rounded-lg"
						resizeMode="cover"
					/>
					<BlurView
						intensity={40}
						tint="light"
						className="absolute top-0 right-0 m-[5px] flex-row items-center justify-center p-1 gap-1 overflow-hidden rounded-[3px]"
					>
						<Image source={icons.star} className="size-2" />
						<Text className="text-white font-bold text-[8px]">
							{vote_average.toFixed(2)}
						</Text>
					</BlurView>
				</View>

				<View className="absolute bottom-5 -left-3.5 px-2 py-1">
					<MaskedView
						maskElement={
							<Text className="font-bold text-6xl">{index + 1}</Text>
						}
					>
						<Image
							source={images.rankingGradient}
							className="size-16"
							resizeMode="cover"
						/>
					</MaskedView>
				</View>

				<View className="flex-col">
					<Text className="font-bold mt-2 text-white" numberOfLines={1}>
						{title}
					</Text>
					<Text className="text-xs text-light-300" numberOfLines={1}>
						{genres
							?.filter((_, index) => index < 2)
							.map((genre, index) => (index > 0 ? ` • ${genre}` : genre)) ||
							'Genre'}
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	);
};

export default TrendingCard;
