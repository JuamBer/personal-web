import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Profile {
  id?: string;
  username: string;
  website: string;
  avatar_url: string;
}

export const supabaseClient = createClient(environment.apiUrl, environment.apiKey);
@Injectable({ providedIn: 'root' })
export class AuthService {
  private supabase: SupabaseClient;

  _session: AuthSession | null = null;
  private currentUser: BehaviorSubject<User | boolean> | any = new BehaviorSubject(null);

  constructor() {
    this.supabase = supabaseClient;

    this.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        if (session) this.currentUser.next(session.user);
      } else {
        this.currentUser.next(false);
      }
    });

    // Trigger initial session load
    this.loadUser();

    this.supabase.auth.onAuthStateChange((event, session) => {});
  }

  async loadUser() {
    if (this.currentUser.value) {
      // User is already set, no need to do anything else
      return;
    }
    const user = await this.supabase.auth.getUser();

    if (user.data.user) {
      this.currentUser.next(user.data.user);
    } else {
      this.currentUser.next(false);
    }
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    return this._session;
  }

  profile(user: User) {
    return this.supabase.from('profiles').select(`username, website, avatar_url`).eq('id', user.id).single();
  }

  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  async signIn(email: string) {
    // this.supabase.auth.signInWithOAuth;
    return await this.supabase.auth.signInWithOtp({
      email,
      // options: {
      //   emailRedirectTo: `${environment.webUrl}/backoffice`,
      // },
    });
  }
  async signInLogin(email: string, pass: string) {
    // this.supabase.auth.signInWithOAuth;
    return await this.supabase.auth.signInWithPassword({
      email: email,
      password: pass,
    });
  }

  async sendResetPassword(email: string) {
    return await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${environment.webUrl}/form-reset-password`,
    });
  }

  async updatePassword(password: string) {
    return await this.supabase.auth.updateUser({
      password,
    });
  }

  async sendResetPasswordER(email: string) {
    return await this.supabase.auth.updateUser({
      email: 'juambersaezgarcia@gmail.com',
      password: '86upSp8wSp99bikfbq0w',
    });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  updateProfile(profile: Profile) {
    const update = {
      ...profile,
      updated_at: new Date(),
    };

    return this.supabase.from('profiles').upsert(update);
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file);
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  getCurrentUserId(): string | any {
    if (this.currentUser.value) {
      return (this.currentUser.value as User).id;
    } else {
      return null;
    }
  }
}
