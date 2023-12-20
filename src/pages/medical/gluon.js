import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

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
        <title>Gluon</title>
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
                  fontFamily="Poppins-Bold"
                  fontWeight="700"
                  variant="h4"
                >
                  Gluon
                </Typography>
              </Stack>
              <img style={{ margin: "0" }}
                src="/assets/icon/close.png" />
            </Stack>
            <Stack color="white"
              direction="row"
              justifyContent="space-between"
              spacing={4}>
              <Typography fontSize="18px !important"
                fontFamily="Poppins-Regular">
                This is your medical trial and testing interface. Based on your Quark reflection,
                you can trial digital representations of drug and dietary changes, fastrack their
                application and review the effect and side effects they would have on you
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
