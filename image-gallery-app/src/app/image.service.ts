import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
    private apiUrl = 'https://dog.ceo/api/breeds/image/random';
  
    constructor(private http: HttpClient) { }
  
    getRandomImage(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
}
