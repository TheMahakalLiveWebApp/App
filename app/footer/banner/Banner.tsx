import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const FantasyAdsPage = () => {
    return (
        <>
            <div className="fantasy-banner-container">
                <div className="banner-container">
                    <div className="fantasy-banner-titles">
                        <div className="hindi-heading">एड्स चलवाने के लिए व्हाट्सएप्प करें</div>
                        <div className="heading">FANTASY ADS MANAGEMENT</div>
                    </div>
                    <div className="contact-links">
                        <div className="contact-links-container">

                            <div className="whatsapp-link">
                                <div className="whatsapp-icon">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </div>
                                <div className="link-text">Click Here</div>
                            </div>
                        </div>
                        <div className="whatsapp-number">
                            <p>+917037803299</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default FantasyAdsPage;