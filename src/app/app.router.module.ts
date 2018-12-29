import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapdemoComponent } from './bootstrapdemo/bootstrapdemo.component';
import { NgscrollspyComponent } from './ngscrollspy/ngscrollspy.component';
export const routes: Routes = [
  { path: 'bootstrap', component: BootstrapdemoComponent },
  { path: 'scrollspy', component: NgscrollspyComponent },
  { path: '', redirectTo: '/scrollspy', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
