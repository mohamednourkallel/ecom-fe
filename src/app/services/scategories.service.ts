import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scategorie } from '../models/scategorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  url="http://localhost:3001/api/scategories"
  constructor(private http:HttpClient) { }
  
  getscategories=():Observable<Scategorie[]>=>{
    return this.http.get<Scategorie[]>(this.url);
  
    }
  
  AddScategorie =(scat: Scategorie ):Observable<Scategorie>=>
    {
    return this.http.post<Scategorie>(this.url,scat)
    }
    UpdateScategorie(id:object,cat:Scategorie): Observable<Scategorie>
    {
    return this.http.put<Scategorie>(this.url + '/' + id,cat);
    }
    
    DeleteScategorie(id:object):Observable<Scategorie>
    {
    return this.http.delete<Scategorie>(this.url + '/' + id);
    }
}
