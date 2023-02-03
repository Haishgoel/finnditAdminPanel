import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { apiUrl } from 'src/app/global/global';

@Component({
  selector: 'app-edit-merchant-banner',
  templateUrl: './edit-merchant-banner.component.html',
  styleUrls: ['./edit-merchant-banner.component.css']
})
export class EditMerchantBannerComponent {
  public priceEditForm!: FormGroup
  submitted = false;
  id: any
  priceData: any

  constructor(
    private formBuilder: FormBuilder,
    private api: ServicesService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    })
    this.priceEditForm = this.formBuilder.group({
      placement: ['', [Validators.required]],
      position: ['', [Validators.required]],
      perImpressionPrice: ['', [Validators.required]],
      // perImpressionPrice: '', [Validators.required])
    });

    this.api.getDetailByidParams(apiUrl._merchantPriceSingleDetail,this.id)
    .subscribe((res) => {
      this.priceData = res.data;
      console.log("price data--->",this.priceData.placement)
      this.priceEditForm.controls['placement'].setValue(this.priceData.placement)
      this.priceEditForm.controls['position'].setValue(this.priceData.position)
      this.priceEditForm.controls['perImpressionPrice'].setValue(this.priceData.perImpressionPrice )
    });
  }

  // EDIT PRICE  API
  editPriceMerchant(id: any) {
    this.submitted = true;
    const data = {
      id: id,
      placement: this.priceEditForm.value.placement,
      position: this.priceEditForm.value.position,
      perImpressionPrice: this.priceEditForm.value.perImpressionPrice,
    };
    console.log("rewardDaatttttt===>",data);
    this.api.editRewardCategory(apiUrl._editMerchantPrice, data).subscribe((res) => {
      this.priceData = res.data
      // if(this.rewardData.statusCode == 200) {
      //   this.toastr.success("update succesfully")
        
      // }
      console.log("rewardDaatttttt===>",this.priceData);
      
      this.api.showAlert('Updated Successfully', '');
      this.router.navigate(['/merchantbanner']);
      // this.rewardListingData();
    });
  }

}
