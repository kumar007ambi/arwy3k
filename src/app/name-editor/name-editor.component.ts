import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit{
  form:any
  constructor(private fb:FormBuilder){}
ngOnInit(): void {
  this.form = this.fb.group({
    name : ['',[
      Validators.required,
      Validators.pattern("^[a-zA-Z]*$"),
      Validators.minLength(4),
      Validators.maxLength(4)]],
    val : ['',[
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8),
      Validators.maxLength(8)
    ]],
    email : ['',[
      Validators.required,
      Validators.pattern("/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/")
    ]],
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('',
      [
        Validators.required,
        Validators.pattern("^[0-9]*$")]),
    }),
  })
}
  
 
  get name(){
    return this.form.get('name');
  }

  get val(){
    return this.form.get('val');
  }

  // get email(){
  //   return this.form.get('email');
  // }


  // updateName() {
  //   this.name.setValue('Nancy');
  //   this.email.setValue('test@gamil.com'),
  // }
  // onSubmit() {
  //   console.log()
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/