import React from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";

const Sel = ({ data }) => {
  const item = data;
  console.log("the is sel dat", data);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
        {item.label} <span style={{ color: "red" }}>*</span>
      </Typography>
      <FormControl sx={{ m: 1, minWidth: "50%", color: "black" }}>
        <Select
          displayEmpty
          sx={{
            color: "black",
            height: "30px",
            border: "1px solid grey",
            background: "#76aeda12",
            fontSize: "12px",
            fontWeight: "bold",
          }}
          defaultValue={item.validate.defaultValue}
        >
          {item.validate.options.map((item, index) => {
            return (
              <MenuItem
                sx={{
                  color: "black",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
                key={index}
                value={item.value}
              >
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sel;
