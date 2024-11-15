import React, { useEffect, useState, useContext } from "react";
import "./products.css";
import { Box, Button, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { searchContext } from "../../Context/searchContext";
import Champagne from "./CHAMPAGNE/Champagne";
// var axios = require('axios');
// import { searchContext } from "../../Context/searchContext";
/*framer-motion emoji-picker-react @mui/x-date-pickers  @mui/x-date-pickers-pro
 @coreui/react mdb-react-ui-kit  @mui/material-next  @mui/x-data-grid @mui/styled-engine-sc     @emotion/react*/
const columns = [
  { field: "ID", headerName: "ID", width: 70 },
  { field: "Category", headerName: "Category", width: 130 },
  { field: "Name", headerName: "Product Name", width: 130 },

  {
    field: "Price",
    headerName: "Price",
    type: "number",
    width: 90,
  },
  {
    field: "Shipping",
    headerName: "Shipping",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "Quantity",
    headerName: "Quantity",
    type: "number",
    width: 90,
  },
  {
    field: "UnitsSold",
    headerName: "Units Sold",
    type: "number",
    width: 90,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function Productslist() {
  const [category, setCategory] = React.useState("");
  const [rows, setRows] = useState();
  // const [searchValue, setSearchValue] = useState("");
  const [temp, setTemp] = useState();
  const { searchVariable, updateSearchVariable } = useContext(searchContext);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  // const getSerachItem = (e) => {
  //   setSearchValue(e.target.value);
  // };

  const filter = async () => {
    const resp = await axios.post(
      "http://localhost:8080/filterproductsbycategory",
      { category: category }
    );
    var arr = resp.data;
    var c = 1;
    arr.forEach((elem) => {
      elem.id = c++;
    });
    setRows(arr);
  };
  const search = () => {
    setRows(
      rows.filter((elem) => {
        return (
          elem.Name.toLowerCase().includes(searchVariable) /*searchValue*/ ||
          elem.Category.toLowerCase().includes(searchVariable) ||
          elem.ID.toLowerCase().includes(searchVariable)
        );
      })
    );
  };
  const getProductList = async () => {
    const resp = await axios.post("http://localhost:8080/getproducts"
    );
    var arr = resp.data;
    var c = 1;
    arr.forEach((elem) => {
      elem.id = c++;
    });
    setTemp(arr);
    setRows(arr);
  };

  useEffect(() => {
    getProductList();
  }, []);
  useEffect(() => {
    filter();
  }, [category]);

  useEffect(() => {
    if (searchVariable !== "") {
      /*searchValue*/
      search();
    } else {
      setRows(temp);
    }
  }, [searchVariable]); /*searchValue*/

  return (
    <div>

      <div className="productlist-container">
        <h2>Product List</h2>

        {rows && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              border: "1px solid #efefef",
              backgroundColor: "white",
              borderRadius: "8px",
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                // value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Electronics"}>Electronics</MenuItem>
                <MenuItem value={"Furniture"}>Furniture</MenuItem>
                <MenuItem value={"Fashion"}>Fashion</MenuItem>
                <MenuItem value={"Kitchen"}>Kitchen</MenuItem>
              </Select>
              {/* <input type="text" onChange={getSerachItem}></input> */}
              <FormHelperText></FormHelperText>
            </FormControl>

            <div style={{ height: 600, width: "90%", marginLeft: "10px" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 100]}
                checkboxSelection
            /> 
            </div>
          </Box>
        )}
      </div>
    </div>
  );
}
  /* {rows && (     

          
          <Box >
       <select  style={{display:"flex",height:"100%",widht:"100%" }} value={category}> 
           <MenuItem  style={{border:"50px solid #fff",backgroundColor:"#efefef",marginLeft:"20px" , borderRadius:"20px", width:"250px",height:"380px"}} value=""><em>None</em></MenuItem>
           <MenuItem  style={{border:"50px solid #fff",backgroundColor:"#efefef",marginLeft:"20px" , borderRadius:"20px", width:"250px",height:"380px"}} value={"Electronics"}>Electronics</MenuItem>
           <MenuItem  style={{border:"50px solid #fff",backgroundColor:"#efefef",marginLeft:"20px" , borderRadius:"20px", width:"250px",height:"380px"}} value={"Furniture"}>Furniture</MenuItem>
           <MenuItem   style={{border:"50px solid #fff",backgroundColor:"#efefef",marginLeft:"20px" , borderRadius:"20px", width:"250px",height:"380px"}} value={"Fashion"}>Fashion</MenuItem>
           <MenuItem  style={{border:"50px solid #fff",backgroundColor:"#efefef",marginLeft:"20px" , borderRadius:"20px", width:"250px",height:"380px"}} value={"Kitchen"}>Kitchen</MenuItem>
     </select>   
        <div style={{ height: 600, width: "90%", marginLeft: "10px" }}>
           <DataGrid
                rows={rows}
                columns={columns}

                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 100]}
                checkboxSelection
            />
        
        </div>
           </Box>
        )}*/