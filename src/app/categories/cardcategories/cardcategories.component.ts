import { Component } from '@angular/core';
import { Categorie } from '../../models/categorie';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-cardcategories',
  templateUrl: './cardcategories.component.html',
  styleUrls: ['./cardcategories.component.css']
})
export class CardcategoriesComponent {
  categories?:Categorie[];
  constructor(private catservices :CategoriesService){}
  ngOnInit():void{
    this.catservices.getcategories().subscribe((data:Categorie[])=> this.categories=data)
  }
}
