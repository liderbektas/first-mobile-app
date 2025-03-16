import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';

const TabIcon = ({ focused, image, icons, text }: any) => {
  if (focused) {
    return (
      <>
        <ImageBackground
          className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
          source={image}
        >
          <Image source={icons} tintColor='#151312' className='size-5' />
          <Text className='text-secondary text-sm ml-2'>{text}</Text>
        </ImageBackground>
      </>
    );
  }

  return (
    <View className='size-full justify-center items-center mt-4 rounded-full'>
      <Image source={icons} tintColor='#A8b5db' className='size-5' />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 35,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '0f0d23',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              image={images.highlight}
              text='Home'
              icons={icons.home}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='search'
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              image={images.highlight}
              text='Search'
              icons={icons.search}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='saved'
        options={{
          title: 'Kaydedilenler',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              image={images.highlight}
              text='Saved'
              icons={icons.save}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profil',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              image={images.highlight}
              text='Profile'
              icons={icons.person}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
