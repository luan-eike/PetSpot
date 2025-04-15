import { Event } from "@/entities/Event";

export const MockEventData: Event[] = [
  new Event(
    1,
    "Feira de Adoção",
    new Date("2025-04-15"),
    "Rua dos Pets, 123 - Centro",
    [require("@/assets/Event/images/event1.jpg")]
  ),
  new Event(
    2,
    "Inauguração de Clínica Veterinária",
    new Date("2025-05-10"),
    "Av. Saúde Animal, 456 - Zona Sul",
    [require("@/assets/Event/images/event2.jpg")]
  ),
  new Event(
    3,
    "Passeio no Parque",
    new Date("2025-06-02"),
    "Parque Central - Alameda das Árvores",
    [require("@/assets/Event/images/event3.jpg")]
  )
];
