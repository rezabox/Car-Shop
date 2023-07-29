import { MouseEventHandler } from "react";

export interface CustomButtonProps{
   title:string,
   containerStyles?:string,
   handleClick?:
   MouseEventHandler<HTMLButtonElement>
   btnType?:"button"|"submit";
  }
export interface SearchManufacturerProps{
   manufacturer:string,
   setManufacturer:(manufacture:string) => void;
}
export interface HomePageProps{
   car:string,
   title:string
}