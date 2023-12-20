import Head from "next/head";
import React, { useState } from 'react'
import {
    Box,
    Button,
    Grid,
    Paper,
    styled,
    Stack,
    useTheme,
    Input,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    Select,
    List,
    ListItem,
    ListItemText
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import DoughnutChart from "../components/echart";
import ConnectionTicket from "../components/connectionticket";
import LineChart from "../components/linecharts";

import { borderBottomColor, fontSize } from "@mui/system";
const Item = styled(Paper)(({ theme }) => ({

    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: "#141B22",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    // textAlign: 'center',
    color: "white",
    width: "auto",
    height: "150px",
    fontSize: 20,
    fontFamily: 'Poppins-Regular'
}));
const Item1 = styled(Paper)(({ theme }) => ({

    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: "#141B22",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    // textAlign: 'center',
    color: "white",
    width: "auto",
    height: "auto",
    fontSize: 20,
    fontFamily: 'Poppins-Regular'
}));
// Example data
const data = [
    { year: '2015', value: 10 },
    { year: '2016', value: 20 },
    { year: '2017', value: 15 },
    // ...
];


const Page = () => {

    const [type1, setType1] = useState('')
    const [type2, setType2] = useState('')

    const handleChange1 = (event) => {
        setType1(event.target.value);
    };
    const handleChange2 = (event) => {
        setType2(event.target.value);
    };
    const theme = useTheme();
    return (
        <>
            <Head>
                <title>Rewards | Quanmed AI</title>
            </Head>
            <Box sx={{ width: "100%", p: "20px", background: 'black' }}>
                <Grid container
                    style={{ margin: '30px 20px', fontSize: '36px', fontWeight: '700', color: '#F5F5F7', backgroundColor: 'black', fontFamily: 'Poppins-Bold' }}>
                    Your Rewards
                </Grid>
                <Grid container
                    spacing={0}
                    style={{ marginLeft: '20px' }}
                >
                    <Grid xs={11}
                        md={6}
                        item
                        container >
                        <Grid sm={5.5}
                            xs={12}
                            style={{ height: '165px'}}>
                            <Item>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ color: '#607BCC', height: '50px', display: 'flex' }}>
                                        <div style={{ marginBottom: 5, color: '#D9D9D9', fontSize: '16px', fontFamily: 'Poppins-Regular' }}>QWD Token Balance</div>
                                    </div>
                                    <div style={{ marginRight: 2, marginTop: 6 }}><img src="/DotsVerticalOutline.svg"></img></div>
                                </div>
                                <div style={{ marginBottom: 5, color: 'white', fontSize: '24.6px', fontWeight: '600', fontFamily: 'Poppins-Regular' }}>$21,500.00</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <div style={{ color: '#607BCC', height: '50px', display: 'flex' }}>
                                        <img src="/ArrowNarrowRight.png"
                                            width={15}
                                            height={16} />
                                        <div style={{ marginLeft: '10px' }}>
                                            <span style={{ display: 'block', color: '#F5F5F7', fontSize: '13px', fontFamily: 'Poppins-Regular' }}>12%</span>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid xs={1}
                            style={{ height: '0' }}></Grid>
                        <Grid sm={5.5}
                            xs={12}
                            style={{ height: '165px' }}>
                            <Item>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ color: '#607BCC', height: '50px', display: 'flex' }}>
                                        <div style={{ textAlign: 'center', marginBottom: 5, color: '#D9D9D9', fontSize: '16px' }}>Spending on QMD</div>
                                    </div>
                                    <div style={{ marginRight: 2, marginTop: 6 }}><img src="/DotsVerticalOutline.svg"></img></div>
                                </div>
                                <div style={{ marginBottom: 5, color: 'white', fontSize: '24.6px', fontWeight: '600' }}>$5,392.00</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                    <div style={{ color: '#607BCC', height: '50px', display: 'flex' }}>
                                        <img src="/ArrowNarrowRight.svg"
                                            width={15}
                                            height={16} />
                                        <div style={{ marginLeft: '10px' }}>
                                            <span style={{ display: 'block', color: '#F5F5F7', fontSize: '13px' }}>8%</span>
                                        </div>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid xs={12}
                            style={{ marginTop: '40px' }}>
                            <Grid
                                sx={{
                                    // margin: theme.breakpoints.down('xs') ? 2 : 4,
                                    [theme.breakpoints.up('md')]: {
                                        marginTop: -26,
                                    },
                                }}
                                style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Grid style={{ color: '#607BCC', height: '50px', display: 'flex' }}>
                                    <Grid style={{ marginBottom: 5, color: 'white', fontSize: '25px', fontWeight: '600', fontFamily: 'Poppins-Regular' }}>Wallet report</Grid>
                                </Grid>
                                <Grid container
                                    style={{  marginTop: 6, borderRadius: '11.184px', height: '48px', width: '229px', background: '#222338' }}>
                                    <Grid xs={6}
                                        style={{ alignItems: 'center', display: 'flex', justifyItems: 'center', borderRadius: '15.03px', border: '0.939px solid #607BCC', padding: '3.758px 15.03px', color: 'white', width: '123px', height: '42px', marginTop: '3px', fontSize: '12px', fontFamily: 'Poppins-Regular' }}>QMD TOKEN</Grid>
                                    <Grid xs={6}
                                        style={{ display: 'flex', alignItems: 'center', padding: '3.758px 15.03px', color: '#FAFBFC', width: '123px', height: '42px', marginTop: '3px', fontSize: '12px', fontFamily: 'Poppins-Regular' }}>Actual Balance</Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            sx={{
                                margin: theme.breakpoints.down('xs') ? 2 : 4,
                                [theme.breakpoints.up('md')]: {
                                    marginTop: -35,
                                },
                            }}
                            container
                            xs={10}
                            md={6}
                            style={{ marginTop: '', height: '60px' }}>
                            <Grid xs={3.5}
                                style={{ color: '#FAFBFC', fontSize: '14px', fontWeight: '500', justifyContent: 'center', height: '38px', display: 'flex', borderBottom: '2px solid #99EDF9', fontFamily: 'Poppins-Regular' }}>Weekly</Grid>
                            <Grid xs={3.5}
                                style={{ color: '#FAFBFC', fontSize: '14px', fontWeight: '500', justifyContent: 'center', height: '38px', display: 'flex', fontFamily: 'Poppins-Regular' }}>Monthly</Grid>
                            <Grid xs={3.5}
                                style={{ color: '#FAFBFC', fontSize: '14px', fontWeight: '500', justifyContent: 'center', height: '38px', display: 'flex', fontFamily: 'Poppins-Regular' }}>Last year</Grid>
                        </Grid>
                        <Grid
                            sx={{
                                margin: theme.breakpoints.down('xs') ? 2 : 4,
                                [theme.breakpoints.up('md')]: {
                                    marginTop: -45,
                                },
                            }}
                            container
                            xs={12}
                            style={{ marginTop: '' }}>
                            <LineChart />

                        </Grid>
                    </Grid>
                    <Grid xs={0.6}
                        md={1}></Grid>
                    <Grid xs={11.2}
                        md={4.4}>
                        <Item1>
                            <Grid style={{ color: "#D9D9D9", display: 'flex', justifyContent: 'center', fontSize: '16px', fontWeight: '500', fontFamily: 'Poppins-Regular' }}> Total balance</Grid>
                            <Grid style={{ color: "white", display: 'flex', justifyContent: 'center', fontSize: '30.8px', fontWeight: '500', marginTop: '10px', fontFamily: 'Poppins-Regular' }}> $81,910.00</Grid>
                            <Grid style={{ color: "white", display: 'flex', justifyContent: 'center', fontSize: '38px', fontWeight: '500', marginTop: '10px' }}>
                                <div style={{ color: '#607BCC', height: '50px', display: 'flex' }}>
                                    <img src="/ArrowNarrowRight.png"
                                        width={15}
                                        height={16} />
                                    <div style={{ marginLeft: '10px' }}>
                                        <span style={{ display: 'block', color: '#F5F5F7', fontSize: '13px', fontFamily: 'Poppins-Regular' }}>12.81%</span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid container
                                style={{ color: "white", display: 'flex', justifyContent: 'center', fontSize: '38px', fontWeight: '500', margin: '30px 20px' }}>
                                <Grid xs={5}>
                                    <button style={{ width: '100%', fontSize: '16px', height: '51px', color: 'white', backgroundColor: '#141B22', border: '1px solid #607BCC', borderRadius: "7.536px", justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins-Regular' }}>Send <img src="/import.svg"></img></button>
                                </Grid>
                                <Grid xs={1}></Grid>
                                <Grid xs={5}>
                                    <button style={{ width: '100%', fontSize: '16px', height: '51px', color: 'white', backgroundColor: '#141B22', border: '1px solid #C292EB', borderRadius: "7.536px", justifyContent: 'center', alignItems: 'center', fontFamily: 'Poppins-Regular' }}>Receive <img src="/export.svg"></img></button>

                                </Grid>
                            </Grid>
                            <Grid style={{ color: "#D9D9D9", display: 'flex', justifyContent: 'left', fontSize: '16px', fontWeight: '500', marginBottom: '40px', fontFamily: 'Poppins-Regular' }}> Quick transfer</Grid>
                            <Grid container
                                style={{ justifyItems: 'center' }}>
                                <Grid xs={2.4}
                                    style={{ width: '48px' }}>
                                    <img style={{ height: '85%' }}
                                        src="/Group.svg"></img>
                                </Grid>
                                <Grid xs={2.4}>
                                    <img style={{ height: '85%' }}
                                        src="/Group.svg"></img>

                                </Grid>
                                <Grid xs={2.4}>
                                    <img style={{ height: '85%' }}
                                        src="/Group.svg"></img>

                                </Grid>
                                <Grid xs={2.4}>
                                    <img style={{ height: '85%' }}
                                        src="/Group.svg"></img>

                                </Grid>
                                <Grid xs={2}
                                    style={{}}>
                                    <img style={{ marginTop: '0px', width: '100%' }}
                                        src="/plusblack.PNG"></img>
                                </Grid>

                            </Grid>
                            <Grid container
                                style={{ justifyContent: 'space-between', margin: '40px 0px' }}>
                                <Grid xs={8}
                                    style={{ color: "#D9D9D9", display: 'flex', justifyContent: 'left', fontSize: '16px', fontWeight: '500', fontFamily: 'Poppins-Regular' }}>
                                    Notifications <svg style={{ marginTop: '10px', marginLeft: '4px' }}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="9"
                                        height="9"
                                        viewBox="0 0 9 9"
                                        fill="none">
                                        <circle cx="4.56499"
                                            cy="4.47826"
                                            r="3.76812"
                                            fill="#C292EB" />
                                    </svg>
                                </Grid>
                                <Grid xs={1}
                                    style={{ float: 'right' }}><img src="/setting-2.svg"></img></Grid>
                            </Grid>
                            <Grid container
                                style={{ justifyContent: 'space-between' }}>
                                <Grid xs={2}>
                                    <img style={{ width: '80%' }}
                                        src="/Group.svg"></img>
                                </Grid>
                                <Grid xs={6}>
                                    <h5 style={{ marginTop: '0px', marginBottom: '0px', fontFamily: 'Poppins-Regular' }}>Josep akbar</h5>
                                    <span style={{ color: '#D9D9D9', fontSize: '14px', fontFamily: 'Poppins-Regular' }}> Just sent you $10,000</span>
                                    <br />
                                    <a style={{ color: 'rgba(153, 237, 249, 0.54)', fontSize: '14px', fontFamily: 'Poppins-Regular' }}>Click for detail</a>
                                </Grid>
                                <Grid xs={3}>
                                    <a style={{ color: "#D9D9D9", fontSize: '14px', marginTop: '25px', fontFamily: 'Poppins-Regular' }}>Just now</a>
                                </Grid>
                            </Grid>
                            <hr style={{ height: '1px', color: '#707479' }} />

                            <Grid container
                                style={{ justifyContent: 'space-between' }}>
                                <Grid xs={2}>
                                    <img style={{ width: '80%' }}
                                        src="/Group.svg"></img>
                                </Grid>
                                <Grid xs={6}>
                                    <h5 style={{ marginTop: '0px', marginBottom: '0px', fontFamily: 'Poppins-Regular' }}>Josep akbar</h5>
                                    <span style={{ color: '#D9D9D9', fontSize: '14px', fontFamily: 'Poppins-Regular' }}> Just sent you $10,000</span>
                                    <br />
                                    <a style={{ color: 'rgba(153, 237, 249, 0.54)', fontSize: '14px', fontFamily: 'Poppins-Regular' }}>Click for detail</a>
                                </Grid>
                                <Grid xs={3}>
                                    <a style={{ color: "#D9D9D9", fontSize: '14px', marginTop: '25px', fontFamily: 'Poppins-Regular' }}>Just now</a>
                                </Grid>
                            </Grid>
                            <hr style={{ height: '1px', color: '#707479' }} />

                            <Grid container
                                style={{ justifyContent: 'space-between' }}>
                                <Grid xs={2}>
                                    <img style={{ width: '80%' }}
                                        src="/Group.svg"></img>
                                </Grid>
                                <Grid xs={6}>
                                    <h5 style={{ marginTop: '0px', marginBottom: '0px', fontFamily: 'Poppins-Regular' }}>Josep akbar</h5>
                                    <span style={{ color: '#D9D9D9', fontSize: '14px', fontFamily: 'Poppins-Regular' }}> Just sent you $10,000</span>
                                    <br />
                                    <a style={{ color: 'rgba(153, 237, 249, 0.54)', fontSize: '14px', fontFamily: 'Poppins-Regular' }}>Click for detail</a>
                                </Grid>

                                <Grid xs={3}>
                                    <a style={{ color: "#D9D9D9", fontSize: '14px', marginTop: '25px', fontFamily: 'Poppins-Regular' }}>Just now</a>
                                </Grid>
                            </Grid>
                        </Item1>
                    </Grid>
                </Grid>

            </Box>
        </>
    );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
