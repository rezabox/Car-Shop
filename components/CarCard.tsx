"use client"
import { useState } from 'react'
import Image from 'next/image';
import { CarProps } from '@/Types';
import CustomButton from './CustomButton';
import { calculateCarRent } from '@/utils';
import CarDetails from './CarDetails';

interface CarCardProps {
  car: CarProps;  
}
const CarCard = ({ car }: CarCardProps)=> {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return(
     <div className="car-card group cursor-pointer">
        <div className="car-card__content">
           <h2 className="car-card__content-title">
            {make} {model}
           </h2>
        </div>
        <p className="car-card__price">
          <span className="car-card__price-dollar">
            $
          </span>  
             {carRent}
          <span className="car-card__price-day">
             /day
          </span>   
        </p>
        <div className="car-card__image">
            <Image src="/hero.png" fill priority className='object-contain' alt='car toyota'></Image>
        </div>
        <div className="relative flex w-full mt-2">
            <div className="car-card__icon-container">
               <div className="car-card__icon">
                  <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel"></Image>
                  <p className='text-[14px]'>
                    {transmission === 'a' ? 'Automatic': 'Manual'}
                  </p>
               </div>
               <div className="car-card__icon">
                  <Image src="/tire.svg" width={20} height={20} alt="tires"></Image>
                  <p className='text-[14px]'>
                       {drive.toUpperCase()}
                  </p>
               </div>
               <div className="car-card__icon">
                  <Image src="/gas.svg" width={20} height={20} alt="gas"></Image>
                  <p className='text-[14px]'>
                    {city_mpg} MPG
                  </p>
               </div>
            </div>
            <div className="car-card__btn-container">
                  <CustomButton
                      title="View More"
                      containerStyles="w-full py-[16px] 
                      rounded-full bg-primary-blue" 
                      textStyles="text-[14px] text-white leading-[17px] font-bold" 
                      rightIcon="/right-arrow.svg" 
                      handleClick={()=> setIsOpen(true)}
                  />
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
     </div>
  );
};
export default CarCard;
