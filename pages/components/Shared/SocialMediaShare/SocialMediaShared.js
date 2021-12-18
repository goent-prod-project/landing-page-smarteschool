import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
} from "react-share";
import SocmedIcon from "./SocmedIcon";

const SocialMediaShared = ({ news }) => {
  const propsSocMed = {
    title: `"${news?.title}"`,
    url: "https://smarteschool.id" + news?.url,
    quote: `"${news?.title}"`,
    hashtag: news?.title,
  };

  const propsSocMedIcon = {
    style: {
      minHeight: 30,
      maxHeight: 30,
      minWidth: 30,
      maxWidth: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div className="social-media-shared d-flex align-items-center">
      <div>
        <FacebookShareButton {...propsSocMed}>
          <SocmedIcon
            {...propsSocMedIcon}
            className="bg-fb"
            icon={
              <img
                src="/img/icon-share-facebook.svg"
                alt="Facebook"
                className="me-3 pointer"
              />
            }
          />
        </FacebookShareButton>
        <TwitterShareButton {...propsSocMed}>
          <SocmedIcon
            {...propsSocMedIcon}
            className="bg-twitter"
            icon={
              <img
                src="/img/icon-share-twitter.svg"
                alt="Twitter"
                className="me-3 pointer"
              />
            }
          />
        </TwitterShareButton>
        <WhatsappShareButton {...propsSocMed}>
          <SocmedIcon
            {...propsSocMedIcon}
            className="bg-twitter"
            icon={
              <img
                src="/img/icon-share-wa.svg"
                alt="Whatsapp"
                className="me-3 pointer"
              />
            }
          />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialMediaShared;
