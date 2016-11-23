import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-form',
  templateUrl: 'my-form.html',
})
export class MyFormPage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }

  saveData(){
    console.log(this.myForm.value);
  }

  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }
}
