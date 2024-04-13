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

      <HorizontalCardProduct category={"hp_printer"} heading={"Top's HP  Printers"}/>
      <HorizontalCardProduct category={"thermal_printer"} heading={"Thermal Printers"}/>

      <VerticalCardProduct category={"toner_powder"} heading={"Toner Powder"}/>
      <VerticalCardProduct category={"barcode_stickers"} heading={"Barcode-Stickers"}/>
      <VerticalCardProduct category={"barcode_printers"} heading={"Barcode-Printers"}/>
      <VerticalCardProduct category={"cctv_camera"} heading={"CCTV-Camera"}/>
      <VerticalCardProduct category={"paper_tags"} heading={"Paper-Tags"}/>
      <VerticalCardProduct category={"barcode_label"} heading={"Barcode-Label"}/>
      <VerticalCardProduct category={"barcode_ribbon"} heading={"Barcode-Ribbon"}/>
      <VerticalCardProduct category={"packaging_tape"} heading={"Packaging-Tape"}/>
      <VerticalCardProduct category={"masking_tape"} heading={"Masking-Tape"}/>
    </div>
  )
}

export default Home