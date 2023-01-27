import React from "react";

const SocialList = ({ data }) => {
  const { social_links } = data;
  return (
    <>
      {social_links.length !== 0 &&
        social_links.map((social) => {
          return (
            <li>
              <a href={`${social.link}`} class={`btn social-icon ${social.channel}`}>
              {social.channel}
              </a>
            </li>
          );
        })}
    </>
  );
};

export default SocialList