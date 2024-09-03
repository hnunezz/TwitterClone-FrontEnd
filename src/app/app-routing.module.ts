import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ConfigComponent } from './features/config/config.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/config",
    pathMatch: 'full'
  },
  {
    path: "config",
    component: ConfigComponent,
  },
  {
    path: "home",
    loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
