import { Component, OnDestroy } from '@angular/core';
import { AddCateGoryRequestModel } from '../models/add-category-request-model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCateGoryRequestModel
  private addCategorySubcription? :Subscription;

  constructor(private categoryService: CategoryService){
    this.model = {
      Name: '',
      UrlHandle: ''
    };
  }
  ngOnDestroy(): void {
    this.addCategorySubcription?.unsubscribe();
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
