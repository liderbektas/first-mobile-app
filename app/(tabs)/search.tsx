import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { images } from '@/constants/images';
import MovieCard from '@/components/movie-cart';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import { icons } from '@/constants/icons';
import SearchBar from '@/components/search-bar';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: movies,
    loading,
    error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }));

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (searchQuery.trim()) {
       await loadMovies();
      } else {
        reset();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return (
    <View className='flex-1 bg-primary'>
      <Image
        source={images.bg}
        className='flex-1 absolute w-full z-0'
        resizeMode='cover'
      />

      <FlatList
        data={movies}
        numColumns={3}
        contentContainerStyle={{ paddingBottom: 100 }}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 15,
          paddingRight: 5,
          marginVertical: 16,
        }}
        className='mt-2 pb-32'
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard {...item} />}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className='w-12 h-10' />
            </View>

            <View className='my-5'>
              <SearchBar
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
                placeholder='Search movies...'
              />
            </View>

            {loading && (
              <ActivityIndicator
                size='large'
                color='#0000FF'
                className='my-3'
              />
            )}

            {error && (
              <Text className='text-red-500 px-5 my-3'>
                Something went wrong
              </Text>
            )}
            {!loading && !error && searchQuery.trim() && movies.length > 0 && (
              <Text className='text-xl font-bold text-white'>
                Search Results for{' '}
                <Text className='text-accent'>{searchQuery}</Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className='mt-10 px-5'>
              <Text className='text-center text-gray-500'>
                {searchQuery.trim() ? 'No movies found' : 'Search for a movie'}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
