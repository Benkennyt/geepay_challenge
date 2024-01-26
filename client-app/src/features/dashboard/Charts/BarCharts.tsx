import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Label, Legend } from 'recharts';
import './BarCharts.css' ;
import { useState } from 'react';
import BarChartTooltip from '../../../general/BarChartTooltip';


const BarCharts = () => {
    const [barHover, setBarHover] = useState(-1)
    const [barData, setBarData] = useState<any>({})
   
   console.log(barHover)
    const data = [
    {
        name: 'Jan',
        uv: 45.000,

    },
    {
        name: 'Feb',
        uv: 12.45,
    },
    {
        name: 'Mar',
        uv: 23.780
    },
    {
        name: 'Apr',
        uv: 34.560
    },
    {
        name: 'May',
        uv: 15.670
    },
    {
        name: 'Jun',
        uv: 29.870
    },
    {
        name: 'Jul',
        uv: 18.970
    },
    {
        name: 'Aug',
        uv: 32.090
    },
    {
        name: 'Sep',
        uv: 43.210
    },
    {
        name: 'Oct',
        uv: 22.340
    },
    {
        name: 'Nov',
        uv: 36.7800
    },
    {
        name: 'Dec',
        uv: 40.120
    },
    ];



  return (
    <ResponsiveContainer width={'100%'}  height={'95%'} >
        <BarChart
        data={data}
        margin={{
            top: 10,
            right: 2,
            left: 15,
            bottom: 5,
        }}
        onMouseLeave={()=> {setBarHover(-1)}}
        >
     
        <CartesianGrid  vertical={false} strokeDasharray="4" />
        <XAxis dataKey="name"  axisLine={false} tickLine={false} style={{fontSize:'14px', fontWeight: 600}} tickMargin={20}/>
        <YAxis  tickFormatter={(value) => value.toFixed(3)}  domain={[0,'dataMax + 5.000']}  tickCount={11} axisLine={false} tickLine={false} style={{fontSize:'12px', fontWeight: 600}} tickMargin={20}/>
        <defs>
            <linearGradient id='g1' x1='.5' x2='.5' y2='1'>
                <stop stop-color='#34CAA5'/>
                <stop offset='1' stop-color='#34caa5' stop-opacity='.00'/>
            </linearGradient>
        </defs>
        <Tooltip content={<BarChartTooltip text={barData.uv?.toFixed(3) || '0'}/>} cursor={false} position={{ x: barData.x -23, y: barData.y - 50 }}  allowEscapeViewBox={{ x: true, y: true }}/>
        
        <Legend />
        <Bar dataKey="uv" fill='transparent' animationEasing='ease-in-out' radius={[30,30,0,0]}  onMouseOver={(data) => { 
        setBarData(data)
        }}>
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} width={30} onMouseEnter={() => setBarHover(index) } onMouseLeave={() => setBarHover(-1)} fill={barHover == index ? "url(#g1)" : '#34caa51a'}/>
            ))}
        </Bar>
        </BarChart>
    </ResponsiveContainer>
  );
}
export default BarCharts