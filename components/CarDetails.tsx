import { CarProps } from '@/Types';
import React from 'react'

interface CarDetailspProps {
   isOpen: boolean;
   closeModal: ()=> void;
   car: CarProps;
}

const CarDetails = ({isOpen,closeModal,car}:CarDetailspProps)=> {
  return (
    <div>
      <h2>Car Details</h2>
    </div>
  )
}

export default CarDetails
