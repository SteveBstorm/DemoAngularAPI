import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbInputModule, NbListModule, NbCardModule, NbDialogModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { NavComponent } from './shared/nav/nav.component';
import { ConfirmboxComponent } from './shared/confirmbox/confirmbox.component';
import { HttpClientModule } from '@angular/common/http';

import { ContactService } from './services/contact.service';
import { ResolverService } from './services/resolver.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactModule } from './modules/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent,
    ContactDetailsComponent,
    NewContactComponent,
    UpdateContactComponent,
    NavComponent,
    ConfirmboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NbListModule,
    NbCardModule,
    HttpClientModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ContactModule


  ],
  providers: [
    ContactService,
    ResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
