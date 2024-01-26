import './BarChartTooltip.css'

const BarChartTooltip = (props:any) => {
  const {text} = props
  return (
    <div className={text == '0' ? "barchart-tooltip-container-hide" : "barchart-tooltip-container"}>
        <div className="barchart-tooltip">{text}</div>
    </div>
  )
}

export default BarChartTooltip