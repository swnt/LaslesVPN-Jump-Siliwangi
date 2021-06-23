import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.wrapFooter}>
      <div className={styles.subscribe}>
        <div className={styles.subscribeLeft}>
          <h1>
            Subscribe Now for Get Special Features!
            </h1>
          <p>
            Let's subscribe with us and find the fun.
            </p>
        </div>
        <div className={styles.subscribeRight}>
          <button className={styles.btnSub} type="button">Subscribe Now</button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerAbout}>
          <img src="/Logo.png"></img>
          <h1>
            <span>LaslesVPN</span> is a private virtual network that has unique features and has high security.
            </h1>
          <div className={styles.footerAboutImg}>
            <img src="/facebook.png"></img>
            <img src="/twitter.png"></img>
            <img src="/instagram.png"></img>
          </div>
          <p>
            ©2020Lasles<span>VPN</span>
          </p>
        </div>
        <div className={styles.footerProduct}>
          <h1>
            Product
            </h1>
          <p>Download</p>
          <p>Pricing</p>
          <p>Locations</p>
          <p>Server</p>
          <p>Countries</p>
          <p>Blog</p>
        </div>
        <div className={styles.footerEngage}>
          <h1>
            Engage
            </h1>
          <p>LaslesVPN ?</p>
          <p>FAQ</p>
          <p>Tutorial</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className={styles.footerEarn}>
          <h1>
            Earn Money
            </h1>
          <p>Affiliate</p>
          <p>Become Partner</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;