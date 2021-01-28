import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-gloves',
  templateUrl: './gloves.component.html',
  styleUrls: ['./gloves.component.css']
})
export class GlovesComponent implements OnInit {

  submitted = false;
  glovesForm: FormGroup;

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
    this.glovesForm = this.fb.group({
      numberofgloves: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.glovesForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.glovesForm.valid) {
      return false;
    } else {
      this.apiService.createGloves(this.glovesForm.value).subscribe(
        (res) => {
          window.alert('glovesshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/gloves-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
