import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../user.interface';
import { usersData } from '../../../user.data';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class UsersComponent {

  users: User[] = usersData;

  searchTerm: string = '';
  visibleCount = 5;

  get filteredUsers(): User[] {
    return this.users
      .filter(user =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .slice(0, this.visibleCount);
  }

  loadMore() {
    this.visibleCount += 5;
  }

  getTotalCartQuantity(user: User): number {
    return user.cartsList.reduce((total, item) => total + item.quantity, 0);
  }

}
