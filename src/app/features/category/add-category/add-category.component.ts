import { Component } from '@angular/core';
import { AddCateGoryRequestModel } from '../models/add-category-request-model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  model: AddCateGoryRequestModel

  constructor(private categoryService: CategoryService){
    this.model = {
      Name: '',
      UrlHandle: ''  
    };
  }

  onFormSubmit(){
    console.log("health check");
    console.log(this.model);
    this.categoryService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        console.log('Create is successfully!');
      },
      error: (err) => {
        alert('Create is failed!');
      }
    })
  }
}
