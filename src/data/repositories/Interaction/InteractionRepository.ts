import { Interaction } from '@/entities/Interaction';

export class InteractionRepository {
  private interactions: Interaction[] = [];

  getAllInteractions(): Interaction[] {
    return this.interactions;
  }

  getInteractionById(id: number): Interaction | undefined {
    return this.interactions.find(interaction => interaction.id === id);
  }

  addInteraction(interaction: Interaction): void {
    this.interactions.push(interaction);
  }

  updateInteraction(id: number, updatedInteraction: Partial<Interaction>): void {
    this.interactions = this.interactions.map(interaction =>
      interaction.id === id ? { ...interaction, ...updatedInteraction } : interaction
    );
  }

  deleteInteraction(id: number): void {
    this.interactions = this.interactions.filter(interaction => interaction.id !== id);
  }
}
