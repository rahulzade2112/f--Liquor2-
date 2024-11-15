import React from "react";
import "./feedback.css";
import { DrawerContent, background } from "@chakra-ui/react";
import { useDisclosure, Drawer } from "@chakra-ui/react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
// import StarIcon from "@mui/icons-material/Star";
import { StarIcon} from '@chakra-ui/icons'

const labels = {
  0.5: "Useless",  1: "Useless+",  1.5: "Poor",  2: "Poor+",  2.5: "Ok",  3: "Ok+",  3.5: "Good",  4: "Good+",  4.5: "Excellent",  5: "Excellent+",};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
export default function Feedback() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  

  return (
    <>
      <button className="feedbackbtn" onClick={(onOpen )}>
        FEEDBACK
      </button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerContent >
          <div id="rrr">
          <h1>Please Provide Feedback</h1>

         <Box >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => { setValue(newValue); }}
              onChangeActive={(event, newHover) => {setHover(newHover);}}
              emptyIcon={
              <StarIcon style={{ opacity:1,border:"1px solid yellow" }}  fontSize="inherit" />
              } />
        
       {value !== null && ( <Box sx={{ ml: 2 }}> {labels[hover !== -1 ? hover : value]}</Box>)}
          </Box>

          <form className="feedback-msg">  
            <textarea  class="form-control" rows="5" id="comment"></textarea>
            </form>

           <div className="feedback-btn"> 
            <button className="action-img">Submit</button>
            <button id="Cancel-feedback" className="action-img uncolored" onClick={onClose}><span>Cancel</span></button>
          </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
