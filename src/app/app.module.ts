import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent ,SidebarComponent,FooterComponent} from './layouts';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ErrorInterceptor, TokenInterceptor} from './interceptors';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
//import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DefaultComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    ChartsModule,
    NgxUiLoaderModule,
    MatSidenavModule,
    ToastrModule.forRoot(), 
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
