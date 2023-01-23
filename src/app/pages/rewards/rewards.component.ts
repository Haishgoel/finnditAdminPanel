import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";
import { Router } from '@angular/router';

// import { ElementRef } from "@angular/core";

interface Person {
  key: string;
  title: string;
  category: string;
  type: string;
  reedemPoints: number,
  expiryDate:string,
  status: string
}

@Component({
  selector: 'app-monitor',
  queries: {
		"tabsContentRef": new ViewChild( "tabsContentRef" )
	},
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {
  isVisible = false;
  isVisibleStatus = false;
  isCategoryStatus = false;
  isCategoryDelete = false;

  public selectedTab: "one" | "two";
  // public tabsContentRef!: ElementRef;

  constructor(private router:Router,) {
		this.selectedTab = "one";
	}

  submitForm(): void {
    this.router.navigate(['/rewards/edit']);
  }

  addReward(): void {
    this.router.navigate(['/rewards/add']);
  }

  //edit RewardCategories

  editRewardCategory(): void {
    this.router.navigate(['/rewardscategory/edit']);
  }

  // delete Reward
  deleteReward(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  // active deactiavte status Reward

  activeDeactivate(): void {
    this.isVisibleStatus = true;
  }

  handleOkStatus(): void {
    console.log('Button ok clicked!');
    this.isVisibleStatus = false;
  }

  handleCancelStatus(): void {
    console.log('Button cancel clicked!');
    this.isVisibleStatus = false;
  }

// active Deactivate status reward Category
  activeDeactivateCategory(): void {
    this.isCategoryStatus = true;
  }

  handleOkCategory(): void {
    console.log('Button ok clicked!');
    this.isCategoryStatus = false;
  }

  handleCancelCategory(): void {
    console.log('Button cancel clicked!');
    this.isCategoryStatus = false;
  }

// delete Reward Category
  deleteRewardCategory(): void {
    this.isCategoryDelete = true;
  }

  handleOkDelete(): void {
    console.log('Button ok clicked!');
    this.isCategoryDelete = false;
  }

  handleCancelDelete(): void {
    console.log('Button cancel clicked!');
    this.isCategoryDelete = false;
  }

  public show( tab: "one" | "two" ) : void {
		this.selectedTab = tab;
    // this.listOfData();
		// this.scrollTabContentToTop();
	}

  listOfRewards= [
    {
      key: '1',
      title: 'John Brown',
      category: 'electronis',
      type: 'New York No. 1 Lake Park',
      reedemPoints: 10,
      expiryDate: '2023-10-01',
      status: 'Active'
    }
  ];

  listOfRewardsCategories= [
    {
      category: 'vaneet',
      status: 'Active'
    }
  ];
 

}
