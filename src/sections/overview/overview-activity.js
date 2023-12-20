import PropTypes from 'prop-types';
import { useState } from 'react';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import DeviceTabletIcon from '@heroicons/react/24/solid/DeviceTabletIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
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

export const OverviewActivity = (props) => {
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
            <h2 style={{ color: 'white'}}>Activity Feed</h2>
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
                sx={{ color: 'white', height: '40px',fontFamily:'Poppins-Regular'}}
              >
                <MenuItem value={1}>All Activity</MenuItem>
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
            <Grid>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="rgba(194, 146, 235, 0.62)" />
                <circle cx="16" cy="16" r="15.75" stroke="rgba(194, 146, 235, 0.62)" stroke-width="0.5" />
              </svg>
            </Grid>
            <Grid>
              <Stack>
                <p style={{ margin: '0px', color: 'white', fontSize: '15px' }}>You have been given medication of heart burn</p>
              </Stack>
              <Stack>
                <p style={{ margin: '0px', color: '#8F8F8F' }}>10 mins ago</p>
              </Stack>
            </Grid>

          </Stack>
          <Stack alignItems="center" direction="row" spacing={3}>
            <Button style={{ color: '#607BCC', border: '1px solid', padding: '6px',fontFamily:'Poppins-Regular' }}>Applying</Button>
          </Stack>
        </Stack>
        
        <Stack alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginTop: '20px' }}
        >
          <Stack alignItems="center" direction="row" spacing={3}>
            <Grid>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#607BCC" />
                <circle cx="16" cy="16" r="15.75" stroke="#607BCC" stroke-width="0.5" />
              </svg>
            </Grid>
            <Grid>
              <Stack>
                <p style={{ margin: '0px', color: 'white', fontSize: '15px' }}>You have been given medication of heart burn</p>
              </Stack>
              <Stack>
                <p style={{ margin: '0px', color: '#8F8F8F' }}>10 mins ago</p>
              </Stack>
            </Grid>

          </Stack>
          <Stack alignItems="center" direction="row" spacing={3}>
            <Button style={{ color: '#C292EB', border: '1px solid', padding: '6px',fontFamily:'Poppins-Regular'  }}>Completed</Button>
          </Stack>
        </Stack>

        <Stack alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginTop: '20px' }}
        >
          <Stack alignItems="center" direction="row" spacing={3}>
            <Grid>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#607BCC" />
                <circle cx="16" cy="16" r="15.75" stroke="#607BCC" stroke-width="0.5" />
              </svg>
            </Grid>
            <Grid>
              <Stack>
                <p style={{ margin: '0px', color: 'white', fontSize: '15px' }}>You have been given medication of heart burn</p>
              </Stack>
              <Stack>
                <p style={{ margin: '0px', color: '#8F8F8F' }}>10 mins ago</p>
              </Stack>
            </Grid>

          </Stack>
          <Stack alignItems="center" direction="row" spacing={3}>
            <Button style={{ color: '#C292EB', border: '1px solid', padding: '6px',fontFamily:'Poppins-Regular'  }}>Completed</Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewActivity.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  sx: PropTypes.object
};
