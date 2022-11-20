import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
  const [bords, setBords] = useState<Bords[]>([])
  const getBordsData = async () => {
    //分割代入でdata だけ取り出す
    const { data } = await axios.get<Bords[]>(
      'http://localhost:80/api/v1/bords'
    )
    setBords(data)
  }

  useEffect(() => {
    getBordsData()
  }, [])

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
