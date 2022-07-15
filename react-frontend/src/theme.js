import { createMuiTheme  } from "@mui/material";
import { purple } from "@mui/material/colors";
import {lightBlue, indigo} from "@mui/material/colors";

const theme   = createMuiTheme({
    palette: {
        primary:lightBlue ,
        secondary: indigo
    }
})
export default theme;