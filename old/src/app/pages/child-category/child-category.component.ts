import { Component, inject } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-category.component.html',
  styleUrl: './child-category.component.css'
})
export class ChildCategoryComponent {
  masterSrc= inject(MasterService);

  gridList: any[]=[];
  parentCategoryList: any[]=[];

  newObj: any = {
    "childCategoryId": 0,
    "categoryName": "",
    "parentCategoryId": 0
  }

  ngOnInit(): void {
    this.getGridData();
    this.getPCategory();
  }

  getPCategory() {
    this.masterSrc.getAllpCategory().subscribe((res:any)=>{
      debugger;
      this.parentCategoryList = res.data;
    })
  }

  getGridData() {
    this.masterSrc.getAllCCategory().subscribe((res:any)=>{
      debugger;
      this.gridList = res.data;
    })
  }

  save() {
    debugger;
    this.masterSrc.createCCategory(this.newObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Parent Category Created Success");
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
    this.masterSrc.updateCCategory(this.newObj).subscribe((res:any)=>{
      debugger;
      if(res.result) {
        alert("Parent Category Updated Success");
        this.getGridData();
      } else {
        alert(res.message)
      }
    }) 
  }
  onDelete(id: number) {
    const isDelete = confirm("Are you sure want Delete");
    if(isDelete) {
      this.masterSrc.deleteCCategoryById(id).subscribe((res:any)=>{
        debugger;
        if(res.result) {
          alert("Parent Category Deleted Success");
          this.getGridData();
        } else {
          alert(res.message)
        }
      }) 
    }
  }
}
