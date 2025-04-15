import { Ad } from '@/entities/Ad';


export class AdRepository {
  private ads: Ad[] = [];

  getAllAds(): Ad[] {
    return this.ads;
  }

  getAdById(id: number): Ad | undefined {
    return this.ads.find(ad => ad.id === id);
  }

  addAd(ad: Ad): void {
    this.ads.push(ad);
  }

  updateAd(id: number, updatedAd: Partial<Ad>): void {
    this.ads = this.ads.map(ad =>
      ad.id === id ? { ...ad, ...updatedAd } : ad
    );
  }

  deleteAd(id: number): void {
    this.ads = this.ads.filter(ad => ad.id !== id);
  }
}
