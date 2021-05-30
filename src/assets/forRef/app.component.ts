import { Component, OnInit } from '@angular/core';
import { Student } from './student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularCrudeOpt';
  userName:string="";
  lName:string="";
  emailId:string="";
  registrationArr:Student[]=[];
  updatedIndex :any;
  ngOnInit(){
  
  }
  insertData(){
   this.registrationArr.push({
    firstName:this.userName,
    lastName:this.lName,
    emailId:this.emailId,
   });
   this.userName="";
   this.lName="";
   this.emailId="";
  }
  deleteData(index){
   this.registrationArr.splice(index,1);
  }
  updateRecord(index){
    this.updatedIndex=index;
    for (let i = 0; i <  this.registrationArr.length; i++) {
      const element =  this.registrationArr[i];
      if(index===i){
        
        this.registrationArr[i].emailId="";
        this.registrationArr[i].firstName="";
        this.registrationArr[i].lastName="";
      }
      
    }
  }
  completeUpdate(index){
    for (let i = 0; i <  this.registrationArr.length; i++) {
      const element =  this.registrationArr[i];
      if(index===i){
        
        this.registrationArr[i].emailId=this.emailId;
        this.registrationArr[i].firstName=this.userName;
        this.registrationArr[i].lastName=this.lName;
        this.updatedIndex="";
      }
      
    }
  }

}
