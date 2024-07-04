import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.components';
import { ListGifsComponent } from './components/list-gifs/list-gifs.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    ListGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }