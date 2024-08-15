import { Popover} from "@mui/material"

import PopoverContent from "./PopoverContent";
const ModalComponent=({open,onToggle})=>{
return (<>
<Popover sx={{ width:'35%',
  marginX:'50%',
  marginY:'6%',
  '& .MuiPaper-root': {
    borderRadius: '25px', // Adjust the border radius as needed
},
  }} open={open} onClose={onToggle} 
>
<PopoverContent/>
</Popover>
</>)
}
export default ModalComponent