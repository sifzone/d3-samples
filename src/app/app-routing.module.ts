import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D3WorldComponent } from './d3-world/d3-world.component';
import { TableTemplateComponent } from './table-template/table-template.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { DragDropTemplateComponent } from './drag-drop-template/drag-drop-template.component';
import { TreeTemplateComponent } from './tree-template/tree-template.component';


const routes: Routes = [
  {path: 'dashboard', component: D3WorldComponent},
  {path: 'table', component: TableTemplateComponent},
  {path: 'form', component: FormTemplateComponent},
  {path: 'dragNdrop', component: DragDropTemplateComponent},
  {path: 'tree', component: TreeTemplateComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
