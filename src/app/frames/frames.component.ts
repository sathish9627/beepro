import { Component, OnInit, NgZone } from '@angular/core';
import { ApiService } from './../service/api.service';
import { FormGroup, FormControl, FormBuilder, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent implements OnInit {

  submitted = false;
  framesForm: FormGroup;

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
    this.framesForm = this.fb.group({
      numberofframes: ['', [Validators.required]],
      phonenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      addressline1: ['', [Validators.required]],
      addressline2: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      queries: ['', [Validators.nullValidator]],  
    })
  }


    // Getter to access form control
  get myForm(){
    return this.framesForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.framesForm.valid) {
      return false;
    } else {
      this.apiService.createFrames(this.framesForm.value).subscribe(
        (res) => {
          window.alert('framesshop order successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/frames-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }


}
