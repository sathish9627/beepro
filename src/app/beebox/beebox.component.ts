import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-beebox',
  templateUrl: './beebox.component.html',
  styleUrls: ['./beebox.component.css']
})
export class BeeboxComponent implements OnInit {

  submitted = false;
  beeboxForm: FormGroup;

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
    this.beeboxForm = this.fb.group({
      numberofbox: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.beeboxForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.beeboxForm.valid) {
      return false;
    } else {
      this.apiService.createBeebox(this.beeboxForm.value).subscribe(
        (res) => {
          window.alert('Beeboxshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/beebox-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }



}
