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
  categoryData: any
  constructor(private formBuilder: FormBuilder, private api: ServicesService, private router: Router, private route: ActivatedRoute) {
  }

  
  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      categoryName:['',[Validators.required]]
    });
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.api.getDetailByidParams(apiUrl._singleCategoryDetail,this.id)
    .subscribe((res) => {
      this.categoryData = res.data;
      this.categoryForm.controls['categoryName'].setValue(this.categoryData.categoryName) 
    });
  }

// edit reward categories API
  updateRewardCategory(id: any){
    this.submitted = true
      const data = {
        'id':id,
        'categoryName': this.categoryForm.value.categoryName,
      }
      this.api.editRewardCategory(apiUrl._editRewardCategory, data)
        .subscribe(res => {
           this.router.navigate(['/rewards']);
           this.api.showAlert('Deactive Successfully', '');
          // this.rewardListingData();
        })
  }

}
