import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "@mui/material/Link";

const Nav = () => {
  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{
          borderBottom: (theme) => `2px solid ${theme.palette.primary.dark}`,
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography color="inherit" variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Pure Payment
          </Typography>
          <nav>
            <Link
              variant="button"
              color="secondary.dark"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Features
            </Link>
            <Link
              variant="button"
              color="secondary.dark"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Support
            </Link>
            <Link
              variant="button"
              color="secondary.dark"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
              underline="none"
            >
              Enterprise
            </Link>
            <Button
              sx={{ my: 1, mx: 1.5 }}
              variant="outlined"
              color="secondary"
            >
              Login
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
