import React from "react";
import { Box, Switch, Typography } from "@mui/material";
const Swt = ({ data }) => {
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
        {data.label} <span style={{ color: "red" }}>*</span>
      </Typography>
      <Switch
        //  onChange={() => setHide(!hide)}
        inputProps={{ "aria-label": "controlled" }}
      />
    </Box>
  );
};

export default Swt;
