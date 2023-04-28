import React from "react";
import { Box, Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import company from "../assets/company.svg";
import dashboard from "../assets/dashboard.svg";
import help from "../assets/help.svg";
import file from "../assets/file.svg";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [arrow, setArrow] = React.useState(<KeyboardArrowDownIcon />);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setArrow(<KeyboardArrowUpIcon />);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setArrow(<KeyboardArrowDownIcon />);
  };

  return (
    <div>
      <Stack
        direction={"column"}
        border={1}
        sx={{ maxWidth: "232px", minHeight: "100vh", paddingX: "15px" }}
      >
        <Box paddingY={"22px"}>
          <img width={"133px"} height={"41px"} src={company} alt="company" />
        </Box>

        <Stack marginTop={"20px"}>
          <Typography variant="caption" fontWeight={"600"} color={"#9D9FA1"} >
            D A S H B O A R D
          </Typography>

          <Box paddingY={"25px"}>
            <Button
              sx={{
                position: "relative",
                padding: "0px",
                width: "100%",
                paddingRight: "70px",
                color: "black",
                fontWeight: "600",
                fontFamily: "Inter",
                fontSize: "12px",
              }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              startIcon={<img src={dashboard} alt="dashboard" />}
            >
              Dashboard
              <Box position={"absolute"} right={0}>
                {arrow}
              </Box>
            </Button>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              elevation={0}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>

          <Box marginTop={'145px'}>
          <Typography variant="caption" fontWeight={"600"} color={"#9D9FA1"}>
          P A G E S
          </Typography>

          <Stack direction={'column'} paddingY={'40px'} gap={'20px'}>
          <Button
              sx={{
                padding: "0px",
                width: "100%",
                paddingRight: "70px",
                color: "black",
                fontWeight:'bold',
                fontFamily: "Inter",
                fontSize: "12px",
              }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              startIcon={<img src={help} alt="dashboard" />}
            >
              Help Center
              <Box position={"absolute"} right={0}>
                {arrow}
              </Box>
            </Button>

            <Button
              sx={{
                padding: "0px",
                width: "100%",
                paddingRight: "70px",
                
                fontWeight:'bold',
                color: "black",
                fontFamily: "Inter",
                fontSize: "12px",
              }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              startIcon={<img src={file} alt="dashboard" />}
            >
              File Manager
              <Box position={"absolute"} right={0}>
                {arrow}
              </Box>
            </Button>

          </Stack>
          </Box>
        </Stack>
      </Stack>
    </div>
  );
}
