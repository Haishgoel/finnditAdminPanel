import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { apiUrl } from 'src/app/global/global';
import { HttpParams, HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { NzResultComponent } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-monitor',
  queries: {
    tabsContentRef: new ViewChild('tabsContentRef'),
  },
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css'],
})
export class RewardsComponent {
  isVisibleStatus = false;
  isCategoryStatus = false;
  rewardData: any = [];
  rewardCategoryData: any;
  categories: any = [];
  id: any;

  selectedUser: any;

  onRowClick(data: any) {
    this.selectedUser = data;
    console.log('hello single user');
  }

  ngOnInit(): void {
    this.rewardListingData();
    this.rewardCategoryListingData();
  }

  // Reward  Listing Detail
  rewardListingData() {
    let params = new HttpParams();
    // let skip = this.pagination.skip;
    // params = params.append('skip', skip.toString());
    // params = params.append('limit', '10');
    this.api.rewardDetail(apiUrl._rewardListing).subscribe((res) => {
      //   this.loading = false;
      // this.currentPage = skip == 0 ? 1 : (skip / 10)
      // this.pagination.totalItems = res.data.count;
      this.rewardData = res;
      // this.categories = this.rewardData.categories
    });
  }
  // Reward Category Listing Detail
  rewardCategoryListingData() {
    let params = new HttpParams();
    // let skip = this.pagination.skip;
    // params = params.append('skip', skip.toString());
    // params = params.append('limit', '10');
    this.api
      .rewardDetail(apiUrl._rewardCategoryListing)
      .subscribe((res) => {
        //   this.loading = false;
        // this.currentPage = skip == 0 ? 1 : (skip / 10)
        // this.pagination.totalItems = res.data.count;
        this.rewardCategoryData = res;

        // JSON.stringify(this.rewardData)
      });
  }

  public selectedTab: 'one' | 'two';
  // public tabsContentRef!: ElementRef;

  constructor(
    private router: Router,
    private api: ServicesService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.selectedTab = 'one';
  }

  editReward(data:any): void {
    var id = data.id;
    // console.log("id--->",id)
    this.router.navigate([`/rewards/edit/` + id]);
  }

  addRewardCategories(): void {
    this.router.navigate(['/category/add']);
  }

  addReward(): void {
    this.router.navigate(['/rewards/add']);
  }

  //CLICK ON BUTTON REWARD CATEGORIES
  editRewardCategory(data: any): void {
    var id = data.id;
    var categoryName = data.categoryName;
    this.router.navigate([`/rewardscategory/edit/` + id]);
  }

  // delete Reward
  deleteReward(id: any): void {
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
      .then(() => {
        // if (status) {
        const data = {
          id: id.id,
        };
        this.api.deleteData(apiUrl._deleteReward, data).subscribe((res) => {
          // this.api.showAlert(value == 'activate' ? 'Active Successfully' : 'Deactive Successfully', '');
          this.rewardListingData();
        });
      });
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

  // active Deactivate status reward Category API
  activeDeactivateCategory(id: any, status: any): void {
    swal
      .fire({
        title: '<h2>' + status + '</h2>',
        html:
          status == 1
            ? '<p>Are you sure you want to Active this??</p>'
            : '<p>Are you sure you want to Deactive this?</p>',
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
      .then(() => {
        // if (status) {
        const data = {
          id: id.id,
          status: status === 0 ? 1 : 0,
        };
        this.api
          .putData(apiUrl._rewardCategoriesBlock, data)
          .subscribe((res) => {
            this.rewardCategoryListingData();
          });
        // }
      });
  }

  // delete Reward Category API
  deleteRewardCategory(id: any): void {
    console.log('delete category===>', id.id);
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
            .deleteData(apiUrl._deleteRewardCategories, data)
            .subscribe((res) => {
              this.api.showAlert('Deleted Successfully', '');
              this.rewardCategoryListingData();
            });
        }
      });
  }

  public show(tab: 'one' | 'two'): void {
    this.selectedTab = tab;

    // this.scrollTabContentToTop();
  }
}
