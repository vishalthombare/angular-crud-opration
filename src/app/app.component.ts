import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dataType } from './interface/dataTypes';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Crud Operations';

  userName:any="";
  userEmail:any="";
  userMobile:any="";
  DepartmentList=['Select Department','Infrastructures','HR','IT services'];
  Department:any="Select Department";
  DesignationList=['Select Designation','Javascript Developer','Python Developer','PHP Developer'];
  Designation:any="Select Designation";
  genders = ['M', 'F'];

  getDataServer:dataType; 

  constructor(private ServiceData: CommonService){}
  ngOnInit(){
    this.ServiceData.getData().subscribe(
      data=>{
        this.getDataServer=data;
        console.log(this.getDataServer)
      }); 
  }

  insertData(dataPass: NgForm){  
    console.log(dataPass.value);
    const postBody={
      name: dataPass.value.name,
      email: dataPass.value.email,
      mobile_number: dataPass.value.mobile_number, 
      department: dataPass.value.department,
      designation: dataPass.value.designation,
      gender: dataPass.value.gender,
    }

    this.ServiceData.postData(postBody).subscribe(data =>{
       console.log(data+"data pass")
    }),(err)=>{
      console.log("unable to pass data"+err);
    }
  }

  deleteData(id){
    this.ServiceData.deleteData(id).subscribe(data =>{
      console.log("user deleted successfully"+data);  
    }, (err)=>{
      console.log("unable to delete user"+ err)
    })
  }

}
