import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  {path:'account',component: AccountComponent},
  {path:'transfer',component: TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AccountComponent,TransferComponent];