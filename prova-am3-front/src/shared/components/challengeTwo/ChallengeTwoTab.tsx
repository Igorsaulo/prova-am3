import {
  Box,
  Paper,
  Toolbar,
  Tabs,
  Tab,
}
  from "@mui/material";
import { ChallengeTwoTable } from "./ChallengeTwoTable";
import React from 'react';
import { StateItem, useCustomerStore } from "../../store";
import { getItemsQuery } from "../../../queries";


function ChallengeTwoTab() {
  const [activeTab, setActiveTab] = React.useState(0);
  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const { item }: StateItem = useCustomerStore();

  return (
    <Box>
      <Paper>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Tabs value={activeTab} onChange={handleTabChange} aria-label="table tabs">
            <Tab label="Products" />
            <Tab label="Customers" />
          </Tabs>
        </Toolbar>
        {activeTab === 0 && (
          <ChallengeTwoTable
            store={item}
            route="customers"
            query={getItemsQuery("customers/?page=1")}
          />
        )}
        {activeTab === 1 && (
          <ChallengeTwoTable
            store={item}
            route="products"
            query={getItemsQuery("products/?page=1")}
          />
        )}
      </Paper>
    </Box>
  );
}

export { ChallengeTwoTab };