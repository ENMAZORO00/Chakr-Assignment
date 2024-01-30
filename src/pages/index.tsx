import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Images from "../assets/images";
import RevenueComponent from "../components/revenueComponent/revenueComponent";
import CustomerComponent from "../components/customerComponent/customerComponent";
import ChartComponents from "../components/chartComponents/chartComponents";

const Home = () => {
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.sidenav}>
          <div className={styles.logo}>
            <Image src={Images.logo} alt="logo" />
          </div>
          <div style={{height:'660px',padding:'5px'}}>
            <div
              style={{
                borderRadius: "20px",
                border: "1px solid var(--Light-Gray, #F1F1F1)",
                background: "var(--White, #FFF)",
              }}
              className={styles.sidenavcomponents}
            >
              <Image src={Images.searchicon} alt="logo" />
              <p >Search</p>
            </div>
            <div className={styles.sidenavcomponents}>
              <Image src={Images.customericon} alt="logo" />
              <p>Customers</p>
              <Image src={Images.close} alt="logo"/>
            </div>
            <div className={styles.sidenavcomponents}>
              <Image src={Images.reporticon} alt="logo" />
              <p>All reports</p>
            </div>
            <div className={styles.sidenavcomponents}>
              <Image src={Images.geographyicon} alt="logo" />
              <p>Geography</p>
            </div>
            <div className={styles.sidenavcomponents}>
              <Image src={Images.conversationicon} alt="logo" />
              <p>Conversations</p>
            </div>
            <div className={styles.sidenavcomponents}>
              <Image src={Images.dealsicon} alt="logo" />
              <p>Deals</p>
            </div>
            <div className={styles.sidenavcomponents}>
              <Image src={Images.exporticon} alt="logo" />
              <p>Export</p>
            </div>
          </div>
          <div>
            <div className={styles.sidenavcomponents}>
              <div>
                <Image src={Images.avatar} alt="logo"/>
              </div>
              <div style={{display:'flex',flexDirection:'column'}}>
                <p>Gustavo Xavier</p>
                <Image src={Images.admin} alt="logo"/>
              </div>
            </div>
            <div className={styles.sidenavcomponents}>
              <Image src={Images.settingicon} alt="logo" />
              <p>Settings</p>
            </div>
            <div className={styles.sidenavcomponents}>
              <Image src={Images.logouticon} alt="logo" />
              <p>Log out</p>
            </div>
          </div>
        </div>
        <div style={{paddingLeft:'10px',width: '-webkit-fill-available',gap:'10px',display:'flex',flexDirection:'column'}}>
          <RevenueComponent/>
          <CustomerComponent/>
          <ChartComponents/>
        </div>
      </div>
    </>
  );
};

export default Home;
