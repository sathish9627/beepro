import { Component, OnInit,NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fullbeesetup',
  templateUrl: './fullbeesetup.component.html',
  styleUrls: ['./fullbeesetup.component.css']
})
export class FullbeesetupComponent implements OnInit {

  submitted = false;
  fullbeesetupForm: FormGroup;

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
    this.fullbeesetupForm = this.fb.group({
      numberoffullbeesetup: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.fullbeesetupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.fullbeesetupForm.valid) {
      return false;
    } else {
      this.apiService.createFullbeesetup(this.fullbeesetupForm.value).subscribe(
        (res) => {
          window.alert('fullbeesetupshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/fullbeesetup-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
