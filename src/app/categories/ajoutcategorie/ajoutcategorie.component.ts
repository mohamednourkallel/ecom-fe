import { Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Categorie } from '../../models/categorie';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajoutcategorie',
  templateUrl: './ajoutcategorie.component.html',
  styleUrls: ['./ajoutcategorie.component.css']
})
export class AjoutcategorieComponent {
  constructor(private catServ: CategoriesService ,private router:Router) { }
  cat:Categorie=new Categorie()
  ajoutcategorie=()=>{
    this.catServ.AddCategorie(this.cat).subscribe(data=>this.router.navigate(['/listcategories']))
    
  }

}


