import { Event } from '@/entities/Event';
import { EventRepository } from '@data/repositories/Event/EventRepository';

export class EventService {
  private eventRepository: EventRepository;

  constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  getAllEvents(): Event[] {
    return this.eventRepository.getAllEvents();
  }

  getEventById(id: number): Event | undefined {
    return this.eventRepository.getEventById(id);
  }

  addEvent(event: Event): void {
    if (!event.name || !event.date) {
      throw new Error('Nome e data do evento são obrigatórios.');
    }
    this.eventRepository.addEvent(event);
  }

  updateEvent(id: number, updatedEvent: Partial<Event>): void {
    this.eventRepository.updateEvent(id, updatedEvent);
  }

  deleteEvent(id: number): void {
    this.eventRepository.deleteEvent(id);
  }
}
