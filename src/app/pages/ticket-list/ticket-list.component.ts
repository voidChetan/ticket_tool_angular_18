import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent implements OnInit {

  mode: string = 'My Tickets';
  ticketList: any[]=[];

  masterSrv = inject(MasterService);
  loggedUserEmployeeId: any;

  ngOnInit(): void {
    const loggedUserData =  localStorage.getItem('ticketUser');
    if(loggedUserData != null) {
      const userData =  JSON.parse(loggedUserData);
      this.loggedUserEmployeeId = userData.employeeId;
    }
    this.changeMode(this.mode);
  }

  
  changeMode(tab: string) {
    this.mode =  tab;
    if( this.mode  == 'My Tickets') {
      this.masterSrv.getTicketsCreatedByLoggedEmp(this.loggedUserEmployeeId).subscribe((res:any)=>{
        this.ticketList = res.data;
      })
    } else {
      this.masterSrv.getTicketAssignedToEmp(this.loggedUserEmployeeId).subscribe((res:any)=>{
        this.ticketList = res.data;
      })
    }
  }

  changeStatus(state: string,ticketId: number) {
    if(state == 'Start') {
      this.masterSrv.startTicket(ticketId).subscribe((res:any)=>{
        if(res.result) {
          alert('Ticket Status Changed');
          this.changeMode(this.mode);
        } else {
          alert(res.message)
        }
      })
    } else {
      this.masterSrv.closeTicket(ticketId).subscribe((res:any)=>{
        if(res.result) {
          alert('Ticket Closed Success')
          this.changeMode(this.mode);
        } else {
          alert(res.message)
        }
      })
    }
  }
}
