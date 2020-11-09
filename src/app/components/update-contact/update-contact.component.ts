import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  fg : FormGroup;
  model : Contact;

  constructor(private _service : ContactService, 
    private _builder : FormBuilder,
    private _router : ActivatedRoute) { }

  ngOnInit(): void {
    this.model = this._router.snapshot.data['model'];
    this.initForm();
  }

  initForm() {
    this.fg = this._builder.group({
      Nom : [this.model.Nom, Validators.required],
      Email : [this.model.Email, [Validators.required, Validators.email]],
      GSM : [this.model.GSM, Validators.required]
    })
  }

  onSubmit() {
    const values = this.fg.value;
    this.model.Nom = values['Nom'];
    this.model.Email = values['Email'];
    this.model.GSM = values['GSM'];
    this._service.update(this.model);
  }

}
