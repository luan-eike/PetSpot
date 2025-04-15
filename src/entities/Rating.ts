export class Rating {
  constructor(
    public id: number,
    public score: number,
    public comment?: string,
    public reviewerId?: string,
    public revieweeId?: string,
    public createdDate: Date = new Date()
  ) {}
}
