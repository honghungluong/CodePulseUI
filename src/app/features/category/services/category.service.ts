import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCateGoryRequestModel } from '../models/add-category-request-model';
import { Observable } from 'rxjs';
import { CategoriesModel } from '../models/category-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private __httpClient:HttpClient) { }

  // http post
  addCategory(model: AddCateGoryRequestModel): Observable<void> {
    return this.__httpClient.post<void>(`${environment.apiBaseUrl}/api/Categories`, model);
  }

  // http get
  GetAllGategory(){
    return this.__httpClient.get<CategoriesModel[]>(`${environment.apiBaseUrl}/api/Categories`);
  }
}
