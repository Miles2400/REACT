import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <img src={logo} alt="logo" className='w-[260px] h-[72px] object-contain' />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px] `}>A new way to make the payments easy, reliable and secure.</p>
                </div>

                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {footerLinks.map((footerlink, index) => (
                        <div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className='font-poppins font-semibold text-[18px] leading-[27px] text-white mb-3'>{footerlink.title}</h4>
                            <ul>
                                {footerlink.links.map((link) => (
                                    <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? 'mb-2' : 'mb-0'}`}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-slate-700'>
                <p className='font-poppins font-normal text-[16px] leading-[27px] text-dimWhite text-center'>
                    Copyright &copy;  2021 HooBank. All Rights Reserved.
                </p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {socialMedia.map((social, index) => (
                        <img src={social.icon} key={social.id} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index === social.length - 1 ? 'mr-0' : 'mr-6'}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer