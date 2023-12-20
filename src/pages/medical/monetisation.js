import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/XCircleIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { applyPagination } from "src/utils/apply-pagination";

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
        <title>Monetisation</title>
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
                  Monetisation
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
                Please choose which of your medical data below you would like to upload to the
                Tectum blockchain for researchers to have the opportunity to purchase from you
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
