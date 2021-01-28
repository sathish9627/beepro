import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-beestand',
  templateUrl: './beestand.component.html',
  styleUrls: ['./beestand.component.css']
})
export class BeestandComponent implements OnInit {

  submitted = false;
  beestandForm: FormGroup;
  Beestandtype:any = ['Steel', 'Wood'];
  
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
    this.beestandForm = this.fb.group({
      beestandtypeobject: ['', [Validators.required]],
      numberofstand: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }

    // Choose beetypeobject with select dropdown
    updateProfile(e){
      this.beestandForm.get('beestandtypeobject').setValue(e, {
        onlySelf: true
      })
    }

    // Getter to access form control
  get myForm(){
    return this.beestandForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.beestandForm.valid) {
      return false;
    } else {
      this.apiService.createBeestand(this.beestandForm.value).subscribe(
        (res) => {
          window.alert('Beetandshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/beestand-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
