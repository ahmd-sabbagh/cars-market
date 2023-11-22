import React from "react";
import "./Share.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  RedditShareButton,
  FacebookMessengerShareButton,
} from "react-share";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaRedditAlien,
  FaFacebookMessenger,
} from "react-icons/fa";
import ClipboardCopy from "../../../../../../Components/CopyTextFun/CopyTextFun";

function ShareComponent() {
  const linkShare = window.location.href;
  return (
    <div className="ShareComponent">
      <div className="share-icon d-flex align-items-center flex-wrap justify-content-center">
        <span className="face flex-c">
          <FacebookShareButton
            url={linkShare}
            quote={"Gate In Article"}
            hashtag="#Gate_In"
          >
            <FaFacebookSquare />
          </FacebookShareButton>
        </span>
        <span className="twi flex-c">
          <TwitterShareButton
            url={linkShare}
            quote={"Gate In Article"}
            hashtag="#Gate_In"
          >
            <FaTwitter />
          </TwitterShareButton>
        </span>
        <span className="twi flex-c">
          <RedditShareButton url={linkShare}>
            <FaRedditAlien />
          </RedditShareButton>
        </span>
        <span className="twi flex-c">
          <FacebookMessengerShareButton url={linkShare}>
            <FaFacebookMessenger />
          </FacebookMessengerShareButton>
        </span>
        <span className="what flex-c">
          <WhatsappShareButton
            url={linkShare}
            quote={"Gate In Article"}
            hashtag="#Gate_In"
          >
            <FaWhatsapp />
          </WhatsappShareButton>
        </span>
        <span className="linked flex-c">
          <LinkedinShareButton
            url={linkShare}
            quote={"Gate In Article"}
            hashtag="#Gate_In"
          >
            <FaLinkedin />
          </LinkedinShareButton>
        </span>
      </div>
      {/*  */}
      <ClipboardCopy copyText={linkShare} />
    </div>
  );
}

export default ShareComponent;
