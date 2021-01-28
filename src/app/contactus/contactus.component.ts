import { Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";



console.log('1')

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  submitted = false;
  contactForm: FormGroup;

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
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: ['', [Validators.required]],
      yourmessage: ['', [Validators.required]],  
    })
  }

  
    // Getter to access form control
  get myForm(){
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.contactForm.valid) {
      return false;
    } else {
      this.apiService.createInfo(this.contactForm.value).subscribe(
        (res) => {
          window.alert('Contact successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/info-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
