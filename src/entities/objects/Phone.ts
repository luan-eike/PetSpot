export class Phone {
  private value: string;

  constructor(value: string) {
    if (!Phone.isValid(value)) {
      throw new Error('Invalid phone number');
    }
    this.value = value;
  }

  static isValid(phone: string): boolean {
    // Simples regex de validação internacional, pode ser adaptada conforme a necessidade
    return /^\+?\d{10,15}$/.test(phone);
  }

  getValue(): string {
    return this.value;
  }
}
