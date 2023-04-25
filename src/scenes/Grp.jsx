import React from "react";
import Rad from "./Rad";
import Sel from "./Sel";
import Swt from "./Swt";
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
const Grp = ({ data }) => {
  const demo = data.subParameters;

  return (
    <>
      {demo[0].uiType === "Radio" && <Rad data={demo} />}
      {demo[0].uiType === "Select" &&
        data.subParameters.map((item, index) => {
          return (
            <>
              {item.uiType === "Select" && <Sel data={item} />}
              {item.uiType === "Switch" && <Swt data={item} />}
            </>
          );
        })}
    </>
  );
};

export default Grp;
