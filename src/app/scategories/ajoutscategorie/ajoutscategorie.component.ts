import { Component } from '@angular/core';
import { Scategorie } from '../../models/scategorie';
import { ScategoriesService } from '../../services/scategories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutscategorie',
  templateUrl: './ajoutscategorie.component.html',
  styleUrls: ['./ajoutscategorie.component.css']
})
export class AjoutscategorieComponent {
  constructor(private ScatServ: ScategoriesService ,private router:Router) { }
  scat:Scategorie=new Scategorie()
  ajoutscategorie=()=>{
    this.ScatServ.AddScategorie(this.scat).subscribe(data=>this.router.navigate(['/listscategories']))
    
  }

}
