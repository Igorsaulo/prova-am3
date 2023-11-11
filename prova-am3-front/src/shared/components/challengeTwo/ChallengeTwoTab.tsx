import {
    Box,
    Paper,
    Toolbar,
    Tabs,
    Tab,
}
    from "@mui/material";
import { ChallengeTwoTable } from "./ChallengeTwoTable";
import { useState } from 'react';

const products = [
    {
        "id": 1,
        "name": "Practical Steel Ball"
    },
    {
        "id": 2,
        "name": "Intelligent Metal Shirt"
    },
    {
        "id": 3,
        "name": "Generic Wooden Car"
    },
    {
        "id": 4,
        "name": "Practical Wooden Chips"
    },
    {
        "id": 5,
        "name": "Small Metal Bike"
    },
    // {
    //     "id": 6,
    //     "name": "Small Concrete Bike"
    // },
    // {
    //     "id": 7,
    //     "name": "Rustic Granite Soap"
    // },
    // {
    //     "id": 8,
    //     "name": "Rustic Steel Shoes"
    // },
    // {
    //     "id": 9,
    //     "name": "Incredible Fresh Gloves"
    // },
    // {
    //     "id": 10,
    //     "name": "Handcrafted Metal Pants"
    // },
    // {
    //     "id": 11,
    //     "name": "Ergonomic Steel Chicken"
    // },
    // {
    //     "id": 12,
    //     "name": "Licensed Fresh Computer"
    // },
    // {
    //     "id": 13,
    //     "name": "Tasty Fresh Chicken"
    // },
    // {
    //     "id": 14,
    //     "name": "Ergonomic Plastic Towels"
    // },
    // {
    //     "id": 15,
    //     "name": "Handmade Fresh Salad"
    // },
    // {
    //     "id": 16,
    //     "name": "Handmade Granite Pants"
    // },
    // {
    //     "id": 17,
    //     "name": "Gorgeous Plastic Car"
    // },
    // {
    //     "id": 18,
    //     "name": "Awesome Rubber Bike"
    // },
    // {
    //     "id": 19,
    //     "name": "Fantastic Metal Sausages"
    // },
    // {
    //     "id": 20,
    //     "name": "Rustic Fresh Fish"
    // }
]

function ChallengeTwoTab() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Paper>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 }
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="table tabs"
          >
            <Tab label="Products" />
            <Tab label="Customers" />
          </Tabs>
        </Toolbar>
        {activeTab === 0 && (
            <ChallengeTwoTable items={products} />
        )}
        {activeTab === 1 && (
            <ChallengeTwoTable items={products} />
        )}
      </Paper>
    </Box>
  );
}

export { ChallengeTwoTab };