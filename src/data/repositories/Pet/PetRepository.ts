import { Pet } from '@/entities/Pet';

export class PetRepository {
  private pets: Pet[] = [];

  getAllPets(): Pet[] {
    return this.pets;
  }

  getPetById(id: number): Pet | undefined {
    return this.pets.find(pet => pet.id === id);
  }

  addPet(pet: Pet): void {
    this.pets.push(pet);
  }

  updatePet(id: number, updatedPet: Partial<Pet>): void {
    this.pets = this.pets.map(pet =>
      pet.id === id ? new Pet(
        pet.id,
        updatedPet.ownerId ?? pet.ownerId,
        updatedPet.name ?? pet.name,
        updatedPet.type ?? pet.type,
        updatedPet.breed ?? pet.breed,
        updatedPet.image ?? pet.image,
        updatedPet.birthdate ?? pet.birthdate,
        updatedPet.gender ?? pet.gender,
        updatedPet.description ?? pet.description,
        updatedPet.createdDate ?? pet.createdDate
      ) : pet
    );
  }

  deletePet(id: number): void {
    this.pets = this.pets.filter(pet => pet.id !== id);
  }
}
