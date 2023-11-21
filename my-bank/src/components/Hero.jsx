import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center px-4 bg-discount-gradient py-[6px] rounded-[10px] mb-2">
                <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
                <span className="text-white">20%</span>
            </div>
        </div>
    </section>
)


export default Hero