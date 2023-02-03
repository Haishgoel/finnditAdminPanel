import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams, HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { apiUrl } from 'src/app/global/global';
import { ServicesService } from 'src/app/services/services.service';
import * as CONSTANT from '../../../services/constants';



@Component({
  selector: 'app-merchant-banner',
  templateUrl: './merchant-banner.component.html',
  styleUrls: ['./merchant-banner.component.css']
})
export class MerchantBannerComponent {
  merchantBannerData: any;
  merchantPriceData: any
  currentPage = 1;
  search = "";
  searchTerm: string | any;
  sortOrder = 'ASC';
  pagination = { limit: CONSTANT.LIMIT, maxSize: CONSTANT.MAX_SIZE, skip: 0, totalItems: null }
  isMediaStatus = false;
  isMediaDelete = false;

  public selectedTab: "one" | "two" | "three";
  // public tabsContentRef!: ElementRef;

  constructor(
    private router:Router,
    private api: ServicesService,
    private http: HttpClient,
    private route: ActivatedRoute
    ) {
		this.selectedTab = "one";
	}


  ngOnInit(): void {
    this.merchantBannerListingData();
    this.merchantPriceListingData();

  }
// SEARCH AND ORDERBY ON BANNER
  searchFunc() {  
    this.merchantBannerListingData();  
    this.merchantPriceListingData();
  }
  onTextChange(value: any) {
    this.search = value;
    this.merchantBannerListingData();
    this.merchantPriceListingData();
  }
  
changeSortOrder(value: any): void {
  this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
  this.merchantBannerListingData();
  this.merchantPriceListingData();
}

  // MERCHANT BANNER LISTING DETAIL
  merchantBannerListingData() {
    let params = new HttpParams();
    let skip = this.pagination.skip;
    params = params.append('skip', skip.toString());
    params = params.append('limit', '10');
    params = params.append('orderBy',this.sortOrder);
    if(this.search != null && this.search != ''){
      params =  params.append('search',this.search)
    }
    this.api
      .rewardCategoryDetail(apiUrl._merchantBanner, params)
      .subscribe((res) => {
        this.currentPage = skip == 0 ? 1 : (skip / 10)
        // this.pagination.totalItems = res.data.count;
        this.merchantBannerData = res;
        // this.merchantBannerData = res.sort(this.soryByPlacement);

      });
  }

  //MERCHANT PRICE LISTING DETAIL
  merchantPriceListingData() {
    let params = new HttpParams();
    let skip = this.pagination.skip;
    params = params.append('skip', skip.toString());
    params = params.append('limit', '10');
    params = params.append('orderBy',this.sortOrder);
    if(this.search != null && this.search != ''){
      params =  params.append('search',this.search)
    }
    this.api
      .rewardCategoryDetail(apiUrl._merchantPrice, params)
      .subscribe((res) => {
        this.currentPage = skip == 0 ? 1 : (skip / 10)
        // this.pagination.totalItems = res.data.count;
        this.merchantPriceData = res;
        // this.merchantBannerData = res.sort(this.soryByPlacement);

      });
  }

  // Add Media Image
  addMediaImage(): void {
    alert("image")
    // this.router.navigate(['/add']);
  }

  //edit list of price Configurations

  editlistOfPriceConfiguration(data: any): void {
    var id = data.id
    this.router.navigate([`/merchantbanner/price/edit/`+ id]);
  }
  // edit MEDIA MERCHANT BANNER
  editMedia(): void {
    this.router.navigate(['/merchantbanner/media/edit']);
  }

  // DELETE MERCHANT BANNERS
  deleteMerchantBanner(id: any): void {
    swal
      .fire({
        // title: '<h2>' + '</h2>',
        html: '<p>Are you sure you want to Delete this??</p>',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Delete',
        confirmButtonAriaLabel: 'Active',
        cancelButtonAriaLabel: 'Cancel',
        confirmButtonColor: '#318337',
        cancelButtonColor: '#18225a',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
        width: 500,
      })
      .then((result) => {
        if (result.value) {
          const data = {
            id: id.id,
          };
          this.api
            .deleteData(apiUrl._merchantBanner, data)
            .subscribe((res) => {
              this.api.showAlert('Deleted Successfully', '');
              this.merchantBannerListingData();
            });
        }
      });
  }

  // APPROVE STATUS  MERCHANT BANNNER
  approveStatus(id: any, approveStatus: any): void {
    swal
      .fire({
        title: '<h2>' + approveStatus  + '</h2>',
        html:
        approveStatus == 1  ? '<p>Are you sure you want to Approved this??</p>': '<p>Are you sure you want to Pending this?</p>',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        //  confirmButtonText: 'Delete ',
        confirmButtonAriaLabel: 'Active',
        cancelButtonAriaLabel: 'Cancel',
        confirmButtonColor: '#318337',
        cancelButtonColor: '#18225a',
        confirmButtonText: 'Active',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
        width: 500,
      })
      .then((result) => {
        if (result.value) {
        const data = {
          id: id.id,
          approveStatus: approveStatus === 0 ? 1 : 0,
        };
        this.api
          .putData(apiUrl._merchantApproveStatus, data)
          .subscribe((res) => {
            this.merchantBannerListingData();
          });
        }
      });
  }

  // VISIBILITY STATUS  MERCHANT BANNNER
  visibileStatus(id: any, visibilityStatus: any): void {
    swal
      .fire({
        title: '<h2>' + visibilityStatus+  '</h2>',
        html:
        visibilityStatus == 1  ? '<p>Are you sure you want to Active this??</p>': '<p>Are you sure you want to InActive this?</p>',
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        //  confirmButtonText: 'Delete ',
        confirmButtonAriaLabel: 'Active',
        cancelButtonAriaLabel: 'Cancel',
        confirmButtonColor: '#318337',
        cancelButtonColor: '#18225a',
        confirmButtonText: 'Active',
        cancelButtonText: 'Cancel',
        reverseButtons: true,
        width: 500,
      })
      .then((result) => {
        if (result.value) {
        const data = {
          id: id.id,
          visibilityStatus: visibilityStatus === 0 ? 1 : 0,
        };
        this.api
          .putData(apiUrl._merchantVisibilityStatus, data)
          .subscribe((res) => {
            this.merchantBannerListingData();
          });
        }
      });
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
