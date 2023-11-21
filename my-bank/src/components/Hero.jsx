import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'


const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center px-4 bg-discount-gradient py-[6px] rounded-[10px] mb-2">
                <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
                <p className={`${styles.paragraph} ml-2`}>
                    <span className="text-white">20%</span> DISCOUNT FOR {' '}
                    <span className="text-white">1 MONTH</span> ACCOUNT
                </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                    The Next <br className='sm:block hidden' /> {' '} <span className="text-gradient">Generation</span><br className='sm:block hidden' />   Payment Method.
                </h1>
            </div>

        </div>
    </section>
)


export default Hero