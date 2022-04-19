import { Box, Typography, Button, Stack, Paper, Grid } from "@mui/material";
import { CheckSharp } from "@mui/icons-material";



const ErrorBox = () => {
    return <Box sx={{
        backgroundColor: "lightgray",
        padding: "1rem",
        borderRadius: "5px"
    }} >
        <Typography fontSize="0.8rem" color="InfoText" m={2}>
            Email address must Be a valid email Address <CheckSharp color="success" fontSize="small" />
        </Typography>
    </Box>
}

export default ErrorBox;