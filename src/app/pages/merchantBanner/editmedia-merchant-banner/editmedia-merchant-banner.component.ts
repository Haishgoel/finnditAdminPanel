import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { apiUrl } from 'src/app/global/global';

@Component({
  selector: 'app-editmedia-merchant-banner',
  templateUrl: './editmedia-merchant-banner.component.html',
  styleUrls: ['./editmedia-merchant-banner.component.css']
})
export class EditmediaMerchantBannerComponent {
  // public priceEditForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private api: ServicesService,
    private route: ActivatedRoute,
    private router: Router,
  ){

  }




  

}
