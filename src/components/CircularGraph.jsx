import { Stack } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [22, 16, 27, 35],
      backgroundColor: ["#FEC102", "#E2FF32", "#55DBDB", "#57CC78"],
      options: {
        cutout: 50,
      },
      borderColor: ["#FEC102", "#E2FF32", "#55DBDB", "#57CC78"],
      borderWidth: 1,
    },
  ],
};

export default function CircularGraph() {
  return (
    <Stack width={"175px"} height={'270px'} justifyContent={'center'} >
      <Doughnut className="circleGraph" data={data} />

      <Stack direction={"column"} paddingY={2} width={'100%'}>
        <Stack direction={"row"}>
          <Stack flexGrow={1} gap={"2px"}>
             <div className="params">
            <div className="dot1" id="1"></div>
            Spinning
              </div>
          </Stack>
          <Stack paddingTop={'3px'}>22%</Stack>
        </Stack>

        <Stack direction={"row"}>
          <Stack  flexGrow={1} gap={"2px"}>

            <div className="params">

            <div className="dot2"  id="2"></div>
            Transportation
            </div>
          </Stack>
          <Stack paddingTop={'3px'}>22%</Stack>
        </Stack>

        <Stack direction={"row"}>
          <Stack flexGrow={1} gap={"2px"}>
          <div className="params">
            <div className="dot3"  id="3"></div>
            Carding
              </div>
          </Stack>
          <Stack paddingTop={'3px'}>22%</Stack>
        </Stack>

        <Stack direction={"row"} width={'100%'}>
          <Stack flexGrow={1} gap={"2px"}>
          <div className="params">
            <div className="dot4"  id="4"></div>
            Heating & Cooling
              </div>
          </Stack>
          <Stack paddingTop={'3px'}>22%</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
