import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

    studentsData : any;

  constructor( public studentService :StudentsService, private nav: NavController) 
  { 
    this.studentsData = [];
  }

  ngOnInit() {
    this.getAllStudents();
  }

  ionViwWillEnter(){
    this.getAllStudents();
  }
    getAllStudents(){
      //Get saved list of student
      this.studentService.getStudents().subscribe(response => {
        console.log(response);
        this.studentsData = response;

      })
    }
   addStudent(){
     this.nav.navigateForward('/add');
   } 

   edit (id: number) {
     this.nav.navigateForward(['update/'+id]);
   }

   delete(student){
     //delete item in student data
     this.studentService.deleteStudent(student.id).subscribe(response =>{
        //update list after delete is successful
        this.getAllStudents();
        this.nav.pop();
     })
   }

 

}
