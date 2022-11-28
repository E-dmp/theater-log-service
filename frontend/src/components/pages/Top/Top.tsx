import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { useBords } from '../../../hooks/bords/BordsQuery'

const Top = () => {

  const {data:bords,status} = useBords()
 
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

      <Button component={RouterLink} to='/login'>
        ログイン
      </Button>
      <Button component={RouterLink} to='/*'>
        Not Found Page
      </Button>
    </>
  )
}

export default Top
