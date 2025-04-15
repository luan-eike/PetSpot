export class Interaction {
  constructor(
    public id: number,
    public userId?: string,
    public petId?: string,
    public status?: boolean,
    public createdDate: Date = new Date()
  ) {}
}
