import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/app/global/global';
import * as CONSTANT from '../../../services/constants'
import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  usersData: any;
  currentPage = 1;
  search = "";
  searchTerm: string | any;
  pagination = { limit: CONSTANT.LIMIT, maxSize: CONSTANT.MAX_SIZE, skip: 0, totalItems: null }

  
  constructor(
    private router:Router,
    private api: ServicesService,
    private route: ActivatedRoute,
    private http: HttpClient
    ) {}

    ngOnInit(): void {
      this.usersListingData();
    }

  // SEARCH  ON USER
  searchFunc() {  
    this.usersListingData()    
  }
  onTextChange(value: any) {
    this.search = value;
    this.usersListingData();
  }

   //USERS LISTING DETAIL
   usersListingData() {
    let params = new HttpParams();
    let skip = this.pagination.skip;
    params = params.append('skip', skip.toString());
    params = params.append('limit', '10');
    if(this.search != null && this.search != ''){
      params =  params.append('search',this.search)
    }
    this.api.rewardCategoryDetail(apiUrl._usersListing, params)
      .subscribe((res) => {
        this.currentPage = skip == 0 ? 1 : (skip / 10)
        // this.pagination.totalItems = res.data.count;
        this.usersData = res;
        console.log("this.users data===>",this.usersData)
      });
  }

   // APPROVE STATUS  USER
   userStatus(id: any, isBlocked: any): void {
    swal
      .fire({
        title: '<h2>' + isBlocked  + '</h2>',
        html:
        isBlocked == 1  ? '<p>Are you sure you want to InActive this??</p>': '<p>Are you sure you want to Active this?</p>',
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
          isBlocked: isBlocked === 0 ? 1 : 0,
        };
        this.api
          .putData(apiUrl._userBlock, data)
          .subscribe((res) => {
            this.usersListingData()
          });
        }
      });
  }





}
