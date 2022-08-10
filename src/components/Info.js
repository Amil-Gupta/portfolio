import { Box, Grid } from "@mui/material";
import About from "./About";
import ProfilePic from "./ProfilePic";
import styles from '../styles/infoStyles';

export default function Info(){
    return(
        <Box
        sx={{...styles.info}}
        >
            <Grid container>
                <Grid item xs={12} md={4}>
                    <ProfilePic />ddd
                </Grid>
                <Grid item xs={12} md={8}>
                    <About />
                </Grid>
            </Grid>
        </Box>
    )
}