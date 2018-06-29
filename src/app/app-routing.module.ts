import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactPageComponent} from './main-pages/contact-page/contact-page.component';
import {StorePageComponent} from './main-pages/store-page/store-page.component';
import {HomePageComponent} from './main-pages/home-page/home-page.component';
import {AboutPageComponent} from './main-pages/about-page/about-page.component';
import {BookProductPageComponent} from './sub-pages/book-product-page/book-product-page.component';
import {AuthorProductPageComponent} from './sub-pages/author-product-page/author-product-page.component';
import {ToPayPageComponent} from './sub-pages/to-pay-page/to-pay-page.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home' , component: HomePageComponent,data:{title:'דף הבית'}},
    {path: 'about' , component: AboutPageComponent,data:{title:'אודות'}},
    {path: 'store' , component: StorePageComponent,data:{title:'החנות'}},
    {path: 'contact' , component: ContactPageComponent,data:{title:'צור קשר'}},
    {path: 'book/:id' , component: BookProductPageComponent},
    {path: 'author/:authid' , component: AuthorProductPageComponent},
    {path: 'toPayPage' , component: ToPayPageComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
