import { BehaviorSubject } from 'rxjs';

export class AuthService {
  private authState: BehaviorSubject<boolean>;

  constructor() {
    this.authState = new BehaviorSubject<boolean>(false);
  }

  login(username: string, password: string): void {
    if (username === 'user' && password === 'pass') {
      this.authState.next(true);
    } else {
        throw new Error('Invalid username or password');
    }
  }

  logout(): void {
    this.authState.next(false);
  }

  isAuthenticated() {
    return this.authState.asObservable();
  }
}

export const authService = new AuthService();
