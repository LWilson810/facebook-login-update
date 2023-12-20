import PropTypes from 'prop-types';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
  Grid,
  Button,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Chart } from 'src/components/chart';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

export const Appoinment = (props) => {
  const { sx } = props;
  const [age, setAge] = useState('1');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
        // sx={{ mt: 2 }}
        >
          <Stack alignItems="center" direction="row" spacing={3}>
            <h2 style={{ color: 'white' }}>Appoinments</h2>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={3}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              {/* <InputLabel id="demo-simple-select-autowidth-label">Activity</InputLabel> */}
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                // label="Activity"
                sx={{ color: 'white', height: '40px',fontFamily:'Poppins-Regular'  }}
              >
                <MenuItem value={1}>Create new</MenuItem>
                <MenuItem value={10}>part1</MenuItem>
                <MenuItem value={21}>part2</MenuItem>
                <MenuItem value={22}>part3</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
        <Stack alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginTop: '20px' }}
        >
          <Stack alignItems="center" direction="row" spacing={3}>
            <Grid sx={{ width: '50px', backgroundColor: '#1B1C31', borderRadius: '7px' }}>
              <Stack alignItems="center">
                <h5 style={{ color: '#C292EB', margin: '2px' }}>Mon</h5>
              </Stack>
              <Stack alignItems="center">
                <h6 style={{ color: 'white', margin: '2px' }}>10</h6>
              </Stack>
            </Grid>
            <Grid>
              <Stack>
                <p style={{ margin: '0px', color: 'white', fontSize: '15px' }}>Dr Cameron</p>
              </Stack>
              <Stack>
                <p style={{ margin: '0px', color: '#8F8F8F' }}>9 am - 11.30 am</p>
              </Stack>
            </Grid>

          </Stack>
          <Stack alignItems="center" direction="row" spacing={3}>
            <Grid sx={{ color:'white',width: '30px',height:'40px', backgroundColor: '#1B1C31', borderRadius: '7px',paddingTop:'7px',paddingLeft:'2px' }}>
              <MoreVertIcon></MoreVertIcon>
            </Grid>
          </Stack>
        </Stack>

        <Stack alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginTop: '20px' }}
        >
          <Stack alignItems="center" direction="row" spacing={3}>
            <Grid sx={{ width: '50px', backgroundColor: '#1B1C31', borderRadius: '7px' }}>
              <Stack alignItems="center">
                <h5 style={{ color: '#C292EB', margin: '2px' }}>Sat</h5>
              </Stack>
              <Stack alignItems="center">
                <h6 style={{ color: 'white', margin: '2px' }}>8</h6>
              </Stack>
            </Grid>
            <Grid>
              <Stack>
                <p style={{ margin: '0px', color: 'white', fontSize: '15px' }}>Dr Sara Doe</p>
              </Stack>
              <Stack>
                <p style={{ margin: '0px', color: '#8F8F8F' }}>9 am - 11.30 am</p>
              </Stack>
            </Grid>

          </Stack>
          <Stack alignItems="center" direction="row" spacing={3}>
            <Grid sx={{ color:'white',width: '30px',height:'40px', backgroundColor: '#1B1C31', borderRadius: '7px',paddingTop:'7px',paddingLeft:'2px' }}>
              <MoreVertIcon></MoreVertIcon>
            </Grid>
          </Stack>
        </Stack>

        <Stack alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginTop: '20px' }}
        >
          <Stack alignItems="center" direction="row" spacing={3}>
            <Grid sx={{ width: '50px', backgroundColor: '#1B1C31', borderRadius: '7px' }}>
              <Stack alignItems="center">
                <h5 style={{ color: '#C292EB', margin: '2px' }}>Tus</h5>
              </Stack>
              <Stack alignItems="center">
                <h6 style={{ color: 'white', margin: '2px' }}>8</h6>
              </Stack>
            </Grid>
            <Grid>
              <Stack>
                <p style={{ margin: '0px', color: 'white', fontSize: '15px' }}>Dr Robert</p>
              </Stack>
              <Stack>
                <p style={{ margin: '0px', color: '#8F8F8F' }}>9 am - 11.30 am</p>
              </Stack>
            </Grid>

          </Stack>
          <Stack alignItems="center" direction="row" spacing={3}>
            <Grid sx={{ color:'white',width: '30px',height:'40px', backgroundColor: '#1B1C31', borderRadius: '7px',paddingTop:'7px',paddingLeft:'2px' }}>
              <MoreVertIcon></MoreVertIcon>
            </Grid>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

Appoinment.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object
};
