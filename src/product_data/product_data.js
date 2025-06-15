// src/components/products/products.js   

import Aima_G009_2024 from "../assets/product_images/Aima_G009_2024.jpg";
import Yadea_T9_2024 from "../assets/product_images/Yadea_T9_2024.jpg";
import Yadea_M6_2024 from "../assets/product_images/Yadea_M6_2024.jpg";
import Aima_A700_2024 from "../assets/product_images/Aima_A700_2024.jpg";
import Aima_A723_2024 from "../assets/product_images/A723.png";
import Aima_F626_2024 from "../assets/product_images/F626.png";
import Aima_G700_2024 from "../assets/product_images/G700.png";
import Yadea_Cool_Joy from "../assets/product_images/Yadea_cool_joy.jpg";
import Yadea_Cool_Joy_1 from "../assets/product_images/Yadea_cool_joy1.jpg";
import Yadea_Cool_Joy_2 from "../assets/product_images/Yadea_cool_joy2.jpg";
import Yadea_Cool_Joy_3 from "../assets/product_images/Yadea_cool_joy3.jpg";
import Yadea_Cool_Joy_4 from "../assets/product_images/Yadea_cool_joy4.jpg";
import Yadea_Teena from "../assets/product_images/Yadea_teena.jpg";
import Yadea_Teena_White from "../assets/product_images/Yadea_teena_white.jpg";
import Yadea_Teena_Black from "../assets/product_images/Yadea_teena_black.jpg";
import Yadea_Teena_Green from "../assets/product_images/Yadea_teena_green.jpg";
import Yadea_Teena_Pink from "../assets/product_images/Yadea_teena_pink.jpg";
import Yadea_Teena_1 from "../assets/product_images/Yadea_teena_1.jpg";
import Yadea_Teena_2 from "../assets/product_images/Yadea_teena_2.jpg";
import Yadea_E10 from "../assets/product_images/Yadea_E10.jpg";
import Yadea_Voltguard from "../assets/product_images/Yadea_voltguard.jpg";
import Yadea_Voltguard_Grey from "../assets/product_images/Yadea_Voltguard_grey.jpg";
import Yadea_Voltguard_White from "../assets/product_images/Yadea_Voltguard_white.jpg";
import Yadea_Voltguard_Black from "../assets/product_images/Yadea_Voltguard_red.jpg";
import Yadea_GT20 from "../assets/product_images/Yadea_GT20.jpg";
import Yadea_GT30 from "../assets/product_images/Yadea_GT30.jpg";
import Aima_A7001 from "../assets/product_images/Aima_A700_2024.jpg";
import Aima_A7002 from "../assets/product_images/Aima_A7002.jpg";
import Aima_A7003 from "../assets/product_images/Aima_A7003.jpg";
import Aima_A7004 from "../assets/product_images/Aima_A7004.jpg";
import Yadea_M61 from "../assets/product_images/Yadea_M61.jpg";
import Yadea_M62 from "../assets/product_images/Yadea_M62.jpg";
import Yadea_M63 from "../assets/product_images/Yadea_m63.jpg";
import Yadea_T91 from "../assets/product_images/Yadea_T91.jpg";
import Yadea_T92 from "../assets/product_images/Yadea_t92.jpg";
import Yadea_T93 from "../assets/product_images/YAdea_T93.jpg";
import Yadea_T94 from "../assets/images/wallHome5.jpg";

