import { Pet } from "@/entities/Pet";

export const MockPetData: Pet[] = [
  new Pet(
    1,
    2,
    "Bilbo",
    "dog",
    "Golden Retriever",
    [require("@/assets/Pet/images/bilbo.jpg")],
    new Date("2017-03-20"),
    undefined,
    undefined,
    
  ),
  new Pet(
    2,
    1,
    "Bob",
    "dog",
    "Beagle",
    [require("@/assets/Pet/images/bob.jpg")],
    new Date("2020-08-10"),
    undefined,
    undefined,
    
  ),
  new Pet(
    3,
    1,
    "Charlie",
    "dog",
    "Boston Terrier",
    [require("@/assets/Pet/images/charlie.jpg")],
    new Date("2022-01-05"),
    undefined,
    undefined,
    
  ),
  new Pet(
    4,
    1,
    "Luna",
    "cat",
    "Siamese",
    [require("@/assets/Pet/images/luna.jpg")],
    new Date("2019-11-12"),
    undefined,
    undefined,
    
  ),
  new Pet(
    5,
    4,
    "Mia",
    "cat",
    "Calico",
    [require("@/assets/Pet/images/mia.jpg")],
    new Date("2021-06-25"),
    undefined,
    undefined,
    
  ),
  new Pet(
    6,
    2,
    "Rex",
    "dog",
    "Labrador Retriever",
    [require("@/assets/Pet/images/rex.jpg")],
    new Date("2016-04-15"),
    undefined,
    undefined,
    
  )
];
