import { Pet } from '@/entities/Pet';
import { Ad } from '@/entities/Ad';
import { AdRepository } from '@data/repositories/Ad/AdRepository';

export class AdService {
  private adRepo: AdRepository;
  private minInterval: number;
  private maxInterval: number;

  constructor(adRepo: AdRepository, minInterval = 5, maxInterval = 9) {
    this.adRepo = adRepo;
    this.minInterval = minInterval;
    this.maxInterval = maxInterval;
  }

  private getRandomInterval(): number {
    return Math.floor(
      Math.random() * (this.maxInterval - this.minInterval + 1)
    ) + this.minInterval;
  }

  injectAdsInPetList(pets: Pet[]): (Pet | Ad)[] {
    const ads = this.adRepo.getAllAds();
    if (ads.length === 0) return pets;

    const result: (Pet | Ad)[] = [];
    let adIndex = 0;
    let nextAdAfter = this.getRandomInterval();

    for (let i = 0; i < pets.length; i++) {
      result.push(pets[i]);

      if ((i + 1) === nextAdAfter && adIndex < ads.length) {
        result.push(ads[adIndex]);
        adIndex = (adIndex + 1) % ads.length;
        nextAdAfter += this.getRandomInterval();
      }
    }

    return result;
  }
}
