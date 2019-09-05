import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import {PartenaireComponent } from './partenaire/partenaire.component';
import {CaissierComponent } from './caissier/caissier.component';
import {FooterComponent } from './footer/footer.component';
import {DepotComponent } from './depot/depot.component';
import {ComptuserComponent } from './comptuser/comptuser.component';
import {ComptpartComponent } from './comptpart/comptpart.component';
import {ListpartComponent } from './listpart/listpart.component';
import {ListuserComponent } from './listuser/listuser.component';
import {TransactionComponent } from './transaction/transaction.component';
import {ListerdepotComponent } from './listerdepot/listerdepot.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'partenaire', component: PartenaireComponent},
  { path: 'caissier', component:CaissierComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'depot', component:DepotComponent},
  { path: 'comptuser', component:ComptuserComponent},
  { path: 'comptpart', component:ComptpartComponent},
  { path: 'listpart', component:ListpartComponent},
  { path: 'listuser', component:ListuserComponent},
  { path: 'transaction', component:TransactionComponent},
  { path: 'listerdepot', component:ListerdepotComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
