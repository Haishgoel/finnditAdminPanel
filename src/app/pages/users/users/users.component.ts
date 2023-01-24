import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  id: number,
  name: string;
  email: string;
  phoneNumber: number;
  location: string;
  tier: string;
  pointEarned: number;
  pointReedemed: number;
  registeredOn: string;
  status: string;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  isCategoryStatus = false;
  

  constructor(private router:Router,) {}

  // active deactiavte status Category
  activeDeactivate(): void {
    this.isCategoryStatus = true;
  }

  handleOkStatus(): void {
    console.log('Button ok clicked!');
    this.isCategoryStatus = false;
  }

  handleCancelStatus(): void {
    console.log('Button cancel clicked!');
    this.isCategoryStatus = false;
  }

  listOfUsers: Person[] = [
    {
      id:1,
      name: 'John Brown',
      email: "harish@gapplify.co",
      phoneNumber: 1234567890,
      location: "mohali",
      tier: "string",
      pointEarned: 10,
      pointReedemed: 20,
      registeredOn: "2022-10-01",
      status:"active"
    },
    {
      id:2,
      name: 'John Brown',
      email: "harish@gapplify.co",
      phoneNumber: 1234567890,
      location: "mohali",
      tier: "string",
      pointEarned: 10,
      pointReedemed: 20,
      registeredOn: "2022-10-01",
      status:"active"
    },
    {
      id: 3,
      name: "vaneet",
      email: "harish@gapplify.co",
      phoneNumber: 1234567890,
      location: "mohali",
      tier: "string",
      pointEarned: 10,
      pointReedemed: 20,
      registeredOn: "2022-10-01",
      status:"active"
    }
  ];


}
