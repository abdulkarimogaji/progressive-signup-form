import { AppBar, Toolbar, Stack, Button, IconButton } from "@mui/material";
import { Facebook, AppRegistration } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/signup?form_id=1')
  }
  return (
    <AppBar color="transparent" position="static">
        <Toolbar sx={{
          display: "flex",
          justifyContent: "space-around"
        }}>
            <IconButton>
              <Facebook />
            </IconButton>
            <Stack direction="row" spacing={6}>
                <Link to="/">Home</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Our Team</Link>
                <Link to="/">Contact</Link>
            </Stack>
            <Button sx={{
              borderRadius: "20px",
              paddingX: "2rem"
            }} variant="outlined" size="large" color="secondary" endIcon={<AppRegistration/>}
            onClick={handleClick}
            > Sign Up </Button>
        </Toolbar>
    </AppBar>
  );
};

export default NavBar;
