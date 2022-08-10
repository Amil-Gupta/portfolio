import { Box, Card, Typography } from "@mui/material"

export default function AboutTile(props){
    return(

        <>
            <Box
                sx={{ ...props.styles.row }}
            >
                <Card
                    sx={{ ...props.styles.rowName }}
                >
                    <Typography
                        variant='button'
                    >
                        {props.name}
                    </Typography>
                </Card>
                <Card
                    sx={{ ...props.styles.rowValue }}
                >
                    <Typography
                        variant='string'
                    >
                        {props.value}
                    </Typography>
                </Card>
            </Box>
        </>
    )
}