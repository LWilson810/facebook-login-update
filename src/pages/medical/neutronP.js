import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import {
  InputAdornment,
  OutlinedInput,
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Card,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { Scrollbar } from "src/components/scrollbar";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

const now = new Date();

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  return (
    <>
      <Head>
        <title>Neutron Interface</title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: "black",
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={4}>
            <Stack direction="row"
              justifyContent="space-between"
              spacing={4}>
              <Stack minWidth="380px"
                spacing={1}>
                <Typography
                  color="#FAFBFC"
                  fontSize="33px"
                  fontWeight="700"
                  variant="h4"
                  fontFamily="Poppins-Bold"
                >
                  Neutron Interface
                </Typography>
              </Stack>
              <img style={{ margin: "0" }}
                src="/assets/icon/close.png" />
            </Stack>
            <Stack color="white"
              direction="row"
              justifyContent="space-between"
              spacing={4}>
              <Typography fontSize="1 8px !important"
                fontFamily="Poppins-Regular">
                Welcome to the Neutron interface, this is a AI conversational interface that is
                built on the Atom dataset. You can ask any questions about health, post your
                symptoms and receive diagnosis prognosis and testing suggestions based on your
                specific medical profile.
              </Typography>
            </Stack>
          </Stack>
        </Container>
        <Card
          style={{
            backgroundColor: "rgba(20, 27, 34, 0.70)",
            marginLeft: "2%",
            marginRight: "2%",
            marginTop: "10vh",
            paddingBottom: "2vh",
          }}
        >
          <Scrollbar>
            <Box
              sx={{
                // minWidth: 800,
                minHeight: "70vh",
                paddingBottom: "5vh",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <img src="/assets/icon/group.png"></img>
                <Typography color="white"
                  fontFamily="Poppins-Regular">How can i help you?</Typography>
              </Box>
            </Box>

            <OutlinedInput
              sx={{
                backgroundColor: "rgba(20, 27, 34, 0.70)",
                marginLeft: "10%",
                marginRight: "10%",
                width: "80%",
                color: "rgba(250, 251, 252, 0.50)",
              }}
              defaultValue=""
              fullWidth
              placeholder="Message QuanMed AI..."
              startAdornment={
                <InputAdornment position="start">
                  <img src="/assets/icon/inputicon.png"></img>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <img src="/assets/icon/up.png"></img>
                </InputAdornment>
              }
            />
          </Scrollbar>
        </Card>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
