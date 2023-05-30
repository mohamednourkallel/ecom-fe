import { Component,OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticlesService } from '../../services/articles.service';


@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
  listarticles?:Article[];
  constructor(private artservices :ArticlesService){}
  ngOnInit():void{

    this.getart()
  }
  getart(){
    this.artservices.getarticles().subscribe((data:Article[])=> this.listarticles=data)
  }
    
 

  Supprimart(id:any){
    
    this.artservices.DeleteCategorie(id).subscribe(data=>{this.getart()});
    }
  }

