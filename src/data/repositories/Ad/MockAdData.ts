import { Ad } from "@/entities/Ad";

export const MockAdData: Ad[] = [
  new Ad(
    1,
    [require("@/assets/Ad/images/ad1.jpg")],
    "Ouça suas músicas sem interrupções!"
  ),
  new Ad(
    2,
    [require("@/assets/Ad/images/ad2.jpg")],
    "Seu uber te espera!"
  ),
  new Ad(
    3,
    [require("@/assets/Ad/images/ad3.jpg")],
    "Seu pet merece o melhor!"
  )
];
