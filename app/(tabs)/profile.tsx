import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { loginUser } from '../../redux/auth/actions';

interface FormData {
  email: string;
  password: string;
}

const Profile = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginForm: React.FC = (data: FormData) => {
    if (data.email === 'lider@gmail.com' && data.password === '12345') {
      loginUser(data.email);
      Alert.alert('Başarılı', 'Login Succesfully');
    } else {
      Alert.alert('Hata', 'Invalid e-mail or password');
    }
  };

  return (
    <View className='bg-primary h-full w-full flex items-center justify-center px-5'>
      <Text className='text-white text-3xl font-extrabold mb-6 tracking-wide'>
        Giriş Yap
      </Text>

      <Controller
        control={control}
        name='email'
        rules={{ required: 'Please enter an e-mail!' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='E-mail'
            placeholderTextColor='#bbb'
            value={value}
            onChangeText={onChange}
            className='w-full p-4 bg-dark-200 text-white rounded-xl shadow-md mb-4'
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        rules={{ required: 'Please enter a password!' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder='Password'
            placeholderTextColor='#bbb'
            secureTextEntry
            value={value}
            onChangeText={onChange}
            className='w-full p-4 bg-dark-200 text-white rounded-xl shadow-md mb-4'
          />
        )}
      />

      <TouchableOpacity
        onPress={handleSubmit(loginForm)}
        className='bg-accent p-4 rounded-2xl w-full shadow-lg'
      >
        <Text className='text-white text-center font-semibold text-lg'>
          Giriş Yap
        </Text>
      </TouchableOpacity>

      <Text className='text-gray-400 mt-4 text-sm'>
        Hesabınız yok mu? <Text className='text-accent font-bold'>Kaydol</Text>
      </Text>
    </View>
  );
};

export default Profile;
