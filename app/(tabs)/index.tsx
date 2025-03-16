import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/search-bar';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/movie-cart';

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => fetchMovies({ query: '' }));

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute w-full z-0' />

      <ScrollView
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
      >
        <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5 mx-auto' />

        {loading ? (
          <ActivityIndicator
            size='large'
            color='#000ff'
            className='mt-10 self-center'
          />
        ) : error ? (
          <Text className=''>Something went wrong</Text>
        ) : (
          <View className='flex-1 mt-5'>
            <SearchBar
              onPress={() => router.push('/search')}
              placeholder='Search for a movie'
            />

            <>
              <Text className='text-lg text-white font-bold mt-5 mb-3'>
                Latest Movie
              </Text>

              <FlatList
                data={movies}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className='mt-2 pb-32'
                scrollEnabled={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MovieCard {...item} />}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
