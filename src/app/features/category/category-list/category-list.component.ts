import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoriesModel } from '../models/category-model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories?: CategoriesModel[];

  constructor(private _service: CategoryService) {
    this._service.GetAllGategory().subscribe({
      next: (value) => {
        this.categories = value;
        console.log('get successfully');
      },
      error(err) {
        alert('get failed');
      },
    });
  }
}
