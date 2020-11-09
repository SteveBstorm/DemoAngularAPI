import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Subscription } from 'rxjs';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ConfirmboxComponent } from 'src/app/shared/confirmbox/confirmbox.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {

  listeContact : Contact[] = [];
  sub : Subscription;
  constructor(private _service : ContactService, 
    private _dialog : NbDialogService, 
    private _router : Router,
    private _toast : NbToastrService) { }

  ngOnInit(): void {
    /*this.sub = this._service.contactSubject.subscribe(
      (data : Contact[]) => 
        this.listeContact = data);
    this._service.getAll();
    */
      this._service.getAll().subscribe( {
       next: (data : Contact[]) =>  this.listeContact = data,
       error : (error) => console.log(error)}
      )
  }

  delete(id : number, nom : string) {
    let ref = this._dialog.open(ConfirmboxComponent, {
      context : {
        name : nom
      },
      closeOnBackdropClick : true
    });
    ref.onBackdropClick.subscribe(() => console.log("tagueule"));

    ref.onClose.subscribe(data => {
      if(data) this._service.delete(id);
      this.showToast('bottom-left', 'success', 3000);
    });
  }

  showToast(position, status, duration) {
    
    this._toast.show(
      "Resultat de votre action",
      'machin truc',
      { position, status, duration });
  }

  update(id : number) {
    this._router.navigate(['/update', id]);
  }

}
