import React from "react";
import { Typography } from "@mui/material";
const Inp = ({ data: item }) => {
  return (
    <>
      <Typography
        sx={{
          color: "black",
          fontSize: "14px",
          // width: "155px",
          width: "50%",
          fontWeight: "bold",
        }}
      >
        {item.label}
        {item.validate.required && <span style={{ color: "red" }}>*</span>}
        {/* info icon dalna hai */}
      </Typography>
      <input
        placeholder={item.placeholder}
        style={{
          width: "50%",
          height: "24px",
          borderRadius: "5px",
          border: " 2px solid #03a9f424",
          background: "#76aeda12",
          padding: "5px",
          fontWeight: "bold",
        }}
      />
    </>
  );
};

export default Inp;
