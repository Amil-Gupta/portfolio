import { Box, Card, Paper, Typography } from "@mui/material";
import styles from "../styles/aboutStyles";

export default function About(){
    const data = [
        {
            key: 'Name',
            value: 'Amil Utkarsh Gupta'
        },
        {
            key: 'Age',
            value: 21,
        },
        {
            key: 'Occupation',
            value: 'College Student'
        }
    ]

    const AboutTile = (props)=>(
        <Box
        sx={{...styles.row}}
        >
            <Card
            sx={{...styles.rowName}}
            >
                <Typography
                variant='button'
                >
                    {props.name}
                </Typography>
            </Card>
            <Card
            sx={{...styles.rowValue}}
            >
                <Typography
                variant='string'
                >
                    {props.value}
                </Typography>
            </Card>
        </Box>
    )

    return(
        <Paper
        sx = {{...styles.about}}
        elevation = {10}
        >
            {
                data.map((row)=>(
                    <AboutTile key={row.key} name={row.key} value={row.value} />
                ))
            }
        </Paper>
    )
}