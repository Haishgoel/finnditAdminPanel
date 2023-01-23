import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  name: string;
  subCategories: number;
  productService: number;
  status: string;
}

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent {
  isCategoryStatus = false;
  isCategoryDelete = false;

  constructor(private router:Router,) {}



  //Add New Category
  addParentCategory(): void {
    this.router.navigate(['/categories/addparent'])
  }

  addsubCategoryL1(): void {
    this.router.navigate(['/categories/addsubl1'])
  }

  addsubCategoryL2(): void {
    this.router.navigate(['/categories/addsubl2'])
  }


   //edit Categories
   editCategory(): void {
    this.router.navigate(['/categories/edit']);
  }

  // delete Category
  deleteCategory(): void {
    this.isCategoryDelete = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isCategoryDelete = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isCategoryDelete = false;
  }

  // active deactiavte status Category
  activeDeactivate(): void {
    this.isCategoryStatus = true;
  }

  handleOkStatus(): void {
    console.log('Button ok clicked!');
    this.isCategoryStatus = false;
  }

  handleCancelStatus(): void {
    console.log('Button cancel clicked!');
    this.isCategoryStatus = false;
  }

  listOfCategory: Person[] = [
    {
      name: 'John Brown',
      subCategories: 32,
      productService: 2,
      status:"active"
    },
    {
      name: 'Jim Green',
      subCategories: 42,
      productService: 2,
      status:"active"
    },
    {
      name: 'Joe Black',
      subCategories: 32,
      productService: 6,
      status:"active"
    }
  ];

}
