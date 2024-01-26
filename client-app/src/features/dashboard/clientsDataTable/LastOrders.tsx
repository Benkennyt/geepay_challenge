import './LastOrders.css'
import { ClientPayment } from './ClientsPaymentData';
import { DocumentDownloadIcon } from '../../../assets/SVG';


const LastOrders = () => {
  return (
    <div className='last-orders-container'> 
        <div className="last-orders-header">
            <p>Last Orders</p>
            <a href=''>See All</a>
        </div>
        
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Invoice</th>
                    </tr>
                </thead>
                {ClientPayment.map((CPayment, index) => {
                return (
                    <tbody key={index}>
                        <tr>
                            <td className="client-name-payment"><img src={CPayment.displayImage} alt="" /> {CPayment.name}</td>
                            <td className='client-date-payment'>{CPayment.date}</td>
                            <td className='client-amount-payment'>{CPayment.amount}</td>
                            <td className={CPayment.status == 'Paid' ? 'client-status-payment paid' : 'client-status-payment refund'}>{CPayment.status}</td>
                            <td><a href=""><DocumentDownloadIcon/> View</a></td>
                        </tr>
                    </tbody>
                );
                })}
            </table>
    </div>
  )
}

export default LastOrders