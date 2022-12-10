import React from 'react'
import { brands } from '../data'

const Brands = () => {
    return (
        <section className='min-h-[146px] bg-tertiary flex items-center'>
            <div className="conatiner mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
                {brands.map((brand, index) => {
                    return (
                        <div key={index} className='flex items-center justify-center'>
                            <img src={brand.img} alt='' />
                        </div>
                    )
                })}   
            </div>
        </section>
    )
 }
        
export default Brands