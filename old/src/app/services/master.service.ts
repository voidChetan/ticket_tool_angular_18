import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = "https://freeapi.miniprojectideas.com/api/TicketsNew/";

  constructor(private http: HttpClient) { }

  getAllRoles() {
    return this.http.get(`${this.apiUrl}GetAllRoles`)
  }

  login(obj:any) {
    debugger;
    return this.http.post(this.apiUrl + "Login",obj);
  }

  getAllDept() {
    return this.http.get(`${this.apiUrl}GetDepartments`)
  }
  createNewDept(obj:any) {
    return this.http.post(`${this.apiUrl}CreateDepartment`, obj)
  }
  updateDept(obj:any) {
    return this.http.put(`${this.apiUrl}UpdateDepartment`,obj)
  }
  deleteDeptById(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteDepartment?id=${id}`)
  }
 
  getAllpCategory() {
    return this.http.get(`${this.apiUrl}GetParentCategory`)
  }
  
  createpCategory(obj:any) {
    return this.http.post(`${this.apiUrl}CreateParentCategory`, obj)
  }
 
  updatepCategory(obj:any) {
    return this.http.put(`${this.apiUrl}UpdateParentCategory`,obj)
  }
  deletepCategoryById(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteParentCategory?id=${id}`)
  }

  getAllCCategory() {
    return this.http.get(`${this.apiUrl}GetChildCategory`)
  }
 
  createCCategory(obj:any) {
    return this.http.post(`${this.apiUrl}CreateChildCategory`, obj)
  }
 
  updateCCategory(obj:any) {
    return this.http.put(`${this.apiUrl}UpdateChildCategory`,obj)
  }
 
  deleteCCategoryById(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteChildCategory?id=${id}`)
  }

  getAllEmp() {
    return this.http.get(`${this.apiUrl}GetEmployees`)
  }
 
  createEmp(obj:any) {
    return this.http.post(`${this.apiUrl}CreateEmployee`, obj)
  }
 
  updateEmp(obj:any) {
    return this.http.put(`${this.apiUrl}UpdateEmployee`,obj)
  }
 
  deleteEmpById(id: number) {
    return this.http.delete(`${this.apiUrl}DeleteEmployee?id=${id}`)
  }
 
  newTicket(obj:any) {
    return this.http.post(`${this.apiUrl}CreateNewTicket`, obj)
  }

  getTicketsCreatedByLoggedEmp(empId: number) {
    return this.http.get(`${this.apiUrl}GetTicketsCreatedByEmpId?empId=${empId}`)
  }

  getTicketAssignedToEmp(empId: number) {
    return this.http.get(`${this.apiUrl}GetAssignedTicketsByEmpId?empId=${empId}`)
  }

  startTicket(ticketId: number) {
    return this.http.post(`${this.apiUrl}startTicket?id=${ticketId}`,{});
  }
  
  closeTicket(ticketId: number) {
    return this.http.post(`${this.apiUrl}closeTicket?id=${ticketId}`,{});
  }
}
