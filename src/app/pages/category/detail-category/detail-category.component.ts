import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Person {
  id: number,
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


  //detail Category

  // getListOfCategory(data: Person): void {
  //   alert(JSON.stringify(data))
  //   this.router.navigate(['/categories/detail/:id'])
  // }



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
      id:1,
      name: 'John Brown',
      subCategories: 32,
      productService: 2,
      status:"active"
    },
    {
      id:2,
      name: 'Jim Green',
      subCategories: 42,
      productService: 2,
      status:"active"
    },
    {
      id: 3,
      name: 'Joe Black',
      subCategories: 32,
      productService: 6,
      status:"active"
    }
  ];

}
