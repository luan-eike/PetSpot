import { Rating } from '@/entities/Rating';

export class RatingRepository {
  private ratings: Rating[] = [];

  getAllRatings(): Rating[] {
    return this.ratings;
  }

  getRatingById(id: number): Rating | undefined {
    return this.ratings.find(rating => rating.id === id);
  }

  addRating(rating: Rating): void {
    this.ratings.push(rating);
  }

  updateRating(id: number, updatedRating: Partial<Rating>): void {
    this.ratings = this.ratings.map(rating =>
      rating.id === id ? { ...rating, ...updatedRating } : rating
    );
  }

  deleteRating(id: number): void {
    this.ratings = this.ratings.filter(rating => rating.id !== id);
  }
}
