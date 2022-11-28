import axios from 'axios'
import { User } from 'type/User'

// const apiClient = axios.create({
//   withCredentials: true,
// });

const apiClient = axios.create({
  baseURL: 'http://localhost:80',
  withCredentials: true,
});

// ログインしているユーザー情報を取得
const getUser = async () => {
  const { data } = await axios.get<User[]>('http://localhost:80/api/v1/user')
  return data
}

// ログイン
// const login = ({email,password}:{email:string,password:string}) => {
//   apiClient.get('/sanctum/csrf-cookie').then((res) => {
//     apiClient.post<User[]>('http://localhost:80/login',{email,password}).then((res) => {
//       return res;
//     })
//   })
// }

const login = async ({email,password}:{email:string,password:string}) => {

await apiClient.get('sanctum/csrf-cookie')

  const {data} = await apiClient.post<User[]>('api/login', { email, password })
  console.log({data})
  return data

  // await axios.get('http://localhost:80/sanctum/csrf-cookie', { withCredentials: true }).then(response => {
  //   axios.post<User[]>('http://localhost:80/api/login',{email,password}, { withCredentials: true }).then(response => {
  //     return response
  //   })
  // });
}

// ログアウト
const logout = async () => {
  const { data } = await axios.post<User[]>
  ('http://localhost:80/api/v1/logout')
  return data
}
export { getUser ,login,logout}
