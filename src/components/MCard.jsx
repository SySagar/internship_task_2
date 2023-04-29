import { Card, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function MCard({title, number, percentage}) {
  return (
    <div>
      <Card className="card" sx={{width:'275px', height:'190px' , borderRadius:'12px', padding:'20px' , gap:'8px'}} variant="outlined">
        <Typography color={'#5F6980'} fontFamily={'Inter'} fontWeight={'400'} variant="h6" sx={{width:'100%', minHeight:'26px'}}>{title}</Typography>

        <Stack direction={'column'}>
        <Typography fontFamily={'Inter'} variant="h3" sx={{width:'100%', height:'100%',}}>{number}</Typography>
        <Typography fontFamily={'Inter'} variant="h5" sx={{ paddingBottom:'10px',color:'#929292'}}>CO2e</Typography>
        </Stack>

        <Typography  bottom={0} sx={{background:'#DCFFF5',borderRadius:'20px',marginTop:'8px', paddingX:'18px', paddingY:'5px',width:'fit-content', color:'#20C997'}}>{percentage}</Typography>
      </Card>
    </div>
  )
}
