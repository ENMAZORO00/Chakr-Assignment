import React from 'react'
import styles from './chartCOmponents.module.css'
import Image from 'next/image'
import Images from '../../assets/images'

const ChartComponents = () => {
  return (
    <>
    <div style={{display:'flex',gap:'20px'}}>
        <div className={styles.Box}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'8px'}}>
                <p style={{fontFamily:'Inter',fontSize:'20px',fontWeight:'600',margin:'0'}}>Chats</p>
                <p style={{fontFamily:'Inter',fontSize:'14px',fontWeight:'400'}}>2 unread messages</p>
            </div>
            <div style={{display:'flex'}}>
                <Image src={Images.frame1} alt='LOGO'/>
                <Image src={Images.frame2} alt='LOGO'/>
                <Image src={Images.frame3} alt='LOGO'/>
                <Image src={Images.frame4} alt='LOGO'/>
            </div>
        </div>
        <div className={styles.Box2}>
             <p style={{fontFamily:'Inter',fontSize:'20px',fontWeight:'600',margin:'0'}}>Top states</p>
             <Image src={Images.bar1} alt='logo'/>
             <Image src={Images.bar2} alt='logo'/>
             <Image src={Images.bar3} alt='logo'/>
             <Image src={Images.bar4} alt='logo'/>
        </div>
        <div className={styles.Box3}>
           <p style={{fontFamily:'Inter',fontSize:'20px',fontWeight:'600',margin:'0'}}>New deals</p>
           <div style={{display:'flex',justifyContent:'space-between'}}>
            <Image src={Images.deal1} alt='logo'/>
            <Image src={Images.deal2} alt='logo'/>
            <Image src={Images.deal3} alt='logo'/>
           </div>
           <div style={{display:'flex',justifyContent:'space-between'}}>
           <Image src={Images.deal4} alt='logo'/>
            <Image src={Images.deal5} alt='logo'/>
           </div>
           <div style={{display:'flex',justifyContent:'space-between'}}>
           <Image src={Images.deal6} alt='logo'/>
            <Image src={Images.deal7} alt='logo'/>
            <Image src={Images.deal8} alt='logo'/>
           </div>
        </div>
    </div>
    </>
  )
}

export default ChartComponents