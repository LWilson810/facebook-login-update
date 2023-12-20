import PropTypes from 'prop-types';
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  Stack,
  Grid,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { Chart } from 'src/components/chart';

const useChartOptions = () => {
  const theme = useTheme();

  return {
    colors : ['#8F8F8F','rgba(96, 123, 204)','rgba(294, 120, 235)'],
    chart: {
      background: 'transparent',
      stacked: true,
      toolbar: {
        show: true
      }
    },
    // colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    grid: {
      // borderColor: theme.palette.divider,
      // strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    legend: {
      show: true
    },
    plotOptions: {
      bar: {
        columnWidth: '15px'
      }
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2
    },
    theme: {
      mode: theme.palette.mode
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true
      },
      axisTicks: {
        color: theme.palette.divider,
        show: false
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      labels: {
        offsetY: 0,
        
        style: {
          colors: theme.palette.text.secondary
        }
      }
    },
    yaxis: {
      labels: {
        formatter: (value) => (value > 0 ? `${value}%` : `${value}`),
        
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary
        }
      }
    }
  };
};

export const OverviewStatistic = (props) => {
  const { chartSeries, sx } = props;
  const chartOptions = useChartOptions();
  const [age, setAge] = useState('1');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card sx={sx}>
      <CardContent sx = {{width:"95%", marginLeft:"2.5%"}}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          style={{marginBottom:"20px"}}
        //  sx={{ mt: 2 }}
        >
          <Grid alignItems="center" direction="row" spacing={1}>
            <Stack><h2 style={{color: 'white',margin:'0px',letterSpacing:"1px", wordSpacing:'2px',fontFamily:"Poppins-Regular"}}>Statistics of your disease</h2></Stack>
            <Stack direction="row" justifyContent="space-between">
              <Grid><p style={{margin:'0px',color:"#8F8F8F"}}>Fever</p></Grid>
              <Grid><p style={{margin:'0px', color:"#607BCC"}}>cough</p></Grid>
              <Grid><p style={{margin:'0px', color:'#C292EB'}}>Heart Burn</p></Grid>
            </Stack>
          </Grid>
          <Grid alignItems="center" direction="row" spacing={3}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              {/* <InputLabel id="demo-simple-select-autowidth-label">Activity</InputLabel> */}
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                // label="Activity"
                sx={{ color: 'white', height: '40px',fontFamily:'Poppins-Regular' }}
              >
                <MenuItem value={1}>Month</MenuItem>
                <MenuItem value={10}>part1</MenuItem>
                <MenuItem value={21}>part2</MenuItem>
                <MenuItem value={22}>part3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Stack>
        <Chart
          height={300}
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="100%"
          marginTop="30px "
        />
      </CardContent>
      {/* <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
        >
          Overview
        </Button>
      </CardActions> */}
    </Card>
  );
};

OverviewStatistic.protoTypes = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object
};
