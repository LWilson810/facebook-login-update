import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";

export const CustomersTable = (props) => {
  const {
    text,
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => { },
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

  return (
    <Card style={{ backgroundColor: "rgba(20, 27, 34, 0.70)" }}>
      <Scrollbar>
        <Box sx={{ minWidth: 0, paddingBottom: "5vh" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    background: "none !important",
                    color: "white !important",
                    fontSize: "16px !important",
                    textTransform: "none !important",
                    fontFamily: 'Poppins-Regular'
                  }}
                  width="900"
                >
                  {text}
                </TableCell>
                <TableCell
                  sx={{
                    background: "none !important",
                    textTransform: "none !important",
                    color: "#607BCC !important",
                    textAlign: "center !important",
                    fontFamily: 'Poppins-Regular'
                  }}
                  width="150"
                >
                  Date<img style={{ marginLeft: "5px" }}
                    src="/assets/icon/vector.png"></img>
                </TableCell>
                <TableCell
                  sx={{
                    background: "none !important",
                    color: "#607BCC !important",
                    textTransform: "none !important",
                    textAlign: "center !important",
                    fontFamily: 'Poppins-Regular'
                  }}
                  width="300"
                >
                  Type<img style={{ marginLeft: "5px" }}
                    src="/assets/icon/vector.png"></img>
                </TableCell>
                <TableCell
                  sx={{
                    background: "none !important",
                    color: "#6F767E !important",
                    textTransform: "none !important",
                    textAlign: "center !important",
                    fontFamily: 'Poppins-Regular'
                  }}
                  width="100"
                >
                  <Typography
                    width="60px !important"
                    sx={{
                      border: "1px solid #1B1C31 !important",
                      padding: "5px",
                      borderRadius: "5px",
                      fontSize: "12px",
                      fontFamily: 'Poppins-Regular'
                    }}
                  >
                    Sort<img style={{ marginLeft: "5px" }}
                      src="/assets/icon/vector.png"></img>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {
                const isSelected = selected.includes(customer.id);
                const createdAt = format(customer.createdAt, "dd/MM/yyyy");

                return (
                  <TableRow hover
                    key={customer.id}
                    selected={isSelected}>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid rgba(247, 248, 250, 0.07)",
                        color: "white !important",
                        fontFamily: 'Poppins-Regular'
                      }}
                    >
                      <Stack alignItems="center"
                        direction="row"
                        spacing={2}>
                        <Avatar src={customer.avatar}>{getInitials(customer.name)}</Avatar>
                        <Typography variant="subtitle2"
                          fontFamily="Poppins-Regular">{customer.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid rgba(247, 248, 250, 0.07)",
                        textAlign: "center !important",
                        color: "#607BCC !important",
                        fontFamily: 'Poppins-Regular'
                      }}
                    >
                      {customer.email}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid rgba(247, 248, 250, 0.07)",
                        textAlign: "center !important",
                        color: "#607BCC !important",
                        fontFamily: 'Poppins-Regular'
                      }}
                    >
                      {customer.address.city}
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid rgba(247, 248, 250, 0.07)",
                        color: "white !important",
                      }}
                    >
                      {customer.phone == "1" ? (
                        <img height="27px"
                          width="57px"
                          src="/assets/icon/apply.png"></img>
                      ) : (
                        <img height="27px"
                          width="69px"
                          src="/assets/icon/completed.png"></img>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      {/* <TablePagination
          component="div"
          count={count}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        /> */}
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
};
