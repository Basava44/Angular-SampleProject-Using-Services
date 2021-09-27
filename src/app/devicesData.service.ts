import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DevicesDataService {
  brands: any = [
    {
      model: 'Galaxy A80',
      price: 90000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'Note 9',
      price: 76000,
      dateOfRelease: '02-02-2019',
      ratings: 4.2,
      ram: '6 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '4000 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jklgxow0/mobile/p/v/3/samsung-galaxy-note-9-sm-n960fzbdins-original-imaf7xa3tjsacs9r.jpeg?q=70',
    },
    {
      model: 'Galaxy S10 Plus',
      price: 91900,
      dateOfRelease: '23-02-2018',
      ratings: 4.6,
      ram: '8 GB RAM ',
      rom: '512 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'Galaxy S10',
      price: 76000,
      dateOfRelease: '13-09-2018',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '512 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jsdj8nk0/mobile/5/y/g/samsung-galaxy-s10-sm-g973fzwgins-original-imafdys4hrndgfzm.jpeg?q=70',
    },
    {
      model: 'Galaxy S9 Plus',
      price: 65000,
      dateOfRelease: '12-05-2018',
      ratings: 4.7,
      ram: '8 GB RAM ',
      rom: '64 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jeiukcw0/mobile/e/r/h/samsung-galaxy-s9-plus-sm-g965fzpdins-original-imaf372gapkjg5tp.jpeg?q=70',
    },
    {
      model: 'Note 10 Plus',
      price: 79999,
      dateOfRelease: '18-06-2018',
      ratings: 4.3,
      ram: '12 GB RAM ',
      rom: '256 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jz1l7rk0/mobile/p/v/8/samsung-galaxy-note-10-plus-sm-n975fzsgins-original-imafj58vd3nxggwr.jpeg?q=70',
    },
    {
      model: 'Note 9',
      price: 73600,
      dateOfRelease: '23-09-2019',
      ratings: 4.6,
      ram: '6 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jklgxow0/mobile/p/v/3/samsung-galaxy-note-9-sm-n960fzbdins-original-imaf7xa3tjsacs9r.jpeg?q=70',
    },
    {
      model: 'Galaxy S10 Plus',
      price: 91900,
      dateOfRelease: '21-07-2018',
      ratings: 4.6,
      ram: '8 GB RAM ',
      rom: '512 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jsdj8nk0/mobile/7/n/z/samsung-galaxy-s10-plus-sm-g975fckgins-original-imafdys4d6h8phu6.jpeg?q=70',
    },
    {
      model: 'Galaxy S10',
      price: 76900,
      dateOfRelease: '01-01-2018',
      ratings: 4.5,
      ram: '12 GB RAM ',
      rom: '1024 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jsdj8nk0/mobile/7/n/z/samsung-galaxy-s10-plus-sm-g975fckgins-original-imafdys4d6h8phu6.jpeg?q=70',
    },
    {
      model: 'Galaxy S9 Plus',
      price: 57900,
      dateOfRelease: '03-01-2019',
      ratings: 4.7,
      ram: '6 GB RAM ',
      rom: '64 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jeiukcw0/mobile/e/r/h/samsung-galaxy-s9-plus-sm-g965fzpdins-original-imaf372gapkjg5tp.jpeg?q=70',
    },
    {
      model: 'Note 10 Plus',
      price: 90000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'Note 9',
      price: 70000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'Galaxy S10 Plus',
      price: 65000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'Galaxy S10',
      price: 60000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'Galaxy S9 Plus',
      price: 65000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'iphone Xr',
      price: 59999,
      dateOfRelease: '25-07-2018',
      ratings: 4.6,
      ram: '8 GB RAM ',
      rom: '64 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jnj7iq80/mobile/y/q/d/apple-iphone-xr-mry52hn-a-original-imafa6zkfgwpnsgz.jpeg?q=70',
    },
    {
      model: 'iphone 13',
      price: 108000,
      dateOfRelease: '23-02-2019',
      ratings: 4.6,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/e/e/r/iphone-13-mlpj3hn-a-apple-original-imag6vpykhzqhmgh.jpeg?q=70',
    },
    {
      model: 'iphone Xs',
      price: 114900,
      dateOfRelease: '08-01-2018',
      ratings: 4.2,
      ram: '6 GB RAM ',
      rom: '156 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jm9hfgw0/mobile/y/4/u/apple-iphone-xs-mt9l2hn-a-original-imaf97f65bqbdycy.jpeg?q=70',
    },
    {
      model: 'iphone 8 plus',
      price: 61490,
      dateOfRelease: '23-02-2019',
      ratings: 4.6,
      ram: '6 GB RAM ',
      rom: '64 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/j7ksia80/mobile/t/4/f/apple-iphone-8-plus-mq8g2hn-a-original-imaexsfhxepbngdq.jpeg?q=70',
    },
    {
      model: 'iphone 8',
      price: 61490,
      dateOfRelease: '10-04-2018',
      ratings: 4.4,
      ram: '6 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/j7ksia80/mobile/t/4/f/apple-iphone-8-plus-mq8g2hn-a-original-imaexsfhxepbngdq.jpeg?q=70',
    },
    {
      model: 'Apple iPhone 6s',
      price: 29799,
      dateOfRelease: '08-03-2017',
      ratings: 4.5,
      ram: '4 GB RAM ',
      rom: '32 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/j7qi9ow0/mobile/6/t/q/apple-iphone-6s-mn0w2hn-a-original-imaexw6smfzjgqsz.jpeg?q=70',
    },
    {
      model: 'Apple iPhone 6s',
      price: 34999,
      dateOfRelease: '18-07-2017',
      ratings: 4.2,
      ram: '3 GB RAM ',
      rom: '32 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/j7qi9ow0/mobile/h/f/t/apple-iphone-6s-mn0x2hn-a-original-imaexw7fpbbfwwtw.jpeg?q=70',
    },
    {
      model: 'Apple iPhone 7',
      price: 36999,
      dateOfRelease: '11-11-2017',
      ratings: 4.4,
      ram: '3 GB RAM ',
      rom: '32 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/j7qi9ow0/mobile/8/5/t/apple-iphone-7-mn912hn-a-original-imaexwzngmvhunxr.jpeg?q=70',
    },
    {
      model: 'iphone 8',
      price: 65000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },

    {
      model: 'Apple iPhone 8 ',
      price: 53490,
      dateOfRelease: '06-06-2017',
      ratings: 4.2,
      ram: '4 GB RAM ',
      rom: '64 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jgffp8w0/mobile/g/g/c/apple-iphone-8-product-red-special-edition-mrrk2hn-a-original-imaf4gudf5bzzxht.jpeg?q=70',
    },
    {
      model: 'Apple IPhone 4',
      price: 20824,
      dateOfRelease: '23-02-2019',
      ratings: 4,
      ram: '2 GB RAM ',
      rom: '8 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/mobile/h/e/n/apple-iphone-4-original-imadknfx36wrgvug.jpeg?q=70',
    },
    {
      model: 'Apple iPhone 7',
      price: 47999,
      dateOfRelease: '23-02-2019',
      ratings: 4.5,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/j7qi9ow0/mobile/g/g/f/apple-iphone-7-mn8y2hn-a-original-imaexwzn8ynwbhtj.jpeg?q=70',
    },
    {
      model: 'OnePlus 7 Pro',
      price: 58000,
      dateOfRelease: '23-02-2019',
      ratings: 4.6,
      ram: '8 GB RAM ',
      rom: '256 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jwuzzww0/cases-covers/front-back-case/r/p/d/flipkart-smartbuy-op7p-gkk-red-original-imafhg72hjhfygkh.jpeg?q=70',
    },
    {
      model: 'One Plus 5',
      price: 40000,
      dateOfRelease: '28-12-2016',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/je34pzk0/mobile/y/w/t/oneplus-one-plus-5-5-original-imaffndueqpcttgz.jpeg?q=70',
    },
    {
      model: 'OnePlus 6 T',
      price: 38000,
      dateOfRelease: '15-01-2018',
      ratings: 4.8,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jr58l8w0/cases-covers/back-cover/f/z/t/unirock-ubc-46-original-imafcbxkqthkrgxw.jpeg?q=70',
    },
    {
      model: 'OnePlus 6',
      price: 37999,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'OnePlus 7 T',
      price: 53000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'OnePlus 7',
      price: 40000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'OnePlus 6 Pro',
      price: 40000,
      dateOfRelease: '23-02-2019',
      ratings: 4.2,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'OnePlus 6',
      price: 35000,
      dateOfRelease: '23-02-2019',
      ratings: 4.5,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jeykeq80/mobile/n/q/v/oneplus-oneplus-5-a5000-original-imaf3jfkg8jkhdfh.jpeg?q=70',
    },
    {
      model: 'OnePlus 5',
      price: 37999,
      dateOfRelease: '15-01-2017',
      ratings: 4.3,
      ram: '6 GB RAM ',
      rom: '64 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jeykeq80/mobile/n/q/v/oneplus-oneplus-5-a5000-original-imaf3jfkg8jkhdfh.jpeg?q=70',
    },
    {
      model: 'OnePlus 7T pro',
      price: 56000,
      dateOfRelease: '10-10-2017',
      ratings: 4.2,
      ram: '16 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'OnePlus 6 T Pro',
      price: 60000,
      dateOfRelease: '05-12-2018',
      ratings: 4.6,
      ram: '8 GB RAM ',
      rom: '128 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
    {
      model: 'OnePlus',
      price: 35000,
      dateOfRelease: '29-04-2019',
      ratings: 4.6,
      ram: '16 GB RAM ',
      rom: '256 GB ROM',
      screenSize: '17.02 cm (6.7 inch) Full HD+ Display',
      camera:
        '48MP + | 48MP(F2.0) + 8MP(Ultra Wide/F2.2) + TOF (Time-of-Flight) 3D-Depth Rotating Camera',
      battery: '3700 mAh Battery',
      processor: 'Qualcomm Snapdragon 730G Octa-Core Processor',
      modelNumber: 'SM-A805FZDUINS',
      color: 'Angel Gold',
      simType: 'Dual Sim',
      hybridSimSlot: 'No',
      otg_Compatible: 'Yes',
      imageUrl:
        'https://rukminim1.flixcart.com/image/416/416/jy90eq80/mobile/v/e/w/samsung-galaxy-a80-sm-a805fzduins-original-imafgj4g7fxnkfza.jpeg?q=70',
    },
  ];

  selectedDevice = new Subject<any>();
  show = new Subject<boolean>();
  compareCount = new Subject<number>();
  alldevices = new Subject<any>();

  comparisionArray: any[] = [];

  addToCompare(mobile: any) {
    this.comparisionArray.push(mobile);
    this.compareCount.next(this.comparisionArray.length);
  }

  removeFromCompare(mobile: any) {
    this.comparisionArray = this.comparisionArray.filter((data) => {
      return data != mobile;
    });
    this.compareCount.next(this.comparisionArray.length);
  }

  clearComparisionArray() {
    this.comparisionArray = [];
  }

  filterOut(ram: boolean, rom: boolean, price: boolean, devices: any) {
    if (!ram && !rom && !price) {
      this.alldevices.next(this.brands);
    }
    const resultArray: any = [];

    if (price && ram && rom) {
      devices.filter((data: any) => {
        if (
          +data.rom.replace(/\D/g, '') >= 128 &&
          +data.rom.replace(/\D/g, '') >= 6 &&
          data.price <= 40000
        )
          resultArray.push(data);
      });
      this.alldevices.next(resultArray);
    }

    if (price && !ram && !rom) {
      devices.filter((data: any) => {
        if (data.price <= 40000) resultArray.push(data);
      });
      this.alldevices.next(resultArray);
    }

    if (!price && ram && !rom) {
      devices.filter((data: any) => {
        if (+data.ram.replace(/\D/g, '') >= 6) resultArray.push(data);
      });
      this.alldevices.next(resultArray);
    }
    if (!price && !ram && rom) {
      devices.filter((data: any) => {
        if (+data.rom.replace(/\D/g, '') >= 128) resultArray.push(data);
      });
      this.alldevices.next(resultArray);
    }
    if (price && ram && !rom) {
      devices.filter((data: any) => {
        if (+data.ram.replace(/\D/g, '') >= 6 && data.price <= 40000)
          resultArray.push(data);
      });
      this.alldevices.next(resultArray);
    }
    if (price && !ram && rom) {
      devices.filter((data: any) => {
        if (+data.rom.replace(/\D/g, '') >= 128 && data.price <= 40000)
          resultArray.push(data);
      });
      this.alldevices.next(resultArray);
    }
    if (!price && ram && rom) {
      devices.filter((data: any) => {
        if (
          +data.rom.replace(/\D/g, '') >= 128 &&
          +data.rom.replace(/\D/g, '') >= 6
        )
          resultArray.push(data);
      });
      this.alldevices.next(resultArray);
    }
  }

  sortItems(type: string, data: any) {
    switch (type) {
      case 'priceLTH': {
        data.sort(function(a: any,b: any){
          return a.price - b.price;
        })
        this.alldevices.next(data);
        break;
      }
      case 'priceHTL': {
        data.sort(function (a: any, b: any) {
          return b.price - a.price;
        });
        this.alldevices.next(data);
        break;
      }
      case 'ramLTH': {
        data.sort(function(a: any, b: any){
          const x = +a.ram.replace(/\D/g, '');
          const y = +b.ram.replace(/\D/g, '');
          return x < y ? -1 : x > y ? 1 : 0;
        })
        this.alldevices.next(data);
        break;
      }
      case 'ramHTL': {
        data.sort(function (a: any, b: any) {
          const y = +a.ram.replace(/\D/g, '');
          const x = +b.ram.replace(/\D/g, '');
          return x < y ? -1 : x > y ? 1 : 0;
        });
        this.alldevices.next(data);
        break;
      }
      case 'romLTH': {
        data.sort(function (a: any, b: any) {
          const x = +a.rom.replace(/\D/g, '');
          const y = +b.rom.replace(/\D/g, '');
          return x < y ? -1 : x > y ? 1 : 0;
        });
        this.alldevices.next(data);
        break;
      }
      case 'romHTL': {
        data.sort(function (a: any, b: any) {
          const y = +a.rom.replace(/\D/g, '');
          const x = +b.rom.replace(/\D/g, '');
          return x < y ? -1 : x > y ? 1 : 0;
        });
        this.alldevices.next(data);
        break;
      }
      default: {
        this.alldevices.next(data);
        break;
      }
    }
  }
}
