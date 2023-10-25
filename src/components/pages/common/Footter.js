import React, { useEffect } from 'react';
import { BackTop } from 'antd';

function CustomBackTop() {
  useEffect(() => {
    // Show the back-to-top button when the user scrolls down 100 pixels
    const scrollListener = () => {
      if (window.scrollY > 100) {
        document.querySelector('.ant-back-top').style.display = 'block';
      } else {
        document.querySelector('.ant-back-top').style.display = 'none';
      }
    };

    window.addEventListener('scroll', scrollListener);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div id="footer" className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Tech</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
          <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2020 Tech</div>
      </div>
      <BackTop>
        <div className="goTop"> 
          <i className="fas fa-arrow-circle-up"></i>
        </div>
      </BackTop>
    </div>
  );
}

export default CustomBackTop;
