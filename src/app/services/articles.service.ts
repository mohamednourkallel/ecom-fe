import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Scategorie } from '../models/scategorie';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  url="http://localhost:3001/api/articles"

  constructor(private http:HttpClient) { }
getarticles=():Observable<Article[]>=>{
    return this.http.get<Article[]>(this.url);
    }

  
  Addarticle =(Acat: Article ):Observable<Article>=>
    {
    return this.http.post<Article>(this.url,Acat)
    } 
    
  UpdateCategorie(id:object,Acat:Article): Observable<Article>
{
return this.http.put<Article>(this.url + '/' + id,Acat);
}

  DeleteCategorie(id:object):Observable<Article>
{
return this.http.delete<Article>(this.url + '/' + id);
}
  getartbyID(id:any){
    return this.http.get(this.url + "/" + id)
  }

  getscategories=():Observable<Scategorie[]>=>{
    return this.http.get<Scategorie[]>(this.url);
    }
}
