import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  masterSrc = inject(MasterService);

  gridList: any[] = [];
  deptList: any[] = [];
  roleList: any[] = [];
  isNewView: boolean = false;

  newObj: any = {
    "employeeId": 0,
    "employeeName":"",
    "contactNo":"",
    "emailId":"",
    "deptId": 0,
    "password":"",
    "gender":"",
    "role":""
  }

  ngOnInit(): void {
    this.getGridData();
    this.getAllDept();
    this.getAllRoles();
  }

  getAllDept() {
    this.masterSrc.getAllDept().subscribe((res: any) => {
      debugger;
      this.deptList = res.data;
    })
  }
  getAllRoles() {
    this.masterSrc.getAllRoles().subscribe((res: any) => {
      debugger;
      this.roleList = res.data;
    })
  }

  getGridData() {
    this.masterSrc.getAllEmp().subscribe((res: any) => {
      debugger;
      this.gridList = res.data;
    })
  }

  save() {
    debugger;
    this.masterSrc.createEmp(this.newObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("Employee Created Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    })
  }
  onEdit(data: any) {
    this.newObj = data;
  }
  update() {
    debugger;
    this.masterSrc.updateEmp(this.newObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("Employee Updated Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    })
  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure want Delete");
    if (isDelete) {
      this.masterSrc.deleteEmpById(id).subscribe((res: any) => {
        debugger;
        if (res.result) {
          alert("Employee Deleted Success");
          this.getGridData();
        } else {
          alert(res.message)
        }
      })
    }
  }
}
