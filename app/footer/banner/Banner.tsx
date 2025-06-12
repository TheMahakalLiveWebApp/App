import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FantasyAdsPage = () => {
    // WhatsApp details — easy to update
    const whatsappNumber = "917037803299"; // No "+" and use international format
    const whatsappMessage = "Hi, I want a id with Bonus."; // Custom message

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

                            {/* WhatsApp clickable block */}
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-link"
                            >
                                <div className="whatsapp-icon">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </div>
                                <div className="link-text">Click Here</div>
                            </a>

                        </div>
                        <div className="whatsapp-number">
                            <p>+91 7037803299</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FantasyAdsPage;
