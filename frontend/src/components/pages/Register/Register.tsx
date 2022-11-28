import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';



const Register = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data:any) => {
    setLoading(true)
    axios.get('http://localhost:80/sanctum/csrf-cookie').then(() => {
      axios.post('http://localhost:80/api/register', data).then(() => {
        console.log("OK")
      }).catch(error => {
        console.log(error)
        setError('submit', {
          type: 'manual',
          message: '登録に失敗しました。再度登録をしてください'
        })
        setLoading(false)
      })
    })
  }

  return (
    <div className="p-4 max-w-screen-sm mx-auto">
        <h1 className="text-center text-xl font-bold">アカウント作成</h1>
        <p className="text-center"><Link to="/login" className="text-sm c-link">アカウントを持っている方はこちら</Link></p>
        <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="py-4">
            <TextField 
              fullWidth
              variant="outlined" 
              label="名前" 
              {...register('name', {
                required: '入力してください'
              })} 
            />
          </div>
          <div className="py-4">
            <TextField 
              fullWidth
              variant="outlined" 
              label="メールアドレス" 
              {...register('email', {
                required: '入力してください'
              })} 
            />
          </div>
          <div className="py-4">
            <TextField 
              fullWidth
              id="password"
              type="password" 
              variant="outlined" 
              label="パスワード" 
              {...register('password', {
                required: '入力してください',
                minLength: {
                  value: 8,
                  message: '8文字以上で入力してください'
                }
              })} 
            />
          </div>
          <div className="py-4">
            <TextField 
              fullWidth
              type="password" 
              variant="outlined" 
              label="パスワード確認" 
              {...register('password_confirmation', {
                required: '入力してください',
                validate: {
                  match: value => value === (document.getElementById('password') as HTMLInputElement).value || 'パスワードが一致しません'
                }
              })} 
            />

          </div>
          <div>
            {/* <LoadingButton type="submit" loading={loading} variant="contained" fullWidth>アカウントを作成する</LoadingButton> */}
            <div>
            <LoadingButton loading={loading} type="submit" variant="contained" fullWidth>Login</LoadingButton>
          </div>
          </div>
        </form>
      </div>
  )
}

export default Register