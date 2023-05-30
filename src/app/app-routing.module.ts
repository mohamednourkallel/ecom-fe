import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutarticleComponent } from './articles/ajoutarticle/ajoutarticle.component';
import { EditarticleComponent } from './articles/editarticle/editarticle.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { AjoutcategorieComponent } from './categories/ajoutcategorie/ajoutcategorie.component';
import { EditcategorieComponent } from './categories/editcategorie/editcategorie.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { AjoutscategorieComponent } from './scategories/ajoutscategorie/ajoutscategorie.component';
import { EditscategorieComponent } from './scategories/editscategorie/editscategorie.component';
import { CardcategoriesComponent } from './categories/cardcategories/cardcategories.component';

const routes: Routes = [
  {path:"listarticles", component :ListarticlesComponent},
  {path:'ajarticle', component :AjoutarticleComponent},
  {path:"editarticle",component:EditarticleComponent},
  {path:"listcategories",component:ListcategoriesComponent},
  {path:"ajcategorie",component:AjoutcategorieComponent},
  {path:"editcategorie",component:EditcategorieComponent},
  {path:"listscategories",component:ListscategoriesComponent},
  {path:"ajscategorie",component:AjoutscategorieComponent},
  {path:"editscategorie",component:EditscategorieComponent},
  {path:"articlecard",component:CardcategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
