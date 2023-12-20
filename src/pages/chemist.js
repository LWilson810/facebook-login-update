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
import { borderBottomColor } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({

    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: "#141B22",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    // textAlign: 'center',
    color: "white",
    width: "auto",
    height: "350px",
    fontSize: 20,
}));
const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
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
    // const theme = useTheme();
    return (
        <>
            <Head>
                <title>Chemists | Quanmed AI</title>
            </Head>
            <Box sx={{ width: "100%", p: "20px", background: 'black' }}>

                <Grid container
                    item
                    style={{ margin: '30px 20px', fontSize: '36px', fontWeight: '700', color: '#F5F5F7', backgroundColor: 'black', fontFamily: 'Poppins-Bold' }}>
                    Chemists
                </Grid>
                <Grid container
                    rowSpacing={1}
                    columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                >

                    <Grid container
                        style={{ marginLeft: '20px', backgroundColor: 'transparent' }}
                    >
                        <Grid container
                            xs={12}
                            lg={5}
                            style={{ marginBottom: '10px', textAlign: 'right', fontSize: '15px', background: 'black', height: '60px', width: '100%', border: '2px solid #F5F5F7', borderRadius: '10px' }} >
                            <Grid xs={2}
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src='/search-normal.png' ></img>

                            </Grid>
                            <Grid xs={10}>
                                <input className="search-input"
                                    style={{ display: 'relative', textAlign: 'right', fontSize: '15px', background: 'black', height: '56px', width: '100%', border: '2px solid black', borderRadius: '10px', color: '#F5F5F7', padding: '0px 30px', float: 'right', fontFamily: 'Poppins-Regular' }}
                                    defaultValue={'Search Chemist'}></input>

                            </Grid>
                        </Grid>
                        <Grid xs={0.5}></Grid>
                        <Grid container
                            xs={12}
                            lg={2}
                            style={{ marginBottom: '10px', textAlign: 'right', fontSize: '15px', background: 'black', height: '60px', border: '2px solid #F5F5F7', borderRadius: '10px' }}>
                            <Grid xs={2}
                                lg={4}
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src='/element-1.svg'></img>
                            </Grid>
                            <Grid xs={10}
                                lg={8}>
                                <span style={{ display: 'relative', fontSize: '15px', background: 'black', height: '43px', width: '100%', border: '2px solid black', borderRadius: '10px', color: '#F5F5F7', padding: '0px 30px', float: 'right', marginTop: '13px', fontFamily: 'Poppins-Regular' }}>Category</span>
                            </Grid>

                        </Grid>
                        <Grid xs={0.5}></Grid>

                        <Grid container
                            xs={12}
                            lg={4}
                            style={{ textAlign: 'right', fontSize: '15px', background: 'black', height: '60px', border: '2px solid #F5F5F7', borderRadius: '10px' }}>
                            <Grid xs={2}
                                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src='/sort.png' ></img>
                            </Grid>
                            <Grid xs={10}>
                                <span style={{ display: 'relative', textAlign: 'right', fontSize: '15px', background: 'black', height: '43px', width: '100%', border: '2px solid black', borderRadius: '10px', color: '#F5F5F7', padding: '0px 30px', float: 'right', marginTop: '13px', fontFamily: 'Poppins-Regular' }}>Sort By: Popular</span>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid container
                        item
                        style={{ margin: '30px 20px', fontSize: '28px', color: '#F5F5F7', backgroundColor: 'black', fontFamily: 'Poppins-Regular' }}>
                        Your Connection
                    </Grid>
                    <Grid item
                        lg={4}
                        md={6}
                        xs={12}
                    >
                        <ConnectionTicket contactName='Jessica Jane'
                            subject="Chemist"
                            taskNumber="40"
                            rating='4,7'
                            reviewNumber="750" />
                    </Grid>
                    <Grid item
                        lg={4}
                        md={6}
                        xs={12}>
                        <ConnectionTicket contactName='Jessica Jane'
                            subject="Chemist"
                            taskNumber="40"
                            rating='4,7'
                            reviewNumber="750" />
                    </Grid>
                    <Grid item
                        lg={4}
                        md={6}
                        xs={12}>
                        <ConnectionTicket contactName='Jessica Jane'
                            subject="Chemist"
                            taskNumber="40"
                            rating='4,7'
                            reviewNumber="750" />
                    </Grid>

                    <Grid container
                        item
                        style={{ margin: '30px 20px 0px', fontSize: '28px', color: '#F5F5F7', backgroundColor: 'black' }}>
                        All Chemists
                    </Grid>
                    <Grid container
                        spacing={5}
                        style={{ margin: '0px 18vw 0px 0px' }}>
                        <Grid item
                            lg={6}
                            md={6}
                            xs={12}>
                            <ConnectionTicket contactName='Jessica Jane'
                                subject="Chemist"
                                taskNumber="40"
                                rating='4,7'
                                reviewNumber="750"
                                text="Hi, I'm Jessica Jane. Lorem Ipsum is simply dummy text of the printing and typesetting... "
                                flag={true} />

                        </Grid>
                        <Grid item
                            lg={6}
                            md={6}
                            xs={12}>
                            <ConnectionTicket contactName='Jessica Jane'
                                subject="Chemist"
                                taskNumber="40"
                                rating='4,7'
                                reviewNumber="750"
                                text="Hi, I'm Alex Stanton. Lorem Ipsum is simply dummy text of the printing and typesetting..."
                                flag={true} />

                        </Grid>
                        <Grid item
                            lg={6}
                            md={6}
                            xs={12}>
                            <ConnectionTicket contactName='Jessica Jane'
                                subject="Chemist"
                                taskNumber="40"
                                rating='4,7'
                                reviewNumber="750"
                                text="Hi, I'm Anna White.Lorem Ipsum is simply dummy text of the printing and typesetting... "
                                flag={true} />

                        </Grid>
                        <Grid item
                            lg={6}
                            md={6}
                            xs={12}>
                            <ConnectionTicket contactName='Jessica Jane'
                                subject="Chemist"
                                taskNumber="40"
                                rating='4,7'
                                reviewNumber="750"
                                text="Hi, I'm Richard Kyle. Lorem Ipsum is simply dummy text of the printing and typesetting..."
                                flag={true} />

                        </Grid>
                        <Grid item
                            lg={6}
                            md={6}
                            xs={12}>
                            <ConnectionTicket contactName='Jessica Jane'
                                subject="Chemist"
                                taskNumber="40"
                                rating='4,7'
                                reviewNumber="750"
                                text="Hi, I'm Anna White.Lorem Ipsum is simply dummy text of the printing and typesetting... "
                                flag={true} />

                        </Grid>
                        <Grid item
                            lg={6}
                            md={6}
                            xs={12}>
                            <ConnectionTicket contactName='Jessica Jane'
                                subject="Chemist"
                                taskNumber="40"
                                rating='4,7'
                                reviewNumber="750"
                                text="Hi, I'm Richard Kyle. Lorem Ipsum is simply dummy text of the printing and typesetting..."
                                flag={true} />

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
