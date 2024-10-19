import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from "./components/table/table.component";
import { Table2Component } from "./components/table2/table2.component";

const routes: Routes = [
  { path: 'table1', component: TableComponent },
  { path: 'table2', component: Table2Component }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule{}

