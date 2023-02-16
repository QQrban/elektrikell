import { Container } from 'react-bootstrap'
import React from 'react'

const FooterHighPrice = () => {
  return (
    <Container className="text-center mt-3 fw-light">
      <div className='mb-1 fs-4'>Järgmine tiputund on</div>
      <div className='fs-1 fw-bold'>16:00st 17:00ni</div>
      <div className='fs-5 mb-2'>Siis on kilovatt-tunni hind <span className='text-danger fw-normal'>7.80</span> senti, mis on <span className='fw-bold text-danger'>53%</span> kallim kui praegu</div>
      <div className='w-75 text-center mx-auto'>Soovitame tiptundide ajal vähendada elektri tarbimist, et aidata kaasa Euroopa ühisele eesmärgile alandada tiputundidel -5% elektri tarbmist ja vähendada maagaasi nõudlust. <a href='https://www.consilium.europa.eu/et/infographics/eu-measures-to-cut-down-energy-bills/'>Loe lähemalt</a></div>
    </Container>
  )
}

export default FooterHighPrice;