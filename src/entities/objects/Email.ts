export class Email {
    private value: string;
  
    constructor(value: string) {
      if (!Email.isValid(value)) {
        throw new Error('Invalid email address');
      }
      this.value = value;
    }
  
    static isValid(email: string): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    getValue(): string {
      return this.value;
    }
  }
  