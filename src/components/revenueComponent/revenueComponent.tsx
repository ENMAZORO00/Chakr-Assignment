import React from "react";
import styles from "./revenueComponent.module.css";
import Images from "../../assets/images";
import Image from "next/image";

const RevenueComponent = () => {
  return (
    <>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'20px'}}>
        <div className={styles.box}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "var(--Black, #131313)",
                }}
              >
                Revenues
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <p
                  style={{
                    color: "var(--Black, #131313)",
                    fontFamily: "Inter",
                    fontSize: "48px",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  15%
                </p>
                <Image src={Images.uparrow} alt="logo" />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "var(--Dark-Gray, #454545)",
                  }}
                >
                  Increase compared to last week
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "var(--Dark-Gray, #454545)",
                }}
              >
                Revenues report
              </p>
              <Image src={Images.sidearrow} alt="logo" />
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "var(--Black, #131313)",
                }}
              >
                Lost deals
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <p
                  style={{
                    color: "var(--Black, #131313)",
                    fontFamily: "Inter",
                    fontSize: "48px",
                    fontWeight: "500",
                    margin: "0",
                  }}
                >
                  4%
                </p>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "var(--Dark-Gray, #454545)",
                  }}
                >
                  You closed 96 out of 100 deals
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "var(--Dark-Gray, #454545)",
                }}
              >
                All deals
              </p>
              <Image src={Images.sidearrow} alt="logo" />
            </div>
          </div>
        </div>
        <div className={styles.Box2}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
                <p style={{fontFamily:'Inter',fontSize:'20px',fontWeight:'600',color: 'var(--Black, #131313)'}}>Quarter goal</p>
            </div>
            <div>
                <Image src={Images.quatoricon} alt="logo"/>
            </div>
            <div style={{display:'flex',alignItems:'baseline'}}>
                <p style={{fontFamily:'Inter',fontSize:'14px',fontWeight:'400',color: 'var(--Black, #131313)'}}>All goals</p>
                <Image src={Images.sidearrow} alt="logo"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default RevenueComponent;
