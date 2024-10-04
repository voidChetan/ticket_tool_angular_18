import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit {

  masterSrv= inject(MasterService);
  deptList: any[]=[];
  pCategoryList: any[]=[];
  cCategoryList: any[]=[];
  filterCategory: any[]=[];
  selectPCategory: string = '';

  newTicketObj: any = {
    "employeeId": 0,
    "severity": "",
    "childCategoryId": 0,
    "deptId": 0,
    "requestDetails": ""
  }

  ngOnInit(): void {
    const loggedUserData =  localStorage.getItem('ticketUser');
    if(loggedUserData != null) {
      const userData =  JSON.parse(loggedUserData);
      this.newTicketObj.employeeId = userData.employeeId;
    }
    this.getDept();
    this.getpCategory();
    this.getCCategory();
  }

  onCreateTicket() {
    debugger;
    this.masterSrv.newTicket(this.newTicketObj).subscribe((res:any)=>{
      if(res.result){
        alert("Ticket Created Succefully")
      } else {
        alert(res.message)
      }
    })
  }

  onCategoryChnage() {
    this.filterCategory =  this.cCategoryList.filter(x=>x.parentCategoryName == this.selectPCategory);
  }

  getDept() {
    this.masterSrv.getAllDept().subscribe((res:any)=>{
      this.deptList =  res.data;
    })
  }
  getpCategory() {
    this.masterSrv.getAllpCategory().subscribe((res:any)=>{
      this.pCategoryList =  res.data;
    })
  }
  getCCategory() {
    this.masterSrv.getAllCCategory().subscribe((res:any)=>{
      this.cCategoryList =  res.data;
    })
  }

}
