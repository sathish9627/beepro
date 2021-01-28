import { Component, OnInit,NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-knife',
  templateUrl: './knife.component.html',
  styleUrls: ['./knife.component.css']
})
export class KnifeComponent implements OnInit {

  submitted = false;
  knifeForm: FormGroup;

  constructor(  
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
    ) {
      this.mainForm();
      }

  ngOnInit(): void {
  }

  mainForm() {
    this.knifeForm = this.fb.group({
      numberofknife: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.knifeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.knifeForm.valid) {
      return false;
    } else {
      this.apiService.createKnife(this.knifeForm.value).subscribe(
        (res) => {
          window.alert('knifeshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/knife-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }



}
