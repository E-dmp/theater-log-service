import { login } from 'api/auth/AuthApi'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Helmet } from 'react-helmet-async'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { useLogin } from '../../../hooks/auth/AuthQuery'

const Login = () => {
  const login = useLogin()
  const [email, setEmail] = useState('scrvrl@mamssa.com')
  const [password, setPassword] = useState('123456789')

  // フォームログイン時に実行される関数
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login.mutate({ email, password })
  }
  

  function Copyright (props: any) {
    return (
      <Typography
        variant='body2'
        color='text.secondary'
        align='center'
        {...props}
      >
        {'Copyright © '}
        <Link color='inherit' href='https://mui.com/'>
          geki-log
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }
  const theme = createTheme()

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Helmet>
              <title>Login Page</title>
            </Helmet>

            <Typography component='h1' variant='h5'>
              ログイン
            </Typography>
            <Box
              component='form'
              onSubmit={handleLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Login
