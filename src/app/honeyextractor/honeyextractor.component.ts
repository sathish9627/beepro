import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-honeyextractor',
  templateUrl: './honeyextractor.component.html',
  styleUrls: ['./honeyextractor.component.css']
})
export class HoneyextractorComponent implements OnInit {

  submitted = false;
  honeyextractorForm: FormGroup;

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
    this.honeyextractorForm = this.fb.group({
      numberofhoneyextractor: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.honeyextractorForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.honeyextractorForm.valid) {
      return false;
    } else {
      this.apiService.createHoneyextractor(this.honeyextractorForm.value).subscribe(
        (res) => {
          window.alert('Honeyextractorshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/honey-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
