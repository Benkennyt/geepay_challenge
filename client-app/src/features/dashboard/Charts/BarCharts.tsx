import './BarCharts.css'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Label, Legend } from 'recharts';
import { useState } from 'react';
import BarChartTooltip from '../../../general/BarChartTooltip';
import { DownToggleIcon } from '../../../assets/SVG';


const BarCharts = (props: any) => {
    const {handleToggle, handleSortToggle,toggleSort, changeSort, isToggled} = props;
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
    <div className="barchart-container">
        <div className="barchart-header">
            <p>Sales Trend</p>
            <div className="sortby">
                <p>Sort by:</p>
                <button onClick={() => handleToggle(2)} className="weekly">
                <p>{changeSort }</p>
                <DownToggleIcon/>
                </button>
            </div>
            <div className={toggleSort ? "sortby-options" : "sortby-options-hide"}>
                <div className={toggleSort ? "sortby-options-1" : "sortby-options-hide-1"}>
                <button onClick={() => handleSortToggle('monthly')}><p>Monthly</p></button>
                <button onClick={() => handleSortToggle('weekly')}><p>Weekly</p></button>
                <button onClick={() => handleSortToggle('3 days')}><p>3 days</p></button>
                <button onClick={() => handleSortToggle('today')}><p>Today</p></button>
                </div>
            </div>
        </div>
        <div className="barchart-container-1">
            <ResponsiveContainer width={'100%'} height={'100%'} minWidth={568}>
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
                <XAxis  dataKey="name"  axisLine={false} tickLine={false} style={{fontSize:'14px', fontWeight: 600, fill: isToggled ? '#8892b0' : '#525252'}} tickMargin={20}/>
                <YAxis   tickFormatter={(value) => value.toFixed(3)}  domain={[0,'dataMax + 5.000']}  tickCount={11} axisLine={false} tickLine={false} style={{fontSize:'12px', fontWeight: 600 ,fill: isToggled ? '#8892b0' : '#525252' }} tickMargin={20}/>
                <defs>
                    <linearGradient id='g1' x1='.5' x2='.5' y2='1'>
                        <stop stop-color='#34CAA5'/>
                        <stop offset='1' stop-color='#34caa5' stop-opacity='.00'/>
                    </linearGradient>
                </defs>
                <Tooltip content={<BarChartTooltip text={barData.uv?.toFixed(3) || '0'}/>} cursor={false} position={{ x: barData.x -23, y: barData.y - 50 }}  allowEscapeViewBox={{ x: true, y: true }}/>
                
                <Legend />
                <Bar dataKey="uv"  fill='transparent' animationEasing='ease-in-out' radius={[30,30,0,0]}  onMouseOver={(data) => { 
                setBarData(data)
                }}>
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} width={30}  onMouseEnter={() => setBarHover(index) } onMouseLeave={() => setBarHover(-1)} fill={barHover == index ? "url(#g1)" : '#34caa51a'}/>
                    ))}
                </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
export default BarCharts