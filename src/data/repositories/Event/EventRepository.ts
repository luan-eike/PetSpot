import { Event } from '@/entities/Event';

export class EventRepository {
  private events: Event[] = [];

  getAllEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  addEvent(event: Event): void {
    this.events.push(event);
  }

  updateEvent(id: number, updatedEvent: Partial<Event>): void {
    this.events = this.events.map(event =>
      event.id === id ? { ...event, ...updatedEvent } : event
    );
  }

  deleteEvent(id: number): void {
    this.events = this.events.filter(event => event.id !== id);
  }
}
