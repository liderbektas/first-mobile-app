import store from '../store';
import { _login, _logout } from './slice';
import AsyncStorage from "@react-native"

export const loginUser = async (data) => {
  try {
    //await AsyncS
    store.dispatch(_login(data));
  } catch (error) {
    console.log(error);
  }
};
export const logoutUser = () => store.dispatch(_logout());
