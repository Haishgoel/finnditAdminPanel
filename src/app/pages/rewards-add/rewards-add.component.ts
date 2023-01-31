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
  selector: 'app-rewards-add',
  templateUrl: './rewards-add.component.html',
  styleUrls: ['./rewards-add.component.css']
})
export class RewardsAddComponent {

  public categoryAddForm! :FormGroup
  submitted=false
  id:any
  constructor(private formBuilder: FormBuilder, private api: ServicesService, private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.categoryAddForm = this.formBuilder.group({
      categoryName:['',[Validators.required]]
    });
  }

// Add reward categories API
  addRewardCategory(){
    console.log("add reward categoyr===.", this.categoryAddForm.value.categoryName) ;
    
    this.submitted = true
      const data = {
        'categoryName': this.categoryAddForm.value.categoryName,
      }
      this.api.postData(apiUrl._addRewardCategory, data)
        .subscribe(res => {
           this.router.navigate(['/rewards']);
          // this.api.showAlert(value == 'activate' ? 'Active Successfully' : 'Deactive Successfully', '');
          // this.rewardListingData();
        })
  }

}
