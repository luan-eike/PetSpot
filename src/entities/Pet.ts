export class Pet {
  constructor(
    public id: number,
    public ownerId: number,
    public name: string,
    public type: string,
    public breed: string,
    public image: number[],
    public birthdate?: Date,
    public gender?: string,
    public description?: string,
    public createdDate: Date = new Date()
  ) {}

  get age(): number | undefined {
    if (!this.birthdate) return undefined;

    const now = new Date();
    let age = now.getFullYear() - this.birthdate.getFullYear();
    const monthDiff = now.getMonth() - this.birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < this.birthdate.getDate())) {
      age--;
    }
    return age;
  }
}
