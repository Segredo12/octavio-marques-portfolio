import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoamiComponent } from './whoami/whoami.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '',   redirectTo: '/menu', pathMatch: 'full' },
  { path: 'who-am-i', component: WhoamiComponent },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
