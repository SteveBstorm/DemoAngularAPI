import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { ResolverService } from './services/resolver.service';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

const routes: Routes = [
  { path : 'liste', component : ContactlistComponent},
  { path : 'new', component: NewContactComponent},
  { path : 'update/:id', resolve : {model : ResolverService}, component : UpdateContactComponent},
  { path : 'details/:id', resolve : {model : ResolverService}, component : ContactDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
