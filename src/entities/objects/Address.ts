export class Address {
  constructor(
    public readonly street: string,
    public readonly number: string,
    public readonly neighborhood: string,
    public readonly city: string,
    public readonly state: string,
    public readonly country: string
  ) {
    if (!street || !number || !neighborhood || !city || !state || !country) {
      throw new Error('Invalid address: all fields are required');
    }
  }

  toString(): string {
    return `${this.street}, ${this.number}, ${this.neighborhood}, ${this.city} - ${this.state}, ${this.country}`;
  }
}
