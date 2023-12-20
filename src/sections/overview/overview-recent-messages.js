import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
  Grid
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import { Container } from '@mui/system';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OverviewRecentMessages = (props) => {
  const { orders = [], sx } = props;

  return (
    <Card sx={sx} >
      <Container sx={{ py: 3 }}>
        <Stack alignItems="center" direction="row" spacing={3}>
          <h2 style={{ color: 'white' }}>Recent data requests messages</h2>
        </Stack>
        <Scrollbar sx={{ flexGrow: 1 }}>
          <Box sx={{ minWidth: 800, marginTop: '10px'}}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ background: 'transparent', color: '#475D96',fontFamily:'Poppins-Regular' }}>
                    <h3>Company Name</h3>
                  </TableCell>
                  <TableCell style={{ background: 'transparent', color: '#475D96',fontFamily:'Poppins-Regular'}}>
                    <h3>Date</h3>
                  </TableCell>
                  <TableCell sortDirection="desc" style={{ background: 'transparent', color: '#475D96' ,fontFamily:'Poppins-Regular'}}>
                    <h3>Amount</h3>
                  </TableCell>
                  <TableCell style={{ background: 'transparent', color: '#475D96',fontFamily:'Poppins-Regular' }}>
                    <h3>Date</h3>
                  </TableCell>
                  <TableCell style={{ background: 'transparent', color: '#475D96' ,fontFamily:'Poppins-Regular'}}>
                    <h3>Paid By</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {orders.map((order) => {
                  // const createdAt = format(order.createdAt, 'dd/MM/yyyy');

                  return (
                    <TableRow
                      hover
                      key={order.id}
                    >
                      <TableCell style={{ border: 'none',padding:'0px' }}>
                        <Stack alignItems="center" direction="row" spacing={3}>
                          <Grid sx={{ width: '45px', height: '45px', backgroundColor: '#1B1C31', borderRadius: '7px', alignItems: 'center' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "10px" }} width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M9 13V21" stroke="#C292EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M21 8V21" stroke="#C292EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M15 3V21" stroke="#C292EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M3 8V21" stroke="#C292EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </Grid>
                          <Grid>
                            <Stack>
                              <h3 style={{ color: 'white', margin: '0px',padding:'0px',fontFamily:'Poppins-Regular' }}>{order.cName}</h3>
                            </Stack>
                            <Stack>
                              <h4 style={{ color: '#475D96', margin: '0px',padding:'0px' ,fontFamily:'Poppins-Regular'}}>{order.country}</h4>
                            </Stack>
                          </Grid>
                        </Stack>
                      </TableCell>
                      <TableCell style={{ color: '#475D96',border: 'none',padding:'0px' ,fontFamily:'Poppins-Regular'}}>
                        <h4 style={{margin:'10px',fontFamily:'Poppins-Regular'}}>{order.date}</h4>
                      </TableCell>
                      <TableCell style={{color:'white', border: 'none' }}>
                        <h4 style={{margin:'10px',fontFamily:'Poppins-Regular'}}>{order.amount}</h4>
                      </TableCell>
                      <TableCell style={{ color: '#475D96', border: 'none' }}>
                        <h4 style={{margin:'10px',fontFamily:'Poppins-Regular'}}>{order.date1}</h4>
                      </TableCell>
                      <TableCell style={{ color: '#475D96', border: 'none' }}>
                        <h4 style={{margin:'10px',fontFamily:'Poppins-Regular'}}>{order.paid}</h4>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Box>
        </Scrollbar>
        {/* <Divider /> */}
        {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
        
      </CardActions> */}
      </Container>
    </Card>
  );
};

OverviewRecentMessages.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
