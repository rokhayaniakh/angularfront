import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { PartenaireService } from './service/partenaire.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
// import { TokenInterceptorService } from './service/token-interceptor.service';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { CaissierComponent } from './caissier/caissier.component';
import { FooterComponent } from './footer/footer.component';
import { ComptuserComponent } from './comptuser/comptuser.component';
import { DepotComponent } from './depot/depot.component';
import { ComptpartComponent } from './comptpart/comptpart.component';
import { ListpartComponent } from './listpart/listpart.component';
import { ListuserComponent } from './listuser/listuser.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ListerdepotComponent } from './listerdepot/listerdepot.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    PartenaireComponent,
    CaissierComponent,
    FooterComponent,
    ComptuserComponent,
    DepotComponent,
    ComptpartComponent,
    ListpartComponent,
    ListuserComponent,
    TransactionComponent,
    ListerdepotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService ,
    PartenaireService
    // ,{provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
