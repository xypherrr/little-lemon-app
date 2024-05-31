import footerLogo from '../images/footer-logo.png'

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='row footer-row'>
                <div className='col-sm-12 col-lg-3'>
                <img src={footerLogo} alt='footer-logo' width={120}/>
                </div>
                <div className='col-sm-12 col-lg-3'>
                    <h3>Quick Links</h3>
                    <ul className='footer-list'>
                        <li>About</li>
                        <li>Reservations</li>
                        <li>Menu</li>
                        <li>Order Online</li>
                    </ul>
                </div>
                <div className='col-sm-12 col-lg-3'>
                    <h3>Opening Hours</h3>
                   <div className='row footer-list-row'>
                    <div className='col-6'>Monday</div>
                    <div className='col-6'>1PM to 10PM</div>
                   </div>
                   <div className='row footer-list-row'>
                    <div className='col-6'>Tuesday</div>
                    <div className='col-6'>1PM to 10PM</div>
                   </div>
                   <div className='row footer-list-row'>
                    <div className='col-6'>Wednessday</div>
                    <div className='col-6'>1PM to 10PM</div>
                   </div>
                </div>
                <div className='col-sm-12 col-lg-3'>
                    <h3>Contact Us</h3>
                    <ul className='footer-list'>
                        <li>9999990000</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer