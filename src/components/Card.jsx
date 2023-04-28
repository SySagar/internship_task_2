import { Stack, Typography } from "@mui/material";

export default function Card() {
  return (
    <div>
      <Card variant="outlined">
        <Typography>title</Typography>

        <Stack direction={'column'}>
        <Typography>number</Typography>t
        <Typography>co2e</Typography>
        </Stack>

        <Typography sx={{background:'#DCFFF5',borderRadius:'20px', padding:'2px'}}>-45%</Typography>
      </Card>
    </div>
  )
}
