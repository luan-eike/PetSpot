import { PetRepository } from '@/data/repositories/Pet/PetRepository';
import { PetService } from '@/services/Pet/PetService';
import { initializeMockData } from './bootstrap';

const petRepository = new PetRepository();
initializeMockData(petRepository);

export const petService = new PetService(petRepository);
