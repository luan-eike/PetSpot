import { Pet } from '@/entities/Pet';
import { PetRepository } from '@data/repositories/Pet/PetRepository';
import { UserSession } from '@services/User/UserSession';

export class PetService {
  private petRepository: PetRepository;

  constructor(petRepository: PetRepository) {
    this.petRepository = petRepository;
  }

  getAllPets(): Pet[] {
    return this.petRepository.getAllPets();
  }

  getPetById(id: number): Pet | undefined {
    return this.petRepository.getPetById(id);
  }

  getPetsFromCurrentUser(): Pet[] {
    const currentUserId = UserSession.getCurrentUserId();
    return this.getAllPets().filter(pet => pet.ownerId === currentUserId);
  }

  getPetsExcludingCurrentUser(): Pet[] {
    const currentUserId = UserSession.getCurrentUserId();
    return this.getAllPets().filter(pet => pet.ownerId !== currentUserId);
  }

  addPet(pet: Pet): void {
    if (!pet.name || !pet.breed) {
      throw new Error('Nome e espécie do pet são obrigatórios.');
    }
    this.petRepository.addPet(pet);
  }

  updatePet(id: number, updatedPet: Partial<Pet>): void {
    this.petRepository.updatePet(id, updatedPet);
  }

  deletePet(id: number): void {
    this.petRepository.deletePet(id);
  }
}
