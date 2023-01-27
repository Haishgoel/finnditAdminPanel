import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { apiUrl } from 'src/app/global/global';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-reward-category-edit',
  templateUrl: './reward-category-edit.component.html',
  styleUrls: ['./reward-category-edit.component.css']
})
export class RewardCategoryEditComponent {
  public categoryForm! :FormGroup
  submitted=false
  id:any
  constructor(private formBuilder: FormBuilder, private api: ServicesService, private router: Router, private route: ActivatedRoute) {
  }

  
  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      category:['',[Validators.required]]
    });
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });
  }

// edit reward categories API
  updateRewardCategory(id: any){
    this.submitted = true
      const data = {
        'id':id,
        'categoryName': this.categoryForm.value.category,
      }
      this.api.editRewardCategory(apiUrl._editRewardCategory, data)
        .subscribe(res => {
           this.router.navigate(['/rewards']);
          // this.api.showAlert(value == 'activate' ? 'Active Successfully' : 'Deactive Successfully', '');
          // this.rewardListingData();
        })
  }

}
