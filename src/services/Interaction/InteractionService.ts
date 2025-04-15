import { Interaction } from '@/entities/Interaction';
import { InteractionRepository } from '@data/repositories/Interaction/InteractionRepository';

export class InteractionService {
  private interactionRepository: InteractionRepository;

  constructor(interactionRepository: InteractionRepository) {
    this.interactionRepository = interactionRepository;
  }

  getAllInteractions(): Interaction[] {
    return this.interactionRepository.getAllInteractions();
  }

  getInteractionById(id: number): Interaction | undefined {
    return this.interactionRepository.getInteractionById(id);
  }

  addInteraction(interaction: Interaction): void {
    if (!interaction.status) {
      throw new Error('O status da interação é obrigatório.');
    }
    this.interactionRepository.addInteraction(interaction);
  }

  updateInteraction(id: number, updatedInteraction: Partial<Interaction>): void {
    this.interactionRepository.updateInteraction(id, updatedInteraction);
  }

  deleteInteraction(id: number): void {
    this.interactionRepository.deleteInteraction(id);
  }
}
