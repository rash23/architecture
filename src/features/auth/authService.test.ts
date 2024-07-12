import { describe, expect, beforeEach, it } from 'vitest';
import { AuthService } from '../../core/services/AuthService';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('should initialize with authentication state false', () => {
    service.isAuthenticated().subscribe((isAuth) => {
      expect(isAuth).toBe(false);
    });
  });

  it('should authenticate user with correct credentials', () => {
    service.login('user', 'pass');
    service.isAuthenticated().subscribe((isAuth) => {
      expect(isAuth).toBe(true);
    });
  });

  it('should throw error on invalid credentials during login', () => {
    expect(() => {
      service.login('invalid_user', 'invalid_pass');
    }).toThrowError('Invalid username or password');
  });

  it('should logout and set authentication state to false', () => {
    service.login('user', 'pass');
    service.logout();
    service.isAuthenticated().subscribe((isAuth) => {
      expect(isAuth).toBe(false);
    });
  });

  it('should maintain authentication state across multiple subscriptions', () => {
    const authObservable = service.isAuthenticated();
    let result1: boolean | undefined;
    let result2: boolean | undefined;

    const sub1 = authObservable.subscribe((isAuth) => {
      result1 = isAuth;
    });

    const sub2 = authObservable.subscribe((isAuth) => {
      result2 = isAuth;
    });

    expect(result1).toBe(false);
    expect(result2).toBe(false);

    service.login('user', 'pass');

    expect(result1).toBe(true);
    expect(result2).toBe(true);

    service.logout();

    expect(result1).toBe(false);
    expect(result2).toBe(false);

    sub1.unsubscribe();
    sub2.unsubscribe();
  });
});
