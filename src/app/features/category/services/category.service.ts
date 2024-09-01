import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCateGoryRequestModel } from '../models/add-category-request-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private __httpClient:HttpClient) { }

  addCategory(model: AddCateGoryRequestModel): Observable<void> {
    return this.__httpClient.post<void>('https://localhost:7295/api/Categories', model);
  }

  // addCategory(model: AddCateGoryRequestModel) {
  //     this.__httpClient.post('https://localhost:7295/api/Categories', model);
  // }
}
