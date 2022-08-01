import { Box, Grid } from "@mui/material";
import About from "./About";
import ProfilePic from "./ProfilePic";
import styles from '../styles/infoStyles';

export default function Info(){
    const classes = styles();
    return(
        <Box
        className={classes.info}
        >
            <Grid container>
                <Grid item xs={12} md={4}>
                    <ProfilePic />
                </Grid>
                <Grid item xs={12} md={8}>
                    <About />
                </Grid>
            </Grid>
        </Box>
    )
}