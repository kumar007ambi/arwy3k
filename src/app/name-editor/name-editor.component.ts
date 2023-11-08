import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('',Validators.minLength(6));
  val = new FormControl('');
  email = new FormControl<string|null>('',Validators.maxLength(12));
  

  updateName() {
    this.name.setValue('Nancy');
    this.email.setValue('test@gamil.com');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/