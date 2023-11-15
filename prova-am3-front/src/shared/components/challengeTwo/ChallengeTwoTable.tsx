import React, { useEffect, useState } from 'react';
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
  IconButton,
  TextField,
} from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FilterListOffOutlinedIcon from '@mui/icons-material/FilterListOffOutlined';
import { Customer, CustomerItem, Product, ProductItem } from '../../store';

interface TableHooks<T> {
  store: CustomerItem | ProductItem | any;
  query: {
    isLoading: boolean;
    refetch: (newQuery: string) => void;
    data: T | undefined;
  };
  route: string;
}

interface Filters {
  id?: string;
  name?: string;
}

function ChallengeTwoTable<T>({ store, query, route }: TableHooks<T>) {
  const { isLoading, refetch } = query;
  const [page, setPage] = React.useState(0);
  const [queryParams, setQueryParams] = useState<string>(`${route}/?page=1`);
  const [filters, setFilters] = useState<Filters>();
  const [activeFilters, setActiveFilters] = useState<boolean>(false);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
  };

  const handleToggleFilters = () => {
    setActiveFilters(!activeFilters);
  };
  const clearFilters = () => {
    const newFilters = Object.entries(filters || {}).reduce((acc, [key, value]) => {
      if (value) {
        return { ...acc, [key]: value };
      }
      return acc;
    }, {});
    setFilters(newFilters);
    setQueryParams(`${route}?page=${page + 1}`);
  }

  useEffect(() => {
    clearFilters();
    setQueryParams(`${route}?page=${page + 1}${filters ? `&filters=${encodeURIComponent(JSON.stringify(filters))}` : ''}`);
  }
    , [filters, page]);

  const handleFilters = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [name]: value };
      return newFilters;
    });
  };


  useEffect(() => {
    refetch(queryParams);
  }, [route, queryParams]);

  return (
    <Box maxHeight={"70vh"}>
      <Paper sx={{ maxHeight: "70vh" }}>
        <TableContainer sx={{ maxHeight: "50vh" }}>
          <Table aria-labelledby="tableTitle" size={'medium'}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel>Id</TableSortLabel>
                </TableCell>
                <TableCell sx={{ display: "flex", justifyContent: "space-between" }}>
                  <TableSortLabel>Name</TableSortLabel>
                  <IconButton onClick={handleToggleFilters}>
                    {activeFilters ? <FilterListOffOutlinedIcon /> : <FilterListOutlinedIcon />}
                  </IconButton>
                </TableCell>
              </TableRow>
              {activeFilters && (
                <TableRow>
                  <TableCell>
                    <TextField variant='outlined' label='Id'
                      onChange={handleFilters}
                      value={filters?.id || ''}
                      name='id'
                    />
                  </TableCell>
                  <TableCell>
                    <TextField variant='outlined' label='Name'
                      onChange={handleFilters}
                      value={filters?.name || ''}
                      name='name'
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableHead>
            <TableBody>
              {store?.data.map((item: Customer) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={store?.totalCount}
          rowsPerPage={10}
          page={page}
          onPageChange={(event: any, newPage: number) => {
            setPage(newPage);
            handleTabChange(event, newPage);
          }}
        />
      </Paper>
    </Box>
  );
}

export { ChallengeTwoTable };
