import axios from 'axios'
import { User } from 'type/User'
import apiClient from "./DevApiClient";


// ログインしているユーザー情報を取得
const getUser = async () => {
  const { data } = await axios.get<User[]>('http://localhost:80/api/v1/user')
  return data
}

const login = async ({email,password}:{email:string,password:string}) => {

  await apiClient.get('sanctum/csrf-cookie');
  const {data} = await apiClient.post<User[]>('/api/login', { email, password });
  console.log({data})
  return data
}

// ログアウト
const logout = async () => {
  const { data } = await axios.post<User[]>
  ('http://localhost:80/api/v1/logout')
  return data
}
export { getUser ,login,logout}
