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


@Component({
  selector: 'app-detail-reward',
  templateUrl: './detail-reward.component.html',
  styleUrls: ['./detail-reward.component.css']
})
export class DetailRewardComponent {
  id: any;
  rewardData: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: ServicesService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) {}


   ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.singleDetailReward(this.id)
  }


  singleDetailReward(id: any) {
    console.log("idd===singlw===>",id);
    
    let params = new HttpParams();
   
    this.api.getDetailByidParams(apiUrl._singleRewardDetail,id)
      .subscribe((res) => {

        //   this.loading = false;
        this.rewardData = res.data;
        console.log("rewards data===>",this.rewardData)

        // JSON.stringify(this.rewardData)
      });
  }

}
