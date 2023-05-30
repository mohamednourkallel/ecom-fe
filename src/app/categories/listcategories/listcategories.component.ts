import { Component,OnInit } from '@angular/core';
import { Categorie } from '../../models/categorie';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  listcategories?:Categorie[];
  constructor(private catservices :CategoriesService){}
  ngOnInit():void{
    this.getcat()
  }
  getcat(){
    this.catservices.getcategories().subscribe((data:Categorie[])=> this.listcategories=data)
  }
    
 

  Supprimcategorie(id:any){
    
    this.catservices.DeleteCategorie(id).subscribe(data=>{this.getcat()});
    }
    

}
