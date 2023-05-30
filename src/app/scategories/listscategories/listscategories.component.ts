import { Component } from '@angular/core';
import { Scategorie } from '../../models/scategorie';
import { ScategoriesService } from '../../services/scategories.service';

@Component({
  selector: 'app-listscategories',
  templateUrl: './listscategories.component.html',
  styleUrls: ['./listscategories.component.css']
})
export class ListscategoriesComponent {
  listscategories?:Scategorie[];
  constructor(private scatservices :ScategoriesService){}
  ngOnInit():void{
    this.getscat()
    
  }
  getscat(){
    this.scatservices.getscategories().subscribe((data:Scategorie[])=> this.listscategories=data)
  }
  
  Supprimscategorie(id:any){
    
    this.scatservices.DeleteScategorie(id).subscribe(data=>{this.getscat()});
    }
}
