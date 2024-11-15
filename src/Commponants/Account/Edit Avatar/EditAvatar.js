import axios from "axios";
import React, { useEffect, useState } from "react";
// import Webcam from 'react-webcam'
import { createTheme } from "@mui/material/styles";
import { Range, initMDB } from "mdb-ui-kit";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

import image from "../../../assets/dmi.png";

const MIN = 0;
const MAX = 100;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

export default function EditAvatar() {
  const [visitcounter, setvisitCounter] = useState(0);
  const opa = visitcounter / 100;

  initMDB({ Range });
  const [sliderValue, setSliderValue] = useState(2);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const [val, setVal] = React.useState(MIN);

  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  const vala = val * 5;
  return (
    <div>
      <em
        style={{
          color: "primary",
          borderRadius: "50%",
          display: "flex",
          height: "20vh",
          width: "20vh",
          justifyContent: "revert",
          backgroundColor: "gray",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
          opacity: { opa },
        }}
      >
        <img
          style={{
            alignItems: "center",
            alignContent: "center",
            paddingTop: "0",
            paddingBottom: "25px",
          }}
          width={vala}
          height={vala}
          src={image}
          alt="edcd"
        />
      </em>
      <div>
        <Box
          sx={{
            width: 355,
            marginTop: 20,
            color: "dark" ? "#0a84ff" : "#007bff",
            justifyContent: "center",
          }}
        >
          <Slider
            marks={marks}
            step={1}
            value={val}
            sx={{
              color: "dark" ? "#0a84ff" : "#007bff",
              backgroundColor: "#007bff",
            }}
            valueLabelDisplay="auto"
            min={MIN}
            max={MAX}
            onChange={handleChange}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "dark" ? "#0a84ff" : "#007bff",
            }}
          >
            <Typography
              variant="body2"
              onClick={() => setVal(MIN)}
              sx={{ cursor: "pointer" }}
            >
              {MIN} min
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "dark" ? "#0a84ff" : "#007bff", cursor: "pointer" }}
              onClick={() => setVal(MAX)}
            >
              {MAX} max
            </Typography>
          </Box>
        </Box>
      </div>

      <button
        onClick={() => {
          setvisitCounter(visitcounter + 0.1);
        }}
      >
        click me..!!! baby
      </button>

      <div className="range" data-mdb-range-init>
        <input
          type="range"
          min={visitcounter}
          onChange={handleSliderChange}
          className="form-range"
          max="80"
          step="2"
          id="customRange3"
        />
      </div>

      {/* 
      <Stack spacing={2}>
     <div style={{ width:"25%"}}>
       <img src={image} className="rounded-3" width={setVal} height={setVal} alt="Avatar" />
      </div>
 
  <br></br>
<h5 class="mb-2"><strong>John Doe</strong></h5>
</Stack> */}

      {/* <div>
        <h2 className="mb-5 text-center">
          React Photo Capture using Webcam Examle
        </h2>
        <div>
          {picture == '' ? (
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              width={400}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={picture} />
          )}
        </div>
        <div>
          {picture != '' ? (
            <button
              onClick={(e) => {
                e.preventDefault()
                setPicture()
              }}
              className="btn btn-primary"
            >
              Retake
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault()
                capture()
              }}
              className="btn btn-danger"
            >
              Capture
            </button>
          )}
        </div>
      </div> */}

      {/* {users.map((elem) => {
      return (
        <div>
          <div className="user-avatar">
            <img src={elem.avatar}></img>
          </div>
          
          </div>
      );
    })} */}
    </div>
  );
}
