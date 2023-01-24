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
  selector: 'app-merchant-banner',
  templateUrl: './merchant-banner.component.html',
  styleUrls: ['./merchant-banner.component.css']
})
export class MerchantBannerComponent {
  isBannerDelete = false;
  isBannerStatus = false;
  isMediaStatus = false;
  isMediaDelete = false;

  public selectedTab: "one" | "two" | "three";
  // public tabsContentRef!: ElementRef;

  constructor(private router:Router,) {
		this.selectedTab = "one";
	}

  // Add Media Image
  addMediaImage(): void {
    alert("image")
    // this.router.navigate(['/add']);
  }

  //edit list of price Configurations

  editlistOfPriceConfiguration(): void {
    this.router.navigate(['/merchantbanner/price/edit']);
  }
  // edit MEDIA MERCHANT BANNER
  editMedia(): void {
    this.router.navigate(['/merchantbanner/media/edit']);
  }

  // delete Banner MERCHANT BANNERS
  deleteBanner(): void {
    this.isBannerDelete = true;
  }

  handleOkBannerDelete(): void {
    console.log('Button ok clicked!');
    this.isBannerDelete = false;
  }

  handleCancelBannerDelete(): void {
    console.log('Button cancel clicked!');
    this.isBannerDelete = false;
  }

  // active deactiavte status Banner MERCHANT BANNNER

  activeDeactivateBanner(): void {
    this.isBannerStatus = true;
  }

  handleOkBanner(): void {
    console.log('Button ok clicked!');
    this.isBannerStatus = false;
  }

  handleCancelBanner(): void {
    console.log('Button cancel clicked!');
    this.isBannerStatus = false;
  }

// active Deactivate status Media merchant banner
  activeDeactivateMedia(): void {
    this.isMediaStatus = true;
  }

  handleOkMedia(): void {
    console.log('Button ok clicked!');
    this.isMediaStatus = false;
  }

  handleCancelMedia(): void {
    console.log('Button cancel clicked!');
    this.isMediaStatus = false;
  }

// delete Media merchant Bannner
  deleteMedia(): void {
    this.isMediaDelete = true;
  }

  handleOkMediaDelete(): void {
    console.log('Button ok clicked!');
    this.isMediaDelete = false;
  }

  handleCancelMediaDelete(): void {
    console.log('Button cancel clicked!');
    this.isMediaDelete = false;
  }

  public show( tab: "one" | "two" | "three" ) : void {
		this.selectedTab = tab;
    // this.listOfData();
		// this.scrollTabContentToTop();
	}

  listOfBanner= [
    {
      key: '1',
      placement: 'John Brown',
      position: 10,
      business: 'New York No. 1 Lake Park',
      frequency: 10,
      startDate: '2023-10-01',
      endDate: '2023-10-01',
      approveStatus: 'Active',
      visibilityStatus: 'Active'
    },
    {
      key: '2',
      placement: 'John Brown',
      position: 5,
      business: 'New York No. 1 Lake Park',
      frequency: 10,
      startDate: '2023-10-01',
      endDate: '2023-10-01',
      approveStatus: 'Active',
      visibilityStatus: 'Active'
    }
  ];

  listOfPriceConfiguration= [
    {
      placement: 'vaneet',
      position: 5,
      perImpressionPrice:10
    },
    {
      placement: 'harish',
      position: 5,
      perImpressionPrice:10
    }
  ];


  
  listOfMedia= [
    {
      background: 'vaneet',
      totalBusiness: 5,
      status: "Active"
    },{
      background: 'harish',
      totalBusiness: 5,
      status: "InActive"
    }
  ];
 
 

}
