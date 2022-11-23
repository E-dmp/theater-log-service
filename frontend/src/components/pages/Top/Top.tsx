import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

type Bords = {
  id: number
  title: string
  description: string
  user_id: number
  bord_img_url: string
  created_at: Date
  updated_at: Date
}

const Top = () => {
  const {data:bords,status} = useQuery(['bords'],async ()=>{
    const { data } = await axios.get<Bords[]>(
      'http://localhost:80/api/v1/bords'
    )
    return data
  })

  if (status == "loading") return <div className='loader'></div>
  else if (status == "error") return <div>データの読み込みに失敗しました</div>
  else if (!bords || bords.length <= 0) return <div>登録されたボードはありません</div>

  return (
    <>
      <Helmet>
        <title>Top Page</title>
      </Helmet>
      <p>Top Page</p>

      {bords.map(bord => {
        return <p key={bord.id}>{bord.title}</p>
      })}

      <Button component={RouterLink} to='/*'>
        Not Found Page
      </Button>
    </>
  )
}

export default Top
