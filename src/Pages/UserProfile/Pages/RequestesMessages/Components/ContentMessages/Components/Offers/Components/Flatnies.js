import React from 'react'
import { trans } from '../../../../../../../../../Components/Navbar/Navbar'

function Flatnies({from,to}) {
  return (
    <div className='Flatnies d-flex flex-column gap-2'>
        <div className="current d-flex align-items-center gap-1">
            <span className='fs-14-400 text-color'>{trans("vendor.orders.car_location")}</span>
            <span className='fs-16-500'>{from}</span>
        </div>
        <div className="interFace d-flex align-items-center gap-1">
            <span className='fs-14-400 text-color'>{trans("vendor.orders.car_interface")}</span>
            <span className='fs-16-500'>{to}</span>
        </div>
    </div>
  )
}

export default Flatnies