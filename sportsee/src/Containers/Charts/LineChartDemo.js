import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "L",
    uv: 1000,
    amt: 2400
  },
  {
    name: "M",
    uv: 1500,
    amt: 2210
  },
  {
    name: "M",
    uv: 2000,
    amt: 2290
  },
  {
    name: "J",
    uv: 2780,
    amt: 2000
  },
  {
    name: "V",
    uv: 1890,
    amt: 2181
  },
  {
    name: "S",
    uv: 2390,
    amt: 2500
  },
  {
    name: "D",
    uv: 3490,
    amt: 2100
  }
];

function LineChartDemo(props) {
  return (

     <LineChart
      width={250}
      height={270}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="red" />
    </LineChart>


  
  ); 
}
export default LineChartDemo;
