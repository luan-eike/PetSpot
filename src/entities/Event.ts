import { ImageSourcePropType } from 'react-native';

export class Event {
  constructor(
    public id: number,
    public name: string,
    public date: Date,
    public address: string,
    public image?: number[],
    public description?: string,
    public creatorId?: string,
    public createdDate: Date = new Date()
  ) {}
}
