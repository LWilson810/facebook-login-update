import React, { useState } from 'react'
import {
  Button,
  Box,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
  styled,
  Checkbox
} from '@mui/material'

import NavLink from "next/link"
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { useAuth } from 'src/hooks/use-auth';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useSession, signIn, signOut } from 'next-auth/react'
import Register from './auth/register'
import { useSession } from "next-auth/client"

import ResetPassword from './auth/reset'

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const Home = () => {

  
  const [dialog, setDialog] = useState(false)
  const [signup, setSignup] = useState(false)
  const [signin, setSignin] = useState(false)
  const [pass, setPass] = useState(false)

  const [session, loading] = useSession()

  const router = useRouter();


  
  if(session){
    console.log("UUUUUUUUSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEE",session.user);
    router.push('/dashboard');
  }

  const handleClickSignUp = () => {
    setDialog(false)
    setSignup(true)
  }

  const handleCloseSignUp = () => {
    setSignup(false)
  }


  const handleClickSignIn = () => {
    setDialog(false)
    setSignin(true)
  }

  const handleCloseSignIn = () => {
    setSignin(false)
  }

  const openDialog = () => {
    setDialog(true)
  }

  const closeDialog = () => {
    setDialog(false)
  }

  const handleClickPassword = () => {
    setSignin(false)
    setPass(true)
  }

  const handleClosePassword = () => {
    setPass(false)
  }

  const openLogIn = () => {
    setSignup(false),
      setSignin(true)
  }

  const openSignUp = () => {
    setSignin(false),
      setSignup(true)
  }

  const backSignin = () => {
    setPass(false)
    setSignin(true)
  }

  
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123!',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
        router.push('/dashboard');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <div style={{ backgroundColor: "black", width: '100%', height: '100vh' }}>
      <header>
        <div className='fixed'
          style={{ width: '100%', height: '15vh', backgroundColor: 'black', display: 'flex', alignItems: 'center' }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div style={{ display: 'inline-flex' }}>
              <div style={{ marginLeft: '3vw', color: 'white' }}>QuanMed AI</div>
              <div style={{ marginLeft: '3vw', color: 'white' }}>Chemist</div>
              <div style={{ marginLeft: '3vw', color: 'white' }}>For doctors</div>
            </div>
            <div>
              <Link href="#">
                <Button
                  size="large"
                  variant="outlined"
                  style={{ marginRight: '3vw' }}
                  onClick={openDialog}
                >
                  <div style={{ color: 'white', fontFamily: 'Poppins-Regular' }}>My DeMed</div>
                </Button>
              </Link>
            </div>

          </Grid>
        </div>
      </header>

      <Dialog open={dialog}
        onClose={closeDialog}
      >
        <DialogContent style={{ backgroundColor: "black", border: "3px solid #607BCC ", borderRadius: 20 }}>
          <div style={{ textAlign: 'center', color: '#FAFBFC', fontWeight: 400, lineHeight: '40px', fontSize: '34px', marginTop: '30px', marginLeft: '50px', marginRight: '50px', wordWrap: 'break-word' }}>Welcome to<br /> my DeMed</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
            <Button
              size="small"
              variant="outlined"
              sx={{ textTransform: 'uppercase' }}
              style={{ borderRadius: 50, width: '47%' }}
              onClick={handleClickSignUp}
            >
              <div style={{ color: 'white', fontFamily: 'Poppins-Regular' }}>sign up</div>
            </Button>
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: 'uppercase', width: '47%', backgroundColor: '#607BCC' }}
              style={{ borderRadius: 50 }}
              onClick={handleClickSignIn}
            >
              <div style={{ color: 'white', fontFamily: 'Poppins-Regular' }}>sign in</div>
            </Button>

          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button
              fullWidth
              size="small"
              variant="contained"
              sx={{ textTransform: 'uppercase', backgroundColor: '#605F76' }}
              style={{ borderRadius: 50 }}
            // onClick={handleClickSignUp}
            >
              <div style={{ color: 'white', fontFamily: 'Poppins-Regular' }}>continue with wallet</div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={signup}
        onClose={handleCloseSignUp}
        aria-labelledby="form-dialog-title">

        <DialogContent style={{ backgroundColor: "black", border: "3px solid #607BCC ", borderRadius: 20 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '24px', pr: '24px', pt: '10px' }}>
            <DialogTitle id="form-dialog-title"
              style={{ color: 'white', padding: 0, fontSize: 40, fontWeight: '400', fontFamily: 'Poppins-Regular' }}>Sign up</DialogTitle>
            <DialogTitle id="form-dialog-title"
              style={{ color: '#607BCC', padding: 0 }}
              sx={{ textTransform: 'uppercase' }}>
              <div style={{ cursor: 'pointer', fontSize: 14, fontFamily: 'Poppins-Regular' }}
                onClick={openLogIn}>
                log in
              </div>
            </DialogTitle>
          </Box>
          <DialogContentText style={{ color: "#AAA7B2", marginBottom: '20px', paddingLeft: '24px', fontFamily: 'Poppins-Regular' }}>
            Enter your details below
          </DialogContentText>
          <Register />
        </DialogContent>

      </Dialog>

      <Dialog open={signin}
        onClose={handleCloseSignIn}
        aria-labelledby="form-dialog-title">

        <DialogContent style={{ backgroundColor: "black", border: "3px solid #607BCC ", borderRadius: 20, padding: 0 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '48px', pr: '48px', pt: '30px' }}>
            <DialogTitle id="form-dialog-title"
              style={{ color: 'white', padding: 0, fontSize: 40, fontWeight: '400', fontFamily: 'Poppins-Regular' }}>Sign in</DialogTitle>
            <DialogTitle id="form-dialog-title"
              style={{ color: '#607BCC', padding: 0 }}
              sx={{ textTransform: 'uppercase' }}>
              <div style={{ cursor: 'pointer', fontSize: 14, fontFamily: 'Poppins-Regular' }}
                onClick={openSignUp}>
                sign up
              </div>
            </DialogTitle>
          </Box>
          <DialogContentText style={{ color: "#AAA7B2", marginBottom: '20px', paddingLeft: '48px', fontFamily: 'Poppins-Regular' }}>
            Welcome back
          </DialogContentText>
          <>
            <Box
              sx={{
                backgroundColor: 'black',
                flex: '1 1 auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                sx={{
                  maxWidth: 550,
                  px: 6,
                  width: '100%'
                }}
              >
                <div>
                  <form
                    noValidate
                    onSubmit={formik.handleSubmit}
                  >
                    <Stack spacing={2}>
                      <TextField
                        size='medium'
                        sx={{
                          '& input': {
                            color: '#AAA7B2', // Set your desired color here
                          },
                        }}
                        InputProps={{ sx: { borderRadius: 3 } }}
                        error={!!(formik.touched.email && formik.errors.email)}
                        fullWidth
                        helperText={formik.touched.email && formik.errors.email}
                        label="Email Address"
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                      />
                      <TextField
                        sx={{
                          '& input': {
                            color: '#AAA7B2', // Set your desired color here
                          },
                        }}
                        size='medium'
                        InputProps={{ sx: { borderRadius: 3 } }}
                        error={!!(formik.touched.password && formik.errors.password)}
                        fullWidth
                        helperText={formik.touched.password && formik.errors.password}
                        label="Password"
                        name="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="password"
                        value={formik.values.password}
                      />
                      <FlexBox gap={1}>
                        <Checkbox
                          size="small"
                          name="remember"
                          // onChange={handleChange}
                          checked={formik.values.remember}
                          sx={{ padding: 0 }}
                        />

                        <div style={{ color: 'white', fontFamily: 'Poppins-Regular' }}>Keep me logged i</div>
                      </FlexBox>
                    </Stack>

                    {formik.errors.submit && (
                      <Typography
                        color="error"
                        sx={{ mt: 1 }}
                        variant="body2"
                      >
                        {formik.errors.submit}
                      </Typography>
                    )}
                    <Button
                      fullWidth
                      size="small"
                      sx={{ mt: 2, textTransform: 'uppercase', mb: 1, borderRadius: 10, backgroundColor: '#607BCC', fontFamily: 'Poppins-Regular' }}
                      type="submit"
                      variant="contained"
                    >
                      log in
                    </Button>
                    <Button
                      fullWidth
                      size="small"
                      sx={{ mt: 2, textTransform: 'uppercase', mb: 1, borderRadius: 10, backgroundColor: '#605F76', fontFamily: 'Poppins-Regular' }}
                      type="submit"
                      variant="contained"
                    >
                      continue with wallet
                    </Button>
                    <a onClick={handleClickPassword}
                      style={{ color: '#607BCC', cursor: 'pointer', fontFamily: 'Poppins-Regular' }}>
                      FORGOT PASSWORD?
                    </a>
                  </form>
                </div>
              </Box>
            </Box>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ border: '1px solid #AAA7B2', width: '50%' }} />
              <span style={{ color: 'white', marginLeft: 5, marginRight: 5, fontFamily: 'Poppins-Regular' }}>or</span>
              <div style={{ border: '1px solid #AAA7B2', width: '50%' }} />
            </div>
            <Box sx={{ flex: '1 1 auto', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ maxWidth: 550, px: 6, width: '100%' }}>
                <Button
                  fullWidth
                  size="small"
                  sx={{ mt: 1, mb: 2, color: 'white', borderRadius: 10 }}
                  // type="submit"
                  variant="outlined"
                  onClick={ async (e) => {
                    signIn("facebook")
                  }}
                >
                  <div style={{ textDecoration:"none", color: "white", fontSize: 16, display:'flex', alignItems:'center' }}>
                    <img src='/fb.png'
                      style={{ marginRight: '8px', width: '15px', height: '20px' }} />
                    <div style={{ fontFamily: 'Poppins-Regular' }}>
                      Sign in with Facebook
                    </div>

                  </div>

                </Button>
                <Button
                  fullWidth
                  size="small"
                  sx={{ mb: 2, color: 'white', borderRadius: 10 }}
                  // type="submit"
                  variant="outlined"
                  onClick={ async (e) => {
                    window.open("http://localhost:4000/api/auth/twitter", "_self")
                  }}
                >
                  <div style={{ textDecoration: "none", color: "white", fontSize: 16, display:'flex', alignItems:'center' }}>
                    <img src='/tw.png'
                      style={{ marginRight: '8px', width:'15px', height: '20px' }} />
                    <div style={{ fontFamily: 'Poppins-Regular' }}>
                      Sign in with Twitter
                    </div>

                  </div>
                </Button>
              </Box>
            </Box>
          </>

        </DialogContent>
      </Dialog>
      <Dialog open={pass}
        onClose={handleClosePassword}
        aria-labelledby="form-dialog-title"
      >

        <DialogContent style={{ backgroundColor: "black", border: "3px solid #607BCC ", borderRadius: 20 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', pl: '24px', pr: '24px', pt: '10px' }}>
            <DialogTitle id="form-dialog-title"
              style={{ color: 'white', padding: 0, fontSize: '30px', fontWeight: '400', fontFamily: 'Poppins-Regular' }}>Password reset</DialogTitle>
            <DialogTitle id="form-dialog-title"
              style={{ color: '#607BCC', padding: 0, fontSize: 14 }}
              sx={{ textTransform: 'uppercase' }}>
              <div style={{ cursor: 'pointer', fontSize: 14, fontFamily: 'Poppins-Regular' }}
                onClick={backSignin}>
                back
              </div>
            </DialogTitle>
          </Box>
          <DialogContentText sx={{ color: "#AAA7B2", mb: '23px', mt: '23px', pl: '24px', fontFamily: 'Poppins-Regular' }}>
            We will help you reset it and get back on track.
          </DialogContentText>
          <ResetPassword />
        </DialogContent>

      </Dialog>
    </div >
  )
}

export default Home