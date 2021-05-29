import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  public add:FormGroup;

  constructor(public formbuildder: FormBuilder,
              public studentService: StudentsService,
              private nav:NavController ) {

        this.add = formbuildder.group({

          name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
          email: ["", [Validators.required, Validators.email]],
          contry: ["", [Validators.required]]
        })


   }

  ngOnInit() {
  }

  onAdd(){
    //console.log(this.add.value)
    const data = this.add.value;
    this.studentService.createStudent(data).subscribe((response) =>{
      console.log(response)
      this.nav.pop();
    })
  }

}
