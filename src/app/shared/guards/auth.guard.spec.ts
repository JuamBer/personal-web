import { PLATFORM_ID, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { User } from '@supabase/supabase-js';
import { of } from 'rxjs';
import { configuration } from 'src/assets/configuration';
import { AuthService } from '../services/auth.service';
import { LangService } from '../services/lang.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { getCurrentUser: () => of({}) } },
        { provide: Router, useValue: { navigate: () => {} } },
        { provide: PLATFORM_ID, useValue: 'browser' },
        {
          provide: LangService,
          useValue: {
            lang$: of(configuration.defaultLanguage),
            lang: signal(configuration.defaultLanguage),
          },
        },
      ],
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true for a logged in user', (done) => {
    spyOn(authService, 'getCurrentUser').and.returnValue(of({} as User));
    guard.canActivate().subscribe((isAllowed) => {
      expect(isAllowed).toBe(true);
      done();
    });
  });

  it('should navigate to login for a logged out user', (done) => {
    spyOn(authService, 'getCurrentUser').and.returnValue(of(null));
    spyOn(router, 'navigate');
    guard.canActivate().subscribe((isAllowed) => {
      expect(isAllowed).toBe(false);
      expect(router.navigate).toHaveBeenCalledWith([`/${configuration.defaultLanguage}/login`]);
      done();
    });
  });
});
