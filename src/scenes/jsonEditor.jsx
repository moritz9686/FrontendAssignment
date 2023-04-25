import React from "react";
import JsonEditor from "react-json-editor-ajrm";
import { Box, Button } from "@mui/material";

function MyJsonEditor({ handleJsonData }) {
  const [jsonData, setJsonData] = React.useState({ name: "John", age: 30 });

  const handleJsonChange = (newJsonData) => {
    setJsonData(newJsonData);
  };

  return (
    <Box>
      <JsonEditor
        value={jsonData}
        onChange={handleJsonChange}
        height="500px"
        width="100%"
      />
      <Button
        onClick={() => {
          console.log(jsonData);
          handleJsonData(jsonData?.jsObject);
        }}
        variant="contained"
        color="primary"
      >
        Process
      </Button>
    </Box>
  );
}

export default MyJsonEditor;
