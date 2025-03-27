import styled from "./footer.module.css"
import React from 'react';
const Footer = () => {
  return (
    <footer>
      <div className={styled.container}>
        <div className={styled.footerContent}>
          <div>
            <h5>Follow Us</h5>
            <div className={styled.footerSocial}>
              <a href="https://www.linkedin.com/in/rafi-ahmad-khatibi-0244162a7/">Facebook</a>
              <a href="https://github.com/RafiKhatibi/">GitHub</a>
              <a href="https://www.linkedin.com/in/rafi-ahmad-khatibi-0244162a7/">Linkedin</a>
            </div>
          </div>
        </div>
        <div className={styled.footerBottom}>
          <p> {new Date().getFullYear()} Bradaran Khatebi Company.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
