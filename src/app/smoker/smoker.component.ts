import { Component, OnInit,NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-smoker',
  templateUrl: './smoker.component.html',
  styleUrls: ['./smoker.component.css']
})
export class SmokerComponent implements OnInit {

  submitted = false;
  smokerForm: FormGroup;

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
    this.smokerForm = this.fb.group({
      numberofsmoker: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.smokerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.smokerForm.valid) {
      return false;
    } else {
      this.apiService.createSmoker(this.smokerForm.value).subscribe(
        (res) => {
          window.alert('smokershop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/smoker-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
