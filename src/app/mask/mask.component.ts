import { Component, OnInit,NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})
export class MaskComponent implements OnInit {

  submitted = false;
  maskForm: FormGroup;

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
    this.maskForm = this.fb.group({
      numberofmask: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.maskForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.maskForm.valid) {
      return false;
    } else {
      this.apiService.createMask(this.maskForm.value).subscribe(
        (res) => {
          window.alert('maskshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/mask-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
