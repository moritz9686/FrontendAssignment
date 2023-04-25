import React from "react";
import Grp from "./Grp.jsx";
import Sel from "./Sel.jsx";
import Swt from "./Swt.jsx";
import Rad from "./Rad.jsx";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Checkbox,
  Switch,
  useMediaQuery,
} from "@mui/material";
import Inp from "./Inp.jsx";
import MyJsonEditor from "./jsonEditor.jsx";

const Form_1 = () => {
  const [customStyle, setCustomStyle] = React.useState([
    {
      sort: 1,
      label: "Pizza Name",
      description: "",
      validate: {
        required: true,
        immutable: false,
      },
      jsonKey: "name",
      uiType: "Input",
      icon: "",
      level: 0,
      placeholder: "",
    },
    {
      sort: 4,
      label: "Pizza_type",
      description: "",
      validate: {
        required: true,
        immutable: false,
      },
      jsonKey: "pizza_type",
      uiType: "Group",
      icon: "",
      level: 0,
      placeholder: "",
      subParameters: [
        {
          sort: 0,
          label: "Pizza_type Type",
          description: "",
          validate: {
            required: true,
            options: [
              {
                label: "Naples Style Pizza",
                value: "naples",
                description: "",
                icon: "",
              },
              {
                label: "New York Style Pizza",
                value: "newyork",
                description: "",
                icon: "",
              },
            ],
            defaultValue: "naples",
            immutable: false,
          },
          jsonKey: "type",
          uiType: "Radio",
          icon: "",
          level: 1,
          placeholder: "",
        },
        {
          sort: 10001,
          label: "Naples Style Pizza",
          description: "",
          validate: {
            required: true,
            immutable: false,
          },
          jsonKey: "Naples",
          uiType: "Ignore",
          icon: "",
          level: 1,
          placeholder: "",
          conditions: [
            {
              jsonKey: "pizza_type.type",
              op: "==",
              value: "naples",
              action: "enable",
            },
          ],
          subParameters: [
            {
              sort: 10000,
              label: "Slices",
              description: "",
              validate: {
                required: true,
                options: [
                  {
                    label: "1",
                    value: "1",
                    description: "",
                    icon: "",
                  },
                  {
                    label: "2",
                    value: "2",
                    description: "",
                    icon: "",
                  },
                  {
                    label: "3",
                    value: "3",
                    description: "",
                    icon: "",
                  },
                  {
                    label: "4",
                    value: "4",
                    description: "",
                    icon: "",
                  },
                  {
                    label: "5",
                    value: "5",
                    description: "",
                    icon: "",
                  },
                ],
                defaultValue: "1",
                immutable: false,
              },
              jsonKey: "slices",
              uiType: "Select",
              icon: "",
              level: 2,
              placeholder: "",
            },
            {
              sort: 10001,
              label: "Type",
              description: "",
              validate: {
                required: true,
                pattern: "naples",
                immutable: false,
              },
              jsonKey: "type",
              uiType: "Input",
              icon: "",
              level: 2,
              placeholder: "",
              disable: true,
            },
          ],
        },
        {
          sort: 10002,
          label: "New York Style Pizza",
          description: "",
          validate: {
            required: true,
            immutable: false,
          },
          jsonKey: "NewYork",
          uiType: "Ignore",
          icon: "",
          level: 1,
          placeholder: "",
          conditions: [
            {
              jsonKey: "pizza_type.type",
              op: "==",
              value: "newyork",
              action: "enable",
            },
          ],
          subParameters: [
            {
              sort: 10000,
              label: "Cheeseburst",
              description: "",
              validate: {
                required: true,
                defaultValue: false,
                immutable: false,
              },
              jsonKey: "cheeseburst",
              uiType: "Switch",
              icon: "",
              level: 2,
              placeholder: "",
            },
            {
              sort: 10001,
              label: "Type",
              description: "",
              validate: {
                required: true,
                pattern: "newyork",
                immutable: false,
              },
              jsonKey: "type",
              uiType: "Input",
              icon: "",
              level: 2,
              placeholder: "",
              disable: true,
            },
          ],
        },
      ],
    },
    {
      sort: 10002,
      label: "Toppings",
      description: "",
      validate: {
        required: true,
        immutable: false,
      },
      jsonKey: "toppings",
      uiType: "Group",
      icon: "",
      level: 0,
      placeholder: "",
      subParameters: [
        {
          sort: 1,
          label: "Sauce",
          description: "",
          validate: {
            required: true,
            options: [
              {
                label: "Red",
                value: "Red",
                description: "",
                icon: "",
              },
              {
                label: "White",
                value: "White",
                description: "",
                icon: "",
              },
              {
                label: "Pesto",
                value: "Pesto",
                description: "",
                icon: "",
              },
            ],
            defaultValue: "Red",
            immutable: false,
          },
          jsonKey: "sauce",
          uiType: "Select",
          icon: "",
          level: 1,
          placeholder: "",
        },
        {
          sort: 3,
          label: "Main_topping",
          description: "",
          validate: {
            required: true,
            options: [
              {
                label: "Mushroom",
                value: "Mushroom",
                description: "",
                icon: "",
              },
              {
                label: "Chicken",
                value: "Chicken",
                description: "",
                icon: "",
              },
              {
                label: "Jalapenos",
                value: "Jalapenos",
                description: "",
                icon: "",
              },
            ],
            defaultValue: "Mushroom",
            immutable: false,
          },
          jsonKey: "main_topping",
          uiType: "Select",
          icon: "",
          level: 1,
          placeholder: "",
        },
        {
          sort: 6,
          label: "Include_seasonings",
          description: "",
          validate: {
            required: true,
            defaultValue: true,
            immutable: false,
          },
          jsonKey: "include_seasonings",
          uiType: "Switch",
          icon: "",
          level: 1,
          placeholder: "",
        },
        {
          sort: 6,
          label: "Second_topping",
          description: "",
          validate: {
            options: [
              {
                label: "Anchovies",
                value: "Anchovies",
                description: "",
                icon: "",
              },
              {
                label: "Pineapple",
                value: "Pineapple",
                description: "",
                icon: "",
              },
              {
                label: "Potatoes",
                value: "Potatoes",
                description: "",
                icon: "",
              },
            ],
            defaultValue: "Anchovies",
            immutable: false,
          },
          jsonKey: "second_topping",
          uiType: "Select",
          icon: "",
          level: 1,
          placeholder: "",
        },
      ],
    },
    {
      sort: 10003,
      label: "Size",
      description: "",
      validate: {
        options: [
          {
            label: "Medium",
            value: "Medium",
            description: "",
            icon: "",
          },
          {
            label: "Small",
            value: "Small",
            description: "",
            icon: "",
          },
          {
            label: "Large",
            value: "Large",
            description: "",
            icon: "",
          },
        ],
        defaultValue: "Medium",
        immutable: false,
      },
      jsonKey: "size",
      uiType: "Select",
      icon: "",
      level: 0,
      placeholder: "",
    },
  ]);
  const [jsonData, setJsonData] = React.useState({ name: "John", age: 30 });

  const [slices, setSlices] = React.useState("1");
  const handleChange1 = (event) => {
    setSlices(event.target.value);
  };

  const handleJsonData = (newJsonData) => {
    setJsonData(newJsonData);
    setCustomStyle(newJsonData);
  };

  const downloadJsonData = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(jsonData)], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "0 10px 10px 10px",
          gap: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: isTablet ? "column" : "row",
        }}
      >
        {/* json editor */}
        <Box
          sx={{
            width: "80vh",
            height: "fit-content",
            backgroundColor: "grey",
            marginTop: "50px",
            borderRadius: "10px",
            padding: "15px",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <MyJsonEditor handleJsonData={handleJsonData} />
        </Box>
        {/* ui -design */}
        <Box
          sx={{
            width: "80vh",
            height: "fit-content",
            backgroundColor: "white",
            marginTop: "50px",
            borderRadius: "10px",
            padding: "15px",
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          {customStyle.map((item, index) => (
            <Box
              sx={{
                width: "75vh",
                height: "fit-content",
                backgroundColor: "white",
                // marginTop: "50px",
                borderRadius: "10px",
                padding: "15px",
                display: "flex",
                gap: "10px",
                background: "#76aeda12",
                borderRadius: "5px",
                border: " 2px solid #03a9f424",
                alignItems: item.uiType === "Group" ? "stretch" : "center",
                flexDirection: item.uiType === "Group" ? "column" : "row",
              }}
            >
              {(item.uiType === "Input" && <Inp data={item} />) ||
                (item.uiType === "Group" && <Grp data={item} />) ||
                (item.uiType === "Select" && <Sel data={item} />) ||
                (item.uiType === "Switch" && <Swt data={item} />) ||
                (item.uiType === "Radio" && <Rad data={item} />) 
}
            </Box>
          ))}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Button
              color="secondary"
              sx={{
                fontWeight: "bold",
                color: "white",
                background: "black",
                height: "30px",
                "&&:hover": {
                  color: "black",
                },
              }}
              onClick={downloadJsonData}
            >
              Submit
            </Button>
            <Button
              color="secondary"
              sx={{
                fontWeight: "bold",
                color: "black",
                border: "2px solid black",
                height: "30px",
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form_1;
