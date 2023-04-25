import React from "react";

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Checkbox,
  Switch,
} from "@mui/material";

const Rad = ({ data }) => {
  const demo = data[0].validate.options;
  console.log("demo", data);
  const [whichType, setWhichType] = React.useState(
    data[0].validate.defaultValue
  );
  const rest = data.slice(1);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {demo.map((item, index) => {
          console.log(item);
          return (
            <Button
              sx={{
                backgroundColor:
                  whichType === item.value ? "#2196f338" : "#9ab2c536",
                color: "black",
                width: "50%",
                height: "30px",
                border:
                  whichType === item.value ? "2px solid #2196f338" : "none",
                fontSize: "10px",
                fontWeight: "bold",
              }}
              key={index}
              onClick={() => {
                setWhichType(item.value);
              }}
            >
              {item.label} <span style={{ color: "red" }}>*</span>
            </Button>
          );
        })}
      </Box>
      {/* condition based options */}
      {rest.map((item, index) => {
        console.log("this is item", item);
        console.log(item.conditions[0].value, whichType);
        return (
          <>
            {whichType === item.conditions[0].value && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {item.subParameters.map((item, index) => {
                      return (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "black",
                                fontSize: "12px",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              {item.label}
                              <span style={{ color: "red" }}>*</span>
                            </Typography>
                            {item.uiType === "Select" && (
                              <FormControl
                                sx={{ m: 1, minWidth: "50%", color: "black" }}
                              >
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
                            )}
                            {item.uiType === "Switch" && (
                              <Switch
                                //  onChange={() => setHide(!hide)}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            )}
                            {item.uiType === "Input" && (
                              <>
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
                            )}
                          </Box>
                        </>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            )}
          </>
        );
      })}
    </>
  );
};

export default Rad;