const products = [
  { id: 2, name: "YADEA M6 ", imageUrl: Yadea_M6_2024, images: [Yadea_M6_2024, Yadea_M61, Yadea_M62, Yadea_M63], description: "2 Wheels", product_brand: "YADEA", battery_capacity: "72V/26Ah", battery_type: "Graphene Lead-Acid(TTFar)", motor_power: "1200W", motor_type: "DC Brushless Motor", brake: "Front:Disc Brake/Rear:Disc Brake", range: "65-90km@25km/h", speed: "55km/h", dimension: "1860*715*1315mm", sold: 10, colors: ["black", "yellow", "white"] },
  { id: 3, name: "AIMA A700", imageUrl: Aima_A700_2024, images: [Aima_A700_2024, Aima_A7001, Aima_A7002, Aima_A7003, Aima_A7004], description: "2 Wheels", product_brand: "AIMA", battery_capacity: "72V/26Ah", battery_type: "Graphene Lead-Acid(TTFar)", motor_power: "1200W", motor_type: "DC Brushless Motor", brake: "Front:Disc Brake/Rear:Disc Brake", range: "65-90km@25km/h", speed: "55km/h", dimension: "1860*715*1315mm", sold: 10, colors: ["black", "yellow", "white"] },
  { id: 1, name: "YADEA T9 ", imageUrl: Yadea_T9_2024, images: [Yadea_T94, Yadea_T9_2024, Yadea_T91, Yadea_T92, Yadea_T93], description: "2 Wheels", product_brand: "YADEA", battery_capacity: "72V/26Ah", battery_type: "Graphene Lead-Acid(TTFar)", motor_power: "1200W", motor_type: "DC Brushless Motor", brake: "Front:Disc Brake/Rear:Disc Brake", range: "65-90km@25km/h", speed: "55km/h", dimension: "1860*715*1315mm", sold: 20, colors: ["black", "green", "white"] },
  { id: 4, name: "AIMA A723", imageUrl: Aima_A723_2024, images: [Yadea_T9_2024, , Yadea_M6_2024, Yadea_Cool_Joy], description: "2 Wheel", product_brand: "AIMA", battery_capacity: "72V/22Ah", battery_type: "Lead-Acid", motor_power: "800W", motor_type: "", brake: "", range: "60-70km@25km/h", speed: "42km/h", dimension: "3045*1170*1340mm", price: "2500$", sold: 12, colors: ["black", "yellow", "white"] },
  { id: 5, name: "AIMA F626", imageUrl: Aima_F626_2024, imageUrl_2: Yadea_M6_2024, description: "2 Wheel", product_brand: "AIMA", battery_capacity: "72V/22Ah", battery_type: "Lead-Acid", motor_power: "800W", motor_type: "", brake: "", range: "60-72km@25km/h", speed: "42km/h", dimension: "3045*1170*1340mm", price: "2500$", sold: 12, colors: ["black", "yellow", "white"] },
  { id: 6, name: "AIMA G009", imageUrl: Aima_G700_2024, imageUrl_2: Yadea_M6_2024, description: "3 Wheel", product_brand: "AIMA", battery_capacity: "60V/45Ah", battery_type: "Lead-Acid", motor_power: "1200W", motor_type: "", brake: "", range: "65km@25km/h", speed: "40km/h", dimension: "3045*1170*1340mm", weight: "320kg", price: "2500$", sold: 12, colors: ["black", "yellow", "white"] },
  { id: 8, name: "YADEA COOL JOY", imageUrl: Yadea_Cool_Joy, images: [Yadea_Cool_Joy_1, Yadea_Cool_Joy_2, Yadea_Cool_Joy_3, Yadea_Cool_Joy_4], description: "2 Wheel", product_brand: "YADEA", battery_capacity: "48V/20Ah", battery_type: "Graphen Battery", motor_power: "500W", break: "Front:Drum , Rare :Drum", range: "35km/h", speed: "35km/h", dimension: "1550*660*1010-1100", weight: "....", price: "...", sold: 1000, colors: ["white", "black", "grey", "green"] },
  { id: 9, name: "YADEA TEENA", imageUrl: Yadea_Teena_White, images: [Yadea_Teena_White, Yadea_Teena_Black, Yadea_Teena_Green, Yadea_Teena_Pink, Yadea_Teena_1, Yadea_Teena_2], description: "2 Wheel", product_brand: "YADEA", battery_capacity: "48V/12Ah", battery_type: "Graphen Battery", motor_power: "300W", break: "Front:Drum, Rare:Drum", range: "35-40km/h", speed: "35km/h", dimension: "1445*645*1030", weight: "...", price: "...", sold: 1500, colors: ["white", "black", "pink", "green"] },
  { id: 10, name: "YADEA E10[EPOC]", imageUrl: Yadea_E10, description: "2 Wheel", product_brand: "YADEA", battery_capacity: "72V/38Ah", battery_type: "Graphen Battery", motor_power: "1200W", break: "Front:Disc , Rare:Disc", range: "80km/h", speed: "60km/h", dimension: "1860*715*1099", weight: "...", price: "...", sold: 1500, colors: ["black", "yellow", "green"] },
  { id: 11, name: "YADEA VOLTGUARD", imageUrl: Yadea_Voltguard_Black, images: [Yadea_Voltguard, Yadea_Voltguard_Black, Yadea_Voltguard_Grey, Yadea_Voltguard_White], description: "2 Wheel", product_brand: "YADEA", battery_capacity: "72V/38Ah", battery_type: "Graphen Battery", motor_power: "1500W", break: "Front:Disc , Rare:Disc + CBS", range: "110km/h", speed: "45km/h", dimension: "1942*660*1138", weight: "...", price: "...", sold: 1600, colors: ["red", "black", "white", "grey"] },
  { id: 12, name: "YADEA GT20", imageUrl: Yadea_GT20, description: "2 Wheel", product_brand: "YADEA", battery_capacity: "72V/25Ah", battery_type: "Graphen Battery", motor_power: "1500W", motor_type: "DC Brushless Motor", break: "Front:Disc , Rare:Drum", range: "60km/h", dimension: "1836*680*1099", weight: "...", price: "...", sold: 1700, colors: ["black", "yellow", "green"] },
  { id: 13, name: "YADEA GT30", imageUrl: Yadea_GT30, description: "2 Wheel", product_brand: "YADEA", battery_capacity: "60V/23Ah", battery_type: "Graphen Battery", motor_power: "1000W", motor_type: "DC Brushless Motor", break: "Front:Disc , Rare: Drum", range: "60km/h", dimension: "1775*675*1130", weight: "...", price: "...", sold: 1900, colors: ["black", "yellow", "green"] },

  // { id: 39, name: "Spare Part 2", imageUrl: "path_to_image10", description: "Spare Part 2", product_brand: "Spare Part", sold: 50 },
  // { id: 40, name: "Spare Part 2", imageUrl: "path_to_image10", description: "Spare Part 2", product_brand: "Spare Part", sold: 100 },
  // Add more products as needed  
];

export default products;
