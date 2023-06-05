import Offer from '../offer/Offer'
import './ListOffers.scss'

export default function ListOffers() {

  return (
    <>
     <div className='content__listOffers'>
        <h1>Top Offers</h1>
        <div className='content__listOffers--Offer'>
          <div className='content__listOffers--Offer--card offer'>
            <Offer
              imageOferta="./sale-40.jpg"
              title="Hotel Booking"
              description="Avail Hot Deals On Hotel Booking To Any Place"
            />
          </div>
          <div className='content__listOffers--Offer--card offer'>
            <Offer
              imageOferta="./sale-400.jpg"
              title="Upto $400"
              description="Instant Discount On Domestic Hotels"
            />
          </div>
          <div className='content__listOffers--Offer--card offer'>
            <Offer
              imageOferta="./sale-80.jpg"
              title="Holiday Booking"
              description="Weekend Sale For Holiday Bookings"
            />
          </div>
          <div className='content__listOffers--Offer--card offer-show'>
            <Offer
              imageOferta="./sale-50.jpg"
              title="Food Order"
              description="Complimantary Breakfast. Use Code RICAFOOD"
            />
          </div>
          <div className='content__listOffers--Offer--card offer'>
            <Offer
              imageOferta="./cashback-50.jpg"
              title="50% Cashback"
              description="50% Cashback On Every Cab Bookings"
            />
          </div>
        </div>
      </div>
    </>
  )
}
