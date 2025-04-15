import { Rating } from '@/entities/Rating';
import { RatingRepository } from '@data/repositories/Rating/RatingRepository';

export class RatingService {
  private ratingRepository: RatingRepository;

  constructor(ratingRepository: RatingRepository) {
    this.ratingRepository = ratingRepository;
  }

  getAllRatings(): Rating[] {
    return this.ratingRepository.getAllRatings();
  }

  getRatingById(id: number): Rating | undefined {
    return this.ratingRepository.getRatingById(id);
  }

  addRating(rating: Rating): void {
    if (rating.score < 1 || rating.score > 5) {
      throw new Error('A pontuação deve estar entre 1 e 5.');
    }
    this.ratingRepository.addRating(rating);
  }

  updateRating(id: number, updatedRating: Partial<Rating>): void {
    this.ratingRepository.updateRating(id, updatedRating);
  }

  deleteRating(id: number): void {
    this.ratingRepository.deleteRating(id);
  }
}
