import { Box, Typography, Button, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const HomeIntro = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/signup')
  }
  return (
    <Box>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Typography
          variant="h3"
          fontWeight="bold"
          color="black"
          width="15ch"
          lineHeight={2}
        >
          We Handle Your Sign Ups In A Controlled Way
          <Button
            sx={{
              borderRadius: "20px",
              paddingX: "2rem",
            }}
            variant="contained"
            size="large"
            color="secondary"
            endIcon={<ArrowForward />}
            onClick={handleClick}

          >
            {" "}
            Get Started
          </Button>
        </Typography>
        <img width="600px" alt="" src="/images/jombotron.jpg" />
      </Stack>
    </Box>
  );
};

export default HomeIntro;
