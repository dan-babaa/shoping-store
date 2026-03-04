import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class SearchComponent implements OnInit {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  searchTerm: string = '';

  ngOnInit(): void {

    // 👇 Read search from URL
    this.route.queryParamMap.subscribe(params => {
      const search = params.get('search');
      this.searchTerm = search ?? '';
    });
  }

  onSearch() {

    if (!this.searchTerm.trim()) return;

    this.router.navigate(['/products'], {
      queryParams: { search: this.searchTerm.trim() }
    });
  }
  clearSearch() {
    this.searchTerm = '';
  }
}

