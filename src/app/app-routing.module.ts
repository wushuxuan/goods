import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detail/:url',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  { 
    path: 'card/:url/:long/:wide/:high/:weight',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
