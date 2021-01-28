import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  submitted = false;
  beesForm: FormGroup;
  Beetype:any = ['Moutainbee', 'Layeredbee', 'Indianbee', 'Italianbee', 'Mosquitobee', 'Hornedbee'];
  
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
    this.beesForm = this.fb.group({
      beetypeobject: ['', [Validators.required]],
      numberofframes: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }

    // Choose beetypeobject with select dropdown
    updateProfile(e){
      this.beesForm.get('beetypeobject').setValue(e, {
        onlySelf: true
      })
    }

    // Getter to access form control
  get myForm(){
    return this.beesForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.beesForm.valid) {
      return false;
    } else {
      this.apiService.createBees(this.beesForm.value).subscribe(
        (res) => {
          window.alert('Beeshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/bees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


} 
