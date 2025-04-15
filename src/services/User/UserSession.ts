export class UserSession {

  private static currentUserId: number | null = null;

  static login(userId: number): void {
    this.currentUserId = userId;
  }

  static logout(): void {
    this.currentUserId = null;
  }

  static getCurrentUserId(): number | null {
    return this.currentUserId;
  }

  static isLoggedIn(): boolean {
    return this.currentUserId !== null;
  }

  static setCurrentUserId(userId: number): void {
    this.currentUserId = userId;
  }

  static initialize(): void {
    this.currentUserId = null;   }
}
