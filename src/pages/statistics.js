import Head from "next/head";
import React, { useState } from 'react'
import {
    Box,
    Button,
    Grid,
    Paper,
    styled,
    Input,
    MenuItem,
    FormControl,
    Select,
    IconButton,
    SvgIcon
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import DoughnutChart from "../components/echart";
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#141B22",
    ...theme.typography.body2,
    padding: theme.spacing(4),
    // textAlign: 'center',
    color: "white",
    width: "auto",
    height: "380px",
    fontSize: 16,
}));

const ariaLabel = { 'aria-label': 'description' };

const Page = () => {

    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')

    const handleChange1 = (event) => {
        setType1(event.target.value);
    };
    const handleChange2 = (event) => {
        setType2(event.target.value);
    };

    return (
        <>
            <Head>
                <title>Statistics | Quanmed AI</title>
            </Head>
            <Box sx={{ width: "100%", p: "25px", backgroundColor: 'black' }}>
                <Grid container
                    // item
                    lg={12}
                    style={{ margin: '20px 0', paddingLeft: '40px', fontSize: '36px', fontWeight: '700', color: '#F5F5F7', backgroundColor: 'black', fontFamily: 'Poppins-Bold' }}>
                    Statistics
                </Grid>
                <Grid container
                    rowSpacing={5}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                    <Grid item
                        xs={12}
                        lg={6}
                    >
                        <Item>
                            <div style={{ fontSize: 20, fontFamily: 'Poppins-Regular', fontWeight: 600 }}>Assets</div>
                            <DoughnutChart
                                height="250px"
                                color={[
                                    '#C292EB',
                                    '#99EDF9',
                                    '#3966EF',
                                    '#607BCC'
                                ]}
                            />
                        </Item>
                    </Grid>
                    <Grid item
                        xs={12}
                        lg={6}>
                        <Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                                <div style={{ fontSize: 20, fontFamily: 'Poppins-Regular', fontWeight: 600 }}>Convert</div>
                                <img src="/Dots.png"
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                            <div style={{ backgroundColor: "rgb(14,19,24)", width: 'auto', height: '70px', borderRadius: 7, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 17, paddingRight: 7, marginBottom: 20 }}>
                                <div>
                                    <Input
                                        defaultValue="100"
                                        inputProps={ariaLabel}
                                        sx={{ color: '#626D7D', fontSize: 14 }}
                                    />
                                </div>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 62 }}>
                                        <Select
                                            value={type1}
                                            onChange={handleChange1}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            size="small"
                                            sx={{ color: '#607BCC', fontFamily: 'Poppins-Regular' }}
                                        >
                                            <MenuItem value="">
                                                USDT
                                            </MenuItem>
                                            <MenuItem value={10}>VHA</MenuItem>
                                            <MenuItem value={20}>ETH</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div style={{ backgroundColor: 'rgb(14,19,24)', width: 'auto', height: '70px', borderRadius: 7, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 17, paddingRight: 7, marginBottom: 20 }}>
                                <div>
                                    <Input
                                        defaultValue="5"
                                        inputProps={ariaLabel}
                                        sx={{ color: '#626D7D', fontSize: 14 }}
                                    />
                                </div>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 62 }}>
                                        <Select
                                            value={type2}
                                            onChange={handleChange2}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            size="small"
                                            sx={{ color: '#C292EB', fontFamily: 'Poppins-Regular' }}
                                        >
                                            <MenuItem value="">
                                                VHA
                                            </MenuItem>
                                            <MenuItem value={10}>USDT</MenuItem>
                                            <MenuItem value={20}>ETH</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <Button
                                size="small"
                                fullWidth
                                variant="outlined"
                                sx={{ backgroundcolor: '#626D7D', borderColor: 'white', color: 'white', mb: 1, fontSize: 18, fontFamily: 'Poppins-Regular' }}
                            >
                                Convert Now
                            </Button>
                            <div style={{ color: '#626D7D', fontSize: 16, fontFamily: 'Poppins-Regular' }}>
                                The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.
                            </div>
                        </Item>
                    </Grid>
                    <Grid item
                        xs={12}>
                        <Item>
                            <div style={{ marginBottom: 20, fontSize: 20, fontFamily: 'Poppins-Regular', fontWeight: 600 }}>History</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div>
                                    <img src="/down.png"
                                        width='30px'
                                        height='30px' />
                                </div>
                                <div style={{ fontFamily: 'Poppins-Regular' }}>
                                    SOL
                                </div>
                                <div style={{ color: '#607BCC', fontFamily: 'Poppins-Regular' }}>
                                    +$23,738
                                </div>
                                <div style={{ fontFamily: 'Poppins-Regular' }}>11:34 PM</div>
                                <div style={{ color: '#99EDF9', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6, width: '100px', height: 'auto', backgroundColor: 'rgb(89,137,145)', fontFamily: 'Poppins-Regular' }}>
                                    pending
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div>
                                    <img src="/up.png"
                                        width='30px'
                                        height='30px' />
                                </div>
                                <div style={{ fontFamily: 'Poppins-Regular' }}>
                                    SANDUSDT
                                </div>
                                <div style={{ color: '#99EDF9', fontFamily: 'Poppins-Regular' }}>
                                    -$576
                                </div>
                                <div style={{ fontFamily: 'Poppins-Regular' }}>06:01 AM</div>
                                <div style={{ color: '#607BCC', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6, width: '100px', height: 'auto', backgroundColor: 'rgb(49,64,102)', fontFamily: 'Poppins-Regular' }}>
                                    Success
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div>
                                    <img src="/down.png"
                                        width='30px'
                                        height='30px' />
                                </div>
                                <div style={{ fontFamily: 'Poppins-Regular', fontFamily: 'Poppins-Regular' }}>
                                    VHA TOKEN
                                </div>
                                <div style={{ color: '#607BCC', fontFamily: 'Poppins-Regular' }}>
                                    +$3500
                                </div>
                                <div style={{ fontFamily: 'Poppins-Regular' }}>02:10 AM</div>
                                <div style={{ color: '#607BCC', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6, width: '100px', height: 'auto', backgroundColor: 'rgb(49,64,102)', fontFamily: 'Poppins-Regular' }}>
                                    Success
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div>
                                    <img src="/up.png"
                                        width='30px'
                                        height='30px' />
                                </div>
                                <div style={{ fontFamily: 'Poppins-Regular' }}>
                                    FTMUSDT
                                </div>
                                <div style={{ color: '#607BCC', fontFamily: 'Poppins-Regular' }}>
                                    +$791
                                </div>
                                <div style={{ fontFamily: 'Poppins-Regular' }}>06:45 PM</div>
                                <div style={{ color: '#607BCC', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 6, width: '100px', height: 'auto', backgroundColor: 'rgb(49,64,102)', fontFamily: 'Poppins-Regular' }}>
                                    Success
                                </div>
                            </div>

                        </Item>
                    </Grid>
                    <Grid item
                        xs={12}
                        lg={6}
                    >
                        <Item>
                            <div style={{ marginBottom: 20, fontSize: 20, fontFamily: 'Poppins-Regular', fontWeight: 600 }}>Recent Appointments</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div style={{ color: '#607BCC', fontFamily: 'Poppins-Regular' }}>Orders</div>
                                <div style={{ color: '#607BCC', marginRight: '3vw', fontFamily: 'Poppins-Regular' }}>Amount</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div style={{ width: 50, height: 50, backgroundColor: 'rgb(96,123,204)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src="/btc.png"
                                        width='40'
                                        height='40' />
                                </div>
                                <div style={{ width: 250, height: 50, paddingLeft: 30 }}>
                                    <div style={{ height: 30, fontFamily: 'Poppins-Regular' }}>Dr Theresa Web</div>
                                    <div style={{ height: 30, fontSize: 14, color: '#607BCC', fontFamily: 'Poppins-Regular' }}>2 Minutes ago</div>

                                </div>
                                <div style={{ width: 150, height: 50, borderRadius: 8, color: 'rgb(89,137,145)', border: '1px solid #607BCC ', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins-Regular' }}>
                                    $65.00
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div style={{ width: 50, height: 50, backgroundColor: 'rgb(194,146,235)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src="/eth.png"
                                        width='40'
                                        height='40' />
                                </div>
                                <div style={{ width: 250, height: 50, paddingLeft: 30 }}>
                                    <div style={{ height: 30, fontFamily: 'Poppins-Regular' }}>Dr Esther Cooper</div>
                                    <div style={{ height: 30, fontSize: 14, color: '#607BCC', fontFamily: 'Poppins-Regular' }}>2 Minutes ago</div>

                                </div>
                                <div style={{ width: 150, height: 50, borderRadius: 8, color: 'rgb(89,137,145)', border: '1px solid #607BCC ', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins-Regular' }}>
                                    $85.00
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: 50, height: 50, backgroundColor: 'rgb(89,137,145)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <img src="/btc.png"
                                        width='40'
                                        height='40' />
                                </div>
                                <div style={{ width: 250, height: 50, paddingLeft: 30 }}>
                                    <div style={{ height: 30, fontFamily: 'Poppins-Regular' }}>Dr Floyd Web</div>
                                    <div style={{ height: 30, fontSize: 14, color: '#607BCC', fontFamily: 'Poppins-Regular' }}>2 Minutes ago</div>

                                </div>
                                <div style={{ width: 150, height: 50, borderRadius: 8, color: 'rgb(89,137,145)', border: '1px solid #607BCC ', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins-Regular' }}>
                                    $75.00
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item
                        xs={12}
                        lg={6}
                    >
                        <Item>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <div style={{ fontSize: 20, fontFamily: 'Poppins-Regular', fontWeight: 600 }}>
                                    Data Analysis
                                </div>
                                <div>
                                    <IconButton edge="end">
                                        <SvgIcon>
                                            <EllipsisVerticalIcon />
                                        </SvgIcon>
                                    </IconButton>
                                </div>

                            </div>
                            <div style={{ color: '#607BCC', fontFamily: 'Poppins-Regular' }}>Last Week</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-around', marginBottom: 20 }}>
                                <div style={{ width: '35px', height: '110px', background: 'linear-gradient(180deg, #607BCC 0%, rgba(96, 123, 204, 0.04) 100%)', borderRadius: 24.10 }} />
                                <div style={{ width: '35px', height: '140px', background: 'linear-gradient(180deg, #607BCC 0%, rgba(96, 123, 204, 0.04) 100%)', borderRadius: 24.10 }} />
                                <div style={{ width: '35px', height: '120px', background: 'linear-gradient(180deg, #607BCC 0%, rgba(96, 123, 204, 0.04) 100%)', borderRadius: 24.10 }} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Poppins-Regular' }}>150</div>
                                    <div style={{ color: '#607BCC', display: 'flex', justifyContent: 'center', fontFamily: 'Poppins-Regular' }}>Bank Account</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Poppins-Regular' }}>350</div>
                                    <div style={{ color: '#607BCC', display: 'flex', justifyContent: 'center', fontFamily: 'Poppins-Regular' }}>VHA Token</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Poppins-Regular' }}>2510</div>
                                    <div style={{ color: '#607BCC', display: 'flex', justifyContent: 'center', fontFamily: 'Poppins-Regular' }}>Credit Card</div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
