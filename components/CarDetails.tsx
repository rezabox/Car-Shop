"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { CarProps } from "@/Types";

interface CarDetailspProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailspProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full item-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="relative w-full 
                max-w-lg max-h-[90vh] overflow-y-auto
                transform rounded-2xl bg-white
                text-left shadow-xl transition-all flex flex-col gap-5
              "
              >
                <button
                  type="button"
                  className="car-details__close-btn"
                  onClick={closeModal}
                >
                  <Image
                    src="/close.svg"
                    alt="close btn"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
                <div
                  className="flex-1 flex flex-col
                 gap-3"
                >
                  <div className="car-details__main-image">
                    <Image
                      src="/hero.png"
                      fill
                      priority
                      className="object-contain"
                      alt="car toyota"
                    ></Image>
                     </div>
                     <div className="flex gap-3">
                       <div className="flex-1 relative w-full h-24
                        bg-primary-blue-100 rounded-lg
                       ">
                        <Image src="/hero.png" alt="car 
                         model" fill priority
                         className="object-contain" 
                        />
                       </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default CarDetails;
