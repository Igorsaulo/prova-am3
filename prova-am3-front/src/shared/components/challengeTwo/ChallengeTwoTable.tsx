import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
  } from '@mui/material';
  
  interface TableItem {
    id: number;
    name: string;
  }
  
  function ChallengeTwoTable({ items }: { items: TableItem[] }) {
    return (
      <Box>
        <Paper>
          <TableContainer>
            <Table aria-labelledby="tableTitle" size={'medium'}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <TableSortLabel>Name</TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow hover tabIndex={-1} key={item.id}>
                    <TableCell>{item.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={items.length}
            rowsPerPage={5}
            page={0}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
          />
        </Paper>
      </Box>
    );
  }
  
  export { ChallengeTwoTable };