import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  form:any;
  ngOnInit(): void {
   
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(10)]),
      val:new FormControl(''),
      email:new FormControl()
    })
  }
  // form = new FormGroup({
  //   name : new FormControl(''),
  //   val : new FormControl(''),
  //   email : new FormControl(''),
  // })
  constructor(private fb:FormBuilder){}
  

  get name(){
    return this.form.get('name')!;
  }


  
 
  

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