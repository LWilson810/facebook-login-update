import Head from 'next/head';
// import { subDays, subHours } from 'date-fns';
import { Stack,Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Appoinment } from '../sections/overview/appoinments.js';
import { OverviewRecentMessages } from 'src/sections/overview/overview-recent-messages';
import { OverviewStatistic } from 'src/sections/overview/overview-statistic.js';
// import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
// import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
// import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewActivity } from 'src/sections/overview/overview-activity';
import { options } from './api/auth/[...nextauth].js';
import { getServerSession } from "next-auth"

const now = new Date();

const Page = async () => {

  console.log(await getServerSession(options))

  return (
    <>
      <Head>
        <title>
          Overview | QuanMed
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          backgroundColor:'black',
          paddingTop:'30px'
        }}
      >
        <Container maxWidth="xl">
          <Stack>
            <h1 style={{color:'cornflowerblue',margin:'0px',fontFamily:" Poppins-Bold"}}>My DeMed Dashboard</h1>
          </Stack>
          <Stack>
            <h3 style={{color:'white'}}>Welcome to the feature: Decentralized medicine</h3>
          </Stack>
          <Grid
            container
            spacing={3}
            sx={{marginTop:'30px'}}
          >
            <Grid
              xs={48}
              sm={24}
              lg={12}
            >
              <OverviewStatistic
                chartSeries={[
                  {
                    name: 'This year',
                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                  },
                  {
                    name: 'Last year',
                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                  },
                  {
                    name: 'Last year',
                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                  }
                ]}
                sx={{ height: '100%',backgroundColor:'rgba(20, 27, 34, 0.70)' }}
              />
            </Grid>
  
            <Grid
              xs={48}
              md={7}
              lg={7}
            >
              <OverviewActivity
                sx={{ height: '100%',backgroundColor:'rgba(20, 27, 34, 0.70)'}}
              />
            </Grid>
            <Grid
              xs={48}
              md={5}
              lg={5}
            >
              <Appoinment
               
                sx={{ height: '100%',backgroundColor:'rgba(20, 27, 34, 0.70)'}}
              />
            </Grid>
            <Grid
              xs={48}
              md={24}
              lg={12}
            >
              <OverviewRecentMessages
               orders={[
                  {
                    cName: 'Sikago & Sons',
                    country: 'UK',
                    date: "10 Jan 2014",
                    amount: '$234.43',
                    date1: "10 Jan 2014",
                    paid: 'QMD Token'
                  },
                  {
                    cName: 'Fast & Tracks',
                    country: 'UK',
                    date: "10 Jan 2014",
                    amount: '$234.43',
                    date1: "10 Jan 2014",
                    paid: 'QMD Token'
                  },
                  {
                    cName: 'Fanish & company',
                    country: 'UK',
                    date: "10 Jan 2014",
                    amount: '$234.43',
                    date1: "10 Jan 2014",
                    paid: 'QMD Token'
                  },
                 
                ]}
                sx={{ height: '100%',backgroundColor:'rgba(20, 27, 34, 0.70)'}}
              />
            </Grid>
          </Grid> 
        </Container>
      </Box>
    </>
  );
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
