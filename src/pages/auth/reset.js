import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  styled,
  Checkbox
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const ResetPassword = () => {
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState('email');
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email);
        router.push('/dashboard');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
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
            px: 3,
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
                  sx={{
                    '& input': {
                      color: '#AAA7B2', // Set your desired color here
                    }
                    , fontFamily:'Poppins-Regular'
                  }}

                  InputProps={{ sx: { borderRadius: 3 } }}
                  size='medium'
                  // style={{borderRadius:"50px" !important}}
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

                <FlexBox gap={1}>
                  <Checkbox
                    size="small"
                    name="remember"
                    // onChange={handleChange}
                    checked={formik.values.remember}
                    sx={{ padding: 0 }}
                  />

                  <div style={{ color: 'white', fontFamily:'Poppins-Regular' }}>Keep me logged in</div>
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
                sx={{ mt: 2, textTransform: 'uppercase', backgroundColor: '#607BCC', borderRadius: 10, fontFamily:'Poppins-Regular' }}
                type="submit"
                variant="contained"
              >
                reset password
              </Button>

            </form>

          </div>
        </Box>
      </Box>
    </>
  );
};



export default ResetPassword;
