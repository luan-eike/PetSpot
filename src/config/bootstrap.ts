import { PetRepository } from '@/data/repositories/Pet/PetRepository';
import { MockPetData }  from '@/data/repositories/Pet/MockPetData';

export function initializeMockData(petRepository: PetRepository) {
  MockPetData.forEach(pet => petRepository.addPet(pet));
}
