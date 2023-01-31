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
  selector: 'app-add-reward',
  templateUrl: './add-reward.component.html',
  styleUrls: ['./add-reward.component.css']
})
export class AddRewardComponent {

  public rewardAddForm! :FormGroup
  submitted=false
  // public items = [];
  // items: any =[]
  // dropdownSettings = {};
  // selectedItems = [];


  countries: Array<any> = [];
  selCountries = [
    {
      item_id: 1,
      item_text: "India",
      image: "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
    },
    {
      item_id: 5,
      item_text: "Israel",
      image: "http://www.sciencekids.co.nz/images/pictures/flags96/Israel.jpg"
    }
  ];
  dropdownSettings: any = {};



  constructor(
    private formBuilder: FormBuilder,
    private api: ServicesService, 
    private router: Router, 
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {
    this.countries = [
      {
        item_id: 1,
        item_text: "India",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/India.jpg"
      },
      {
        item_id: 2,
        item_text: "Spain",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/Spain.jpg"
      },
      {
        item_id: 3,
        item_text: "United Kingdom",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/United_Kingdom.jpg"
      },
      {
        item_id: 4,
        item_text: "Canada",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Canada.jpg",
        isDisabled: true
      },
      {
        item_id: 5,
        item_text: "Israel",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/Israel.jpg"
      },
      {
        item_id: 6,
        item_text: "Brazil",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/Brazil.jpg"
      },
      {
        item_id: 7,
        item_text: "Barbados",
        image:
          "http://www.sciencekids.co.nz/images/pictures/flags96/Barbados.jpg"
      },
      {
        item_id: 8,
        item_text: "Mexico",
        image: "http://www.sciencekids.co.nz/images/pictures/flags96/Mexico.jpg"
      }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.rewardAddForm = this.formBuilder.group({
      rewardTitle:['',[Validators.required]],
      type:['',[Validators.required]],
      reedemPoint:['',[Validators.required]],
      pubishDate:['',[Validators.required]],
    });
  }

  get getItems() {
    return this.countries.reduce((acc, curr) => {
      acc[curr.item_id] = curr;
      return acc;
    }, {});
  }

  onItemSelect(item: any) {
    console.log("onItemSelect", item);
  }
  onSelectAll(items: any) {
    console.log("onSelectAll", items);
  }


// Add reward API
  addReward(){
    console.log("add reward categoyr===.", this.rewardAddForm);
    
    this.submitted = true
      const data = {
        'rewardTitle': this.rewardAddForm.value.rewardTitle,
        'type': this.rewardAddForm.value.type,
        'reedemPoint': this.rewardAddForm.value.reedemPoint,
        'pubishDate': this.rewardAddForm.value.pubishDate,
      }
      this.api.postData(apiUrl._addReward, data)
        .subscribe(res => {
          this.router.navigate(['/rewards']);
          this.api.showAlert('Added Successfully', '');
        })
  }

}
