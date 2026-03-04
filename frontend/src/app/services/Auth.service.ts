import { Injectable } from '@angular/core';
import { User } from '../shared/models/Clothe';
import { USERS } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.users = USERS;
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(email: string, password: string): boolean {

    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }

    return false;
  }

  signup(newUser: Omit<User, 'id' | 'createdAt'>): boolean {

    const emailExists = this.users.some(u => u.email === newUser.email);
    if (emailExists) return false;

    const user: User = {
      ...newUser,
      id: this.users.length + 1,
      createdAt: new Date()
    };

    this.users.push(user);
    this.saveUsers();

    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }

  getCurrentUser(): User | null {
    const stored = localStorage.getItem('currentUser');
    return stored ? JSON.parse(stored) : null;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
