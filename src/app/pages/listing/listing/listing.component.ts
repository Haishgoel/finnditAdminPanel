import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  id: number,
  business: string;
  registerName: string;
  ownerName: string;
  phoneNumber: number;
  email: string; 
  category: string;
  subscriptionPlan: string;
  status: string;
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  isListingStatus = false;
  isVisible = false;
  isAssignSubAdmin = false;
  

  constructor(private router:Router,) {}


  onAllChecked(value: boolean): void {
    // this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    // this.refreshCheckedStatus();
  }

  // active deactiavte status Category
  activeDeactivate(): void {
    this.isListingStatus = true;
  }
  handleOkStatus(): void {
    this.isListingStatus = false;
  }
  handleCancelStatus(): void {
    this.isListingStatus = false;
  }

 // Assign sub-admin modal
 assignSubAdmin(): void {
    this.isAssignSubAdmin = true;
  }
  handleOkAdmin(): void {
   this.isAssignSubAdmin = false;
  }
  handleCancelAdmin(): void {
    this.isAssignSubAdmin = false;
  }


  // Reject Modal 
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
   this.isVisible = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }

  listOfListing: Person[] = [
    {
      id:1,
      business:"work",
      registerName:"applify",
      ownerName:"harish",
      phoneNumber: 1234567890,
      email: "harish@gapplify.co",
      category: "mohali",
      subscriptionPlan: "string",
      status:"active"
    },
    {
      id:2,
      business:"work",
      registerName:"applify",
      ownerName:"harish",
      phoneNumber: 1234567890,
      email: "harish@gapplify.co",
      category: "mohali",
      subscriptionPlan: "string",
      status:"active"
    },
    {
      id: 3,
      business:"work",
      registerName:"applify",
      ownerName:"harish",
      phoneNumber: 1234567890,
      email: "harish@gapplify.co",
      category: "mohali",
      subscriptionPlan: "string",
      status:"active"
    }
  ];

}
