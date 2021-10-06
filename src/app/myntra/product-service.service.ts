import { Injectable } from '@angular/core';
import { Product } from './product.module';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  products: Product[] = [
    {
      name: 'HRX by Hrithik Roshan',
      imgPath:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/5a6da9ac-d32e-4710-9b6d-569b454560931579692118120-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/ee026dfd-53d5-431f-8f49-793d1b1a3ca91579692118057-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/630076d1-bddd-4bd8-825a-f53a545c38481579692117944-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/d9ac560a-bf76-4ada-b37f-18aa520545821579692117859-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-5.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/3d7fa82a-871c-43f9-8aa4-b01fbc77e2921579692117728-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-6.jpg',
      ],
      type: 'Printed T-shirt',
      price: 279,
      oldPrice: 688,
      offer: '60%',
    },
    {
      name: 'Roadster',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335209-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335188-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335163-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335135-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-5.jpg',
      ],
      type: 'Printed Round Neck T-Shirt',
      price: 249,
      oldPrice: 499,
      offer: '50%',
    },
    {
      name: 'Moda Rapido',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262100-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262077-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262054-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-4.jpg',
      ],
      type: 'Printed T-shirt',
      price: 384,
      oldPrice: 1099,
      offer: '65%',
    },
    {
      name: 'DILLINGER',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/fecf4415-1c28-4c5e-a203-a3dd1508ddd81575972548015-DILLINGER-Men-Tshirts-4071575972546110-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/2c445402-038d-4e7d-b07f-62284a09f4a01575972547961-DILLINGER-Men-Tshirts-4071575972546110-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/64a7291f-7736-4783-a548-ada1debc37821575972547908-DILLINGER-Men-Tshirts-4071575972546110-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/3be8219f-4c3e-4757-ae17-536d451b52ef1575972547853-DILLINGER-Men-Tshirts-4071575972546110-5.jpg',
      ],
      type: 'Red Striped Round Neck T-shirt',
      price: 499,
      oldPrice: 1199,
      offer: '59%',
    },
    {
      name: 'Nautica',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/6bb1f38c-a242-492e-8cda-239490537be11625195868801-Nautica-Men-Tshirts-9611625195868311-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/6bb1f38c-a242-492e-8cda-239490537be11625195868801-Nautica-Men-Tshirts-9611625195868311-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/f6cd0cbf-bcb8-4a71-aa1b-88fa3d987fad1625195868792-Nautica-Men-Tshirts-9611625195868311-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/92e6624e-81dd-4806-8f77-05961fbdc71b1625195868784-Nautica-Men-Tshirts-9611625195868311-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/73be32b1-4310-4c86-9424-6fdd7de61e411625195868775-Nautica-Men-Tshirts-9611625195868311-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/5edc590d-bae4-4547-9777-0f213e837f9b1625195868767-Nautica-Men-Tshirts-9611625195868311-5.jpg',
      ],
      type: 'ypography Printed T-shirt',
      price: 764,
      oldPrice: 1699,
      offer: '55%',
    },
    {
      name: 'Nautica',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/6bb1f38c-a242-492e-8cda-239490537be11625195868801-Nautica-Men-Tshirts-9611625195868311-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/6bb1f38c-a242-492e-8cda-239490537be11625195868801-Nautica-Men-Tshirts-9611625195868311-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/f6cd0cbf-bcb8-4a71-aa1b-88fa3d987fad1625195868792-Nautica-Men-Tshirts-9611625195868311-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/92e6624e-81dd-4806-8f77-05961fbdc71b1625195868784-Nautica-Men-Tshirts-9611625195868311-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/73be32b1-4310-4c86-9424-6fdd7de61e411625195868775-Nautica-Men-Tshirts-9611625195868311-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/5edc590d-bae4-4547-9777-0f213e837f9b1625195868767-Nautica-Men-Tshirts-9611625195868311-5.jpg',
      ],
      type: 'ypography Printed T-shirt',
      price: 764,
      oldPrice: 1699,
      offer: '55%',
    },
    {
      name: 'DILLINGER',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/fecf4415-1c28-4c5e-a203-a3dd1508ddd81575972548015-DILLINGER-Men-Tshirts-4071575972546110-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/2c445402-038d-4e7d-b07f-62284a09f4a01575972547961-DILLINGER-Men-Tshirts-4071575972546110-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/64a7291f-7736-4783-a548-ada1debc37821575972547908-DILLINGER-Men-Tshirts-4071575972546110-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/3be8219f-4c3e-4757-ae17-536d451b52ef1575972547853-DILLINGER-Men-Tshirts-4071575972546110-5.jpg',
      ],
      type: 'Red Striped Round Neck T-shirt',
      price: 499,
      oldPrice: 1199,
      offer: '59%',
    },
    {
      name: 'HRX by Hrithik Roshan',
      imgPath:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/5a6da9ac-d32e-4710-9b6d-569b454560931579692118120-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/ee026dfd-53d5-431f-8f49-793d1b1a3ca91579692118057-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/630076d1-bddd-4bd8-825a-f53a545c38481579692117944-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/d9ac560a-bf76-4ada-b37f-18aa520545821579692117859-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-5.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/3d7fa82a-871c-43f9-8aa4-b01fbc77e2921579692117728-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-6.jpg',
      ],
      type: 'Printed T-shirt',
      price: 279,
      oldPrice: 688,
      offer: '60%',
    },
    {
      name: 'Roadster',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335209-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335188-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335163-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335135-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-5.jpg',
      ],
      type: 'Printed Round Neck T-Shirt',
      price: 249,
      oldPrice: 499,
      offer: '50%',
    },
    {
      name: 'Moda Rapido',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262100-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262077-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262054-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-4.jpg',
      ],
      type: 'Printed T-shirt',
      price: 384,
      oldPrice: 1099,
      offer: '65%',
    },
    {
      name: 'HRX by Hrithik Roshan',
      imgPath:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/5a6da9ac-d32e-4710-9b6d-569b454560931579692118120-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/ee026dfd-53d5-431f-8f49-793d1b1a3ca91579692118057-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/630076d1-bddd-4bd8-825a-f53a545c38481579692117944-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/d9ac560a-bf76-4ada-b37f-18aa520545821579692117859-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-5.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/3d7fa82a-871c-43f9-8aa4-b01fbc77e2921579692117728-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-6.jpg',
      ],
      type: 'Printed T-shirt',
      price: 279,
      oldPrice: 688,
      offer: '60%',
    },
    {
      name: 'Roadster',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335209-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335188-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335163-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335135-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-5.jpg',
      ],
      type: 'Printed Round Neck T-Shirt',
      price: 249,
      oldPrice: 499,
      offer: '50%',
    },
    {
      name: 'Moda Rapido',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262100-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262077-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262054-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-4.jpg',
      ],
      type: 'Printed T-shirt',
      price: 384,
      oldPrice: 1099,
      offer: '65%',
    },
    {
      name: 'DILLINGER',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/fecf4415-1c28-4c5e-a203-a3dd1508ddd81575972548015-DILLINGER-Men-Tshirts-4071575972546110-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/2c445402-038d-4e7d-b07f-62284a09f4a01575972547961-DILLINGER-Men-Tshirts-4071575972546110-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/64a7291f-7736-4783-a548-ada1debc37821575972547908-DILLINGER-Men-Tshirts-4071575972546110-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/3be8219f-4c3e-4757-ae17-536d451b52ef1575972547853-DILLINGER-Men-Tshirts-4071575972546110-5.jpg',
      ],
      type: 'Red Striped Round Neck T-shirt',
      price: 499,
      oldPrice: 1199,
      offer: '59%',
    },
    {
      name: 'Nautica',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/6bb1f38c-a242-492e-8cda-239490537be11625195868801-Nautica-Men-Tshirts-9611625195868311-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/6bb1f38c-a242-492e-8cda-239490537be11625195868801-Nautica-Men-Tshirts-9611625195868311-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/f6cd0cbf-bcb8-4a71-aa1b-88fa3d987fad1625195868792-Nautica-Men-Tshirts-9611625195868311-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/92e6624e-81dd-4806-8f77-05961fbdc71b1625195868784-Nautica-Men-Tshirts-9611625195868311-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/73be32b1-4310-4c86-9424-6fdd7de61e411625195868775-Nautica-Men-Tshirts-9611625195868311-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/5edc590d-bae4-4547-9777-0f213e837f9b1625195868767-Nautica-Men-Tshirts-9611625195868311-5.jpg',
      ],
      type: 'ypography Printed T-shirt',
      price: 764,
      oldPrice: 1699,
      offer: '55%',
    },
    {
      name: 'Nautica',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/6bb1f38c-a242-492e-8cda-239490537be11625195868801-Nautica-Men-Tshirts-9611625195868311-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/6bb1f38c-a242-492e-8cda-239490537be11625195868801-Nautica-Men-Tshirts-9611625195868311-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/f6cd0cbf-bcb8-4a71-aa1b-88fa3d987fad1625195868792-Nautica-Men-Tshirts-9611625195868311-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/92e6624e-81dd-4806-8f77-05961fbdc71b1625195868784-Nautica-Men-Tshirts-9611625195868311-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/73be32b1-4310-4c86-9424-6fdd7de61e411625195868775-Nautica-Men-Tshirts-9611625195868311-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13802468/2021/7/2/5edc590d-bae4-4547-9777-0f213e837f9b1625195868767-Nautica-Men-Tshirts-9611625195868311-5.jpg',
      ],
      type: 'ypography Printed T-shirt',
      price: 764,
      oldPrice: 1699,
      offer: '55%',
    },
    {
      name: 'DILLINGER',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/fecf4415-1c28-4c5e-a203-a3dd1508ddd81575972548015-DILLINGER-Men-Tshirts-4071575972546110-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/2c445402-038d-4e7d-b07f-62284a09f4a01575972547961-DILLINGER-Men-Tshirts-4071575972546110-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/64a7291f-7736-4783-a548-ada1debc37821575972547908-DILLINGER-Men-Tshirts-4071575972546110-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11067734/2019/12/10/3be8219f-4c3e-4757-ae17-536d451b52ef1575972547853-DILLINGER-Men-Tshirts-4071575972546110-5.jpg',
      ],
      type: 'Red Striped Round Neck T-shirt',
      price: 499,
      oldPrice: 1199,
      offer: '59%',
    },
    {
      name: 'HRX by Hrithik Roshan',
      imgPath:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/5a6da9ac-d32e-4710-9b6d-569b454560931579692118120-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/ee026dfd-53d5-431f-8f49-793d1b1a3ca91579692118057-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/630076d1-bddd-4bd8-825a-f53a545c38481579692117944-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/d9ac560a-bf76-4ada-b37f-18aa520545821579692117859-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-5.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1700871/2020/1/22/3d7fa82a-871c-43f9-8aa4-b01fbc77e2921579692117728-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-6.jpg',
      ],
      type: 'Printed T-shirt',
      price: 279,
      oldPrice: 688,
      offer: '60%',
    },
    {
      name: 'Roadster',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335231-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335209-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335188-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335163-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-4.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2308267/2018/1/29/11517216335135-Roadster-Men-Maroon-Printed-Round-Neck-T-shirt-5591517216335098-5.jpg',
      ],
      type: 'Printed Round Neck T-Shirt',
      price: 249,
      oldPrice: 499,
      offer: '50%',
    },
    {
      name: 'Moda Rapido',
      imgPath:
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg',
      images: [
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262125-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-1.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262100-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-2.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262077-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-3.jpg',
        'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2378414/2018/2/8/11518071262054-Moda-Rapido-Men-Navy-Blue-Striped-Round-Neck-T-shirt-3641518071261992-4.jpg',
      ],
      type: 'Printed T-shirt',
      price: 384,
      oldPrice: 1099,
      offer: '65%',
    },
  ];

  constructor() {}

  getProduct(id: number) {
    return this.products[id - 1];
  }

  getProducts() {
    return this.products;
  }
}
