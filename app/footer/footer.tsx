"use client"
import Link from "next/link"
import "./footer.scss"
import MyAd from "../myads/myads"
import FantasyAdsPage from "./banner/Banner"
// import FantasyAdsPage from "./banner/Banner"

const Footer = () => {
  return (
    <>
    <MyAd/>
    <FantasyAdsPage/>
    <footer className="footer">
      <div className="footer-web-info">
        <div className="footer-branding">
          <h2 className="footer-name">
            <Link href="/" >Mahakal</Link>
          </h2>
          <p className="footer-tagline">Cricket Fantasy</p>
        </div>

        <div className="otherlinks">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><Link href="/"  >Home</Link></li>
            <li><Link href="/about" >About Us</Link></li>
            <li><Link href="/faq"  >FAQ</Link></li>
            <li><Link href="/how-to-play" >How To Play</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/responsible-game-policy">Responsible Gaming</Link></li>
            <li><Link href="/fair-play-policy" >Fair Play Policy</Link></li>
            <li><Link href="/terms-and-conditions"  >Terms & Conditions</Link></li>
            <li><Link href="/disclaimer"  >Disclaimer & Legit Notice</Link></li>
            <li><Link href="/contact"  >Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-disclaimer">
        <h3 className="footer-heading">Disclaimer</h3>
        <p className="footer-info">
          Cricket Fantasy does not offer any real-money betting, gambling, or cash prizes. All activities on this platform are for entertainment and skill development only. Eligibility restrictions apply as per Indian law. By registering, you confirm that you are 18 or older and comply with local regulations. These services are not available in the states of Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, Telangana, and Tamil Nadu, as the law in these states prohibits participation.
        </p>
      </div>
    </footer>
    </>
  )
}

export { Footer }
