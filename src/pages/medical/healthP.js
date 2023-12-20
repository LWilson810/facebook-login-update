import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { applyPagination } from "src/utils/apply-pagination";

const now = new Date();

const data = [
  {
    id: "5e887ac47eed253091be10cb",
    address: {
      city: "salvatory test",
      country: "USA",
      state: "Ohio",
      street: "2849 Fulton Street",
    },
    avatar: "/assets/icon/table1.png",
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: "10 jan 2021",
    name: "You have been given medication of heart burn",
    phone: "1",
  },
  {
    id: "5e887b209c28ac3dd97f6db5",
    address: {
      city: "Blood test",
      country: "USA",
      state: "Georgia",
      street: "1865  Pleasant Hill Road",
    },
    avatar: "/assets/icon/table2.png",
    createdAt: subDays(subHours(now, 1), 2).getTime(),
    email: "5 oct 2021",
    name: "Dr recommended you to stop drinking cold water ",
    phone: "2",
  },
  {
    id: "5e887b7602bdbc4dbb234b27",
    address: {
      city: "MRI Scan",
      country: "USA",
      state: "Ohio",
      street: "4894  Lakeland Park Drive",
    },
    avatar: "/assets/icon/table2.png",
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: "15 oct 2021",
    name: "Dr recommended you to stop drinking cold water ",
    phone: "2",
  },
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(() => {
    return applyPagination(data, page, rowsPerPage);
  }, [page, rowsPerPage]);
};

const useCustomerIds = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Head>
        <title>Medical Record: 3rd Party Health Providers</title>
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
                  Medical Record: 3rd Party Health Providers
                </Typography>
              </Stack>
              <img style={{ margin: "0" }}
                src="/assets/icon/close.png" />
            </Stack>
            <Stack color="white"
              direction="row"
              justifyContent="space-between"
              spacing={4}>
              <Typography maxWidth="380px"
                fontFamily="Poppins-Regular">
                This is where you can upload approved third part health service providers
                documentation and data
              </Typography>
              <Box>
                <Button
                  color="inherit"
                  style={{ minWidth: "127px", border: "1px #607BCC solid", marginRight: "20px", fontFamily: "Poppins-Regular" }}
                  endIcon={<img src="/assets/icon/upload.png" />}
                >
                  Upload
                </Button>
                <Button
                  color="inherit"
                  style={{ minWidth: "127px", border: "1px solid #C292EB", fontFamily: "Poppins-Regular" }}
                  endIcon={<img src="/assets/icon/download.png" />}
                >
                  Download
                </Button>
              </Box>
            </Stack>
            <CustomersTable text="Neutron overview"
              items={customers} />
            <CustomersTable text="My uploaded records"
              items={customers} />
            <CustomersTable text="Clinician uploaded records "
              items={customers} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
