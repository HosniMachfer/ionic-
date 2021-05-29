import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  
  public form:FormGroup;

  constructor(public formbuildder: FormBuilder ) {

        this.form = formbuildder.group({

          fullname: ["", [Validators.required, Validators.minLength(8)]],
          email: ["", [Validators.required, Validators.email]],
          age: ["", [Validators.required,Validators.min(1),Validators.max(99)]],
          password: ["", [Validators.required,Validators.minLength(5),Validators.maxLength(15)]]
        })

   }

  ngOnInit() {
  }

  onAdd(){
    console.log(this.form.value)
  }


}
