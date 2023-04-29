import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Stack } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      backgroundColor: '#FEC102',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      backgroundColor: '#E2FF32',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      backgroundColor: '#55DBDB',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 4',
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      backgroundColor: '#57CC78',
      stack: 'Stack 0',
    }
  ],
};

export function BarGraph() {
  return (
  <Stack  height={'320px'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
  <Bar options={options} data={data} />
  </Stack>
  );
}
