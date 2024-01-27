import './Tooltip.css'



const Tooltip = (props: any) => {
    const {text, tooltipVisible, tooltipVisible2, text2} = props
  return (
    <>
      <div className={tooltipVisible ? "tooltip-container" : "tooltip-container-hide"}>
          <div className="tooltip">{text}</div>
      </div>
      <div className={tooltipVisible2 ? "tooltip-container" : "tooltip-container-hide"}>
          <div className="tooltip">{text2}</div>
      </div>
    </>
  )
}

export default Tooltip