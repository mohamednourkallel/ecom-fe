import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutcategorieComponent } from './categories/ajoutcategorie/ajoutcategorie.component';
import { EditcategorieComponent } from './categories/editcategorie/editcategorie.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { AjoutscategorieComponent } from './scategories/ajoutscategorie/ajoutscategorie.component';
import { EditscategorieComponent } from './scategories/editscategorie/editscategorie.component';
import { ListscategoriesComponent } from './scategories/listscategories/listscategories.component';
import { AjoutarticleComponent } from './articles/ajoutarticle/ajoutarticle.component';
import { EditarticleComponent } from './articles/editarticle/editarticle.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardcategoriesComponent } from './categories/cardcategories/cardcategories.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutcategorieComponent,
    EditcategorieComponent,
    ListcategoriesComponent,
    AjoutscategorieComponent,
    EditscategorieComponent,
    ListscategoriesComponent,
    AjoutarticleComponent,
    EditarticleComponent,
    ListarticlesComponent,
    CardcategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
