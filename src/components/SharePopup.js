import React from 'react'
import {
    FacebookShareButton,
    FacebookMessengerShareButton,
    WhatsappShareButton,
    EmailShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    EmailIcon, 
    TwitterIcon,
    LinkedinIcon
  } from 'react-share';

function SharePopup(props) {
    const size = '32'
    const shareUrl = "http://localhost:3000/pet"

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup__inner">
                
                <div className="popup__icon-container">
                    <button className="btn-close" onClick={()=>props.setTrigger(false)}>
                        <i class="fas fa-times"></i>
                    </button>
                    <FacebookShareButton url={shareUrl} quote={'This pet is ready to be adopted'}>
                        <FacebookIcon size={size} round={true}/>
                    </FacebookShareButton>

                    <FacebookMessengerShareButton url={shareUrl} appId={'https://www.facebook.com/magda.sokolovic'}>
                        <FacebookMessengerIcon size={size} round={true}/>
                    </FacebookMessengerShareButton>

                    <LinkedinShareButton url={shareUrl} title={'Adopt this pet'} source={"http://localhost:3000/pet"}>
                        <LinkedinIcon size={size} round={true}/>
                    </LinkedinShareButton>

                    <WhatsappShareButton url={shareUrl} quote={'This pet is available for adoption'}>
                        <WhatsappIcon size={size} round={true}/>
                    </WhatsappShareButton>

                    <TwitterShareButton url={shareUrl} title={'Adopt me!'}>
                        <TwitterIcon size={size} round={true}/>
                    </TwitterShareButton>

                    <EmailShareButton url={shareUrl} subject={"Check out this pet ad"}>
                        <EmailIcon size={size} round={true}/>
                    </EmailShareButton>
                </div>
				
            </div>
        </div>
    ) : "";
        
    
}

export default SharePopup
