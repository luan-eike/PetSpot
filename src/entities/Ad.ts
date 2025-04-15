export class Ad {
  constructor(
    public id: number,
    public image: number[],
    public text: string,
    public title?: string,
    public createdDate: Date = new Date()
  ) {}
}
