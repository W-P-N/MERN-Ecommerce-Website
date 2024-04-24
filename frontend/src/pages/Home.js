import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"Printer"} heading={"Top's HP  Printers"}/>
      <HorizontalCardProduct category={"Thermal Printer"} heading={"Thermal Printers"}/>

      <VerticalCardProduct category={"Toner Powder"} heading={"Toner Powder"}/>
      <VerticalCardProduct category={"Barcode Stickers"} heading={"Barcode-Stickers"}/>
      <VerticalCardProduct category={"Barcode Printers"} heading={"Barcode-Printers"}/>
      <VerticalCardProduct category={"Cctv Camera"} heading={"CCTV-Camera"}/>
      <VerticalCardProduct category={"Paper Tags"} heading={"Paper-Tags"}/>
      <VerticalCardProduct category={"Barcode Label"} heading={"Barcode-Label"}/>
      <VerticalCardProduct category={"Barcode Ribbon"} heading={"Barcode-Ribbon"}/>
      <VerticalCardProduct category={"Packaging Tape"} heading={"Packaging-Tape"}/>
      <VerticalCardProduct category={"Masking Tape"} heading={"Masking-Tape"}/>
    </div>
  )
}

export default Home