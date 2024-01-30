import React from 'react'
import styles from './customerComponent.module.css';
import Image from 'next/image';
import Images from '../../assets/images';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
import Graph from '../graph/graph';

const CustomerComponent = () => {
  return (
    <>
    <div style={{display:'flex'}}>
        <div className={styles.box}>
            <div style={{padding:'15px',width: '-webkit-fill-available'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'30px'}}>
                <p>Customers</p>
                <div style={{display:'flex',alignItems:'baseline'}}>
                <p>Sort by Newest</p>
                <Image src={Images.bottomicon} alt='logo'/>
                </div>                
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
                  <div style={{
                    display: 'flex',
                    // padding: '16px',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div>
                        <Image src={Images.image1} alt='logo'/>
                    </div>
                    <div>
                        <p style={{fontSize:'14px',fontWeight:'500',fontFamily:'Inter'}}>Chris Friedkly</p>
                        <p style={{fontSize:'12px',fontWeight:'400',fontFamily:'Inter'}}>Supermarket Villanova</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    // padding: '16px',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div>
                        <Image src={Images.image2} alt='logo'/>
                    </div>
                    <div>
                        <p style={{fontSize:'14px',fontWeight:'500',fontFamily:'Inter'}}>Maggie Johnson</p>
                        <p style={{fontSize:'12px',fontWeight:'400',fontFamily:'Inter'}}>Oasis Organic Inc.</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    // padding: '16px',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div>
                        <Image src={Images.image3} alt='logo'/>
                    </div>
                    <div>
                        <p style={{fontSize:'14px',fontWeight:'500',fontFamily:'Inter'}}>Gael Harry</p>
                        <p style={{fontSize:'12px',fontWeight:'400',fontFamily:'Inter'}}>New York Finest Fruits</p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    // padding: '16px',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div>
                        <Image src={Images.image4} alt='logo'/>
                    </div>
                    <div>
                        <p style={{fontSize:'14px',fontWeight:'500',fontFamily:'Inter'}}>Jenna Sullivan</p>
                        <p style={{fontSize:'12px',fontWeight:'400',fontFamily:'Inter'}}>Walmart</p>
                    </div>
                  </div>
            </div>
            <div style={{display:'flex',alignItems:'baseline'}}>
                 <p style={{fontSize:'14px',fontWeight:'400',fontFamily:'Inter'}}>All customers</p>
                 <Image src={Images.sidearrow} alt='logo'/>
            </div>
            </div> 
        </div>
        <div style={{width:'720px',paddingLeft:'10px',gap:'10px',display:'flex',flexDirection:'column'}}>
           <div className={styles.chartBox}>
            <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',gap:'550px'}}>
             <p style={{fontFamily:'Inter',fontSize:'20px',fontWeight:'600',color:'black',margin:'0'}}>Growth</p>
             <div style={{display:'flex',alignItems:'baseline'}}>
             <p style={{fontFamily:'Inter',fontSize:'14px',fontWeight:'400',color:'black',margin:'0'}}>yearly</p>
                <Image src={Images.downarrow} alt='logo'/>     
             </div>
            </div>
            <div style={{height:'210px',width:'650px'}}>
             <Graph/>  
            </div>  
           </div>
           <div style={{display:'flex',gap:'10px'}}>
              <div className={styles.smallBox}>
                <p style={{fontFamily:'Inter',fontSize:'16px',fontWeight:'600',margin:'0'}}>Top month</p>
                <p style={{fontFamily:'Inter',fontSize:'24px',fontWeight:'600',margin:'0'}}>November</p>
                <p style={{fontFamily:'Inter',fontSize:'16px',fontWeight:'500',margin:'0',color: 'var(--Orange, #FFA500)'}}>2019</p>
              </div>
              <div className={styles.smallBox}>
              <p style={{fontFamily:'Inter',fontSize:'16px',fontWeight:'600',margin:'0'}}>Top year</p>
                <p style={{fontFamily:'Inter',fontSize:'24px',fontWeight:'600',margin:'0'}}>2023</p>
                <p style={{fontFamily:'Inter',fontSize:'14px',fontWeight:'400',margin:'0'}}>96K sold so far</p>
              </div>
              <div className={styles.smallBox}>
                <p style={{fontFamily:'Inter',fontSize:'16px',fontWeight:'600',color: 'var(--Mid-Gray, #7D7D7D)',margin:'0'}}>Top buyer</p>
                <Image src={Images.photo} alt=''/>
                <p style={{fontFamily:'Inter',fontSize:'12px',fontWeight:'500',color: 'var(--Black, #131313))',margin:'0'}}>Maggie Johnson</p>
                <p style={{fontFamily:'Inter',fontSize:'10px',fontWeight:'400',color: 'var(--Dark-Gray, #454545)',margin:'0'}}>Oasis Organic Inc.</p>
              </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default CustomerComponent