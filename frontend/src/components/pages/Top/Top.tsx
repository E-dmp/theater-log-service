import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { Helmet } from 'react-helmet-async'

const Top = () => {
  return (
    <>
      <Helmet>
        <title>Top Page</title>
      </Helmet>
      <p>Top Page</p>
      <Button component={RouterLink} to='/*'>
        Not Found Page
      </Button>
    </>
  )
}

export default Top
