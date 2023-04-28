import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import GridViewIcon from '@mui/icons-material/GridView';
import icon from '../assets/icon.svg';
import indicator from '../assets/Indicator.svg';

export default function Navbar() {
  return (
    <div>
        <Stack
        backgroundColor={'#fff'}
        direction={'row'}>

            <Stack 
        backgroundColor={'#fff'} className="search-bar" sx={{ flexGrow: 1, paddingY:'10px', paddingX:'20px' }}>
            <TextField
            placeholder="Search..."
            InputProps={{startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
            )}} />
            </Stack>

            <Stack direction={'row'} sx={{justifyContent:'space-evenly',alignItems:'center', minWidth:'208px'}}>
                <NotificationsIcon/>
                <CalendarTodayIcon/>
                <GridViewIcon/>
                <Box position={'relative'} sx={{height:'40px', width:'40px'}}>
                <img src={icon} alt="image" width={'40px'}/>
                <Box
                position={'absolute'}
                right={'0'}
                bottom={'-5px'}>
                <img src={indicator} alt="image"/>
                </Box>
                </Box>
            </Stack>
        </Stack>
    </div>
  )
}
