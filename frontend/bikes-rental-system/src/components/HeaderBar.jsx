import { Box, Typography, AppBar, Toolbar } from "@mui/material";

const HeaderBar = ({ headTitle, paragraph }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", cursor: "pointer" }
            }}
          >
            {headTitle}
            <Typography
              variant="p"
              component="div"
              sx={{
                fontWeight: "100",
                fontSize: "1rem"
              }}
            >
              {paragraph}
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderBar;
