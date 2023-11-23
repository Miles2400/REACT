import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => (
	<section className={`${styles.flexCenter} flex-col sm:flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((stat) => (
			<div key={stat.id} className={`flex-1 flex sm:justify-start items-center sm:flex-row m-3 flex-col`}>
				<h4 className='font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white font-semibold'>
					{stat.value}
				</h4>
				<p className='font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
					{stat.title}
				</p>
			</div>
		))}
	</section>
)


export default Stats 