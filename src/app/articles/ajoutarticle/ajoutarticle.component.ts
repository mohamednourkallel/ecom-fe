import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { ArticlesService } from '../../services/articles.service';
import { Router } from '@angular/router';
import { Scategorie } from 'src/app/models/scategorie';
import { ScategoriesService } from 'src/app/services/scategories.service';


@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent {
  constructor(private AcatServ: ArticlesService ,private router:Router,private scatservices :ScategoriesService) { }
  Acat:Article= new Article()
  listscategorie?:Scategorie[]

  ngOnInit():void{

    this.getscat()
  }

  ajoutarticle=()=>{
    this.AcatServ.Addarticle(this.Acat).subscribe(data=>this.router.navigate([
      "/listarticles"]))
  }
  getscat=()=> {
    this.scatservices.getscategories().subscribe((data:Scategorie[])=> 
    this.listscategorie=data)
  } 

}
