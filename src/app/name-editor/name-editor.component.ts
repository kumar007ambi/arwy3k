import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  userForm:FormGroup|any;
  ngOnInit(){
    this.userForm = new FormGroup({
      firstName : new FormControl('',[Validators.required,Validators.minLength(15)]),
      valNumber : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      email : new FormControl(''),
    })
  }
  
  get firstName(){
    return this.userForm.get('firstName');
  }
 
  get valNumber(){
    return this.userForm.get('valNumber')
  }
  

  // updateName() {
  //   this.name.setValue('Nancy');
  //   this.email.setValue('test@gamil.com'),
  // }
  onSubmit() {
    console.log(this.userForm)
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/