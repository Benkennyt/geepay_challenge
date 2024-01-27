import { BoxTickIcon, BullishIcon, BullishPercentageIcon, ThreeDRotateIcon, BearishIcon, BearishPercentageIcon, ShoppingCartIcon, DollarCoinIcon } from '../../../assets/SVG'
import './Totals.css'

const Totals = () => {
  return (
    <div className="totals-chart">
      <div className="total-order totals">
        <div className="total-icons">
          <div className="total-top-left-icon">
            <BoxTickIcon/>
          </div>
          <BullishIcon/>
        </div>
        <div className="total-figure">
          <p>Total Order</p>
          <p>350</p>
        </div>
        <div className="total-bottom-remark">
          <div className="total-percentage green-percent">
            <BullishPercentageIcon/>
            <p>23,5%</p>
          </div>
          <p className="previous-month">vs. previous month</p>
        </div>
      </div>
      <div className="total-refund totals">
        <div className="total-icons">
            <div className="total-top-left-icon">
              <ThreeDRotateIcon/>
            </div>
            <BearishIcon/>
          </div>
          <div className="total-figure">
            <p>Total Refund</p>
            <p>270</p>
          </div>
          <div className="total-bottom-remark">
            <div className="total-percentage red-percent">
              <BearishPercentageIcon/>
              <p>23,5%</p>
            </div>
            <p className="previous-month">vs. previous month</p>
          </div>
      </div>
      <div className="average-sales totals">
        <div className="total-icons">
          <div className="total-top-left-icon">
            <ShoppingCartIcon/>
          </div>
          <BearishIcon/>
        </div>
        <div className="total-figure">
          <p>Average Sales</p>
          <p>1567</p>
        </div>
        <div className="total-bottom-remark">
          <div className="total-percentage red-percent">
            <BearishPercentageIcon/>
            <p>23,5%</p>
          </div>
          <p className="previous-month">vs. previous month</p>
        </div>
      </div>
      <div className="total-income totals">
        <div className="total-icons">
          <div className="total-top-left-icon">
            <DollarCoinIcon/>
          </div>
          <BullishIcon/>
        </div>
        <div className="total-figure">
          <p>Total Income</p>
          <p>$350.000</p>
        </div>
        <div className="total-bottom-remark">
          <div className="total-percentage green-percent" >
            <BullishPercentageIcon/>
            <p>23,5%</p>
          </div>
          <p className="previous-month">vs. previous month</p>
        </div>
      </div>
    </div>
  )
}

export default Totals