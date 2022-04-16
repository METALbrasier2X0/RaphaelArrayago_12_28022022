import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';




function RadialChartco(props) {

 const data = [
  
  {
    name: 'Progress',
    uv: props.progress * 100,
    pv: 100,
    fill: '#e60000',
  },
   {
    name: 'max',
    uv: 100,
    pv: 15,
    fill: '#e60000',
  }
];

class CustomizedLabel extends PureComponent {
  render() {
    const { value } = this.props;
    return (
      <>  
      <text  x='42%' y={110}  className='labelRadial' position='center' name={value} fill= '#000'>
        {value}%
       
      </text>
       <text  x='38.5%' y={140} className='labelRadialObj' position='center' name={value} fill= '#515151'>
        De votre 
       
       </text>
       <text x='40%' y={160} className='labelRadialObj' position='center' name={value} fill= '#515151'>
        objectif
      </text>
        </>  
    );
  }
}

  return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart  cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={10} data={data}>
          <RadialBar
          label={<CustomizedLabel />}
            background
            clockWise = {false}
            dataKey="uv"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
export default RadialChartco;
