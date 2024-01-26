import './Tooltip.css'



const Tooltip = (props: any) => {
    const {text, tooltipVisible} = props
  return (
    <div className={tooltipVisible ? "tooltip-container" : "tooltip-container-hide"}>
        <div className="tooltip">{text}</div>
    </div>
  )
}

export default Tooltip