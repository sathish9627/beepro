import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-honey',
  templateUrl: './honey.component.html',
  styleUrls: ['./honey.component.css']
})
export class HoneyComponent implements OnInit {

  submitted = false;
  honeyForm: FormGroup;

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
    this.honeyForm = this.fb.group({
      quantityofhoney: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.honeyForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.honeyForm.valid) {
      return false;
    } else {
      this.apiService.createHoney(this.honeyForm.value).subscribe(
        (res) => {
          window.alert('Honeyshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/honey-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
