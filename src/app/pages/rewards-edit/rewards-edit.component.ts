import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/app/global/global';
import { ServicesService } from 'src/app/services/services.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'nz-demo-form-register',
  templateUrl: './rewards-edit.component.html',
  styleUrls: ['./rewards-edit.component.css'],
})
export class RewardsEditComponent implements OnInit {
  public rewardEditForm!: FormGroup;
  submitted = false;
  rewardData: any;
  data: any;
  id: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: ServicesService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}
 

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.rewardEditForm = this.formBuilder.group({
      rewardTitle: ['', [Validators.required]],
      type: ['', [Validators.required]],
      reedemPoint: ['', [Validators.required]],
      pubishDate: ['', [Validators.required]],
    });

    this.api.getDetailByidParams(apiUrl._singleCategoryDetail,this.id)
      .subscribe((res) => {
        this.rewardData = res.data;
        this.rewardEditForm.controls['rewardTitle'].setValue(this.rewardData.rewardTitle)
        this.rewardEditForm.controls['type'].setValue(this.rewardData.type)
        this.rewardEditForm.controls['reedemPoint'].setValue(this.rewardData.reedemPoint)
        this.rewardEditForm.controls['pubishDate'].setValue(this.rewardData.pubishDate)
      });
  }


//single detail user
  patchValue(data: any) {
    var id = data.id
    console.log("kjhgh",data.id)
     this.rewardEditForm.patchValue({
      rewardTitle: data.rewardTitle
  
    });
    let params = new HttpParams();
   
    this.api.getDetailByidParams(apiUrl._singleRewardDetail,id)
      .subscribe((res) => {
        this.rewardData = res.data;        
      });
  }  

  singleRewardDetail(data:any): void {
    this.router.navigate([`/rewards/detail/` + data]);
  }

  logOut(): void {
    this.router.navigate(['/rewards'])
  }


  // edit reward  API
  updateReward(id: any) {
    this.submitted = true;
    const data = {
      id: id,
      rewardTitle: this.rewardEditForm.value.rewardTitle,
      type: this.rewardEditForm.value.type,
      reedemPoint: this.rewardEditForm.value.reedemPoint,
      pubishDate: this.rewardEditForm.value.pubishDate,
    };
    this.api.editRewardCategory(apiUrl._editReward, data).subscribe((res) => {
      this.rewardData = res.data
      // if(this.rewardData.statusCode == 200) {
      //   this.toastr.success("update succesfully")
        
      // }
      console.log("rewardDaatttttt===>",this.rewardData);
      
      this.api.showAlert('Updated Successfully', '');
      this.router.navigate(['/rewards']);
      // this.rewardListingData();
    });
  }
}
