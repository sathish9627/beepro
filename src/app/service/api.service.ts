import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

console.log('5')

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 
 
  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true };
    };
  }

 
  baseUri:string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create info
  createInfo(data): Observable<any> {
    let url = `${this.baseUri}/db1/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update info
  updateInfo(id, data): Observable<any> {
    let url = `${this.baseUri}/db1/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete info
    deleteInfo(id): Observable<any> {
      let url = `${this.baseUri}/db1/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }


      // Create bees
  createBees(data): Observable<any> {
    let url = `${this.baseUri}/db2/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update bees
  updateBees(id, data): Observable<any> {
    let url = `${this.baseUri}/db2/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete bees
    deleteBees(id): Observable<any> {
      let url = `${this.baseUri}/db2/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }

    
      // Create beebox
  createBeebox(data): Observable<any> {
    let url = `${this.baseUri}/db3/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update beebox
  updateBeebox(id, data): Observable<any> {
    let url = `${this.baseUri}/db3/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete beebox
    deleteBeebox(id): Observable<any> {
      let url = `${this.baseUri}/db3/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }

      // Create beestand
  createBeestand(data): Observable<any> {
    let url = `${this.baseUri}/db4/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update beestand
  updateBeestand(id, data): Observable<any> {
    let url = `${this.baseUri}/db4/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete beestand
    deleteBeestand(id): Observable<any> {
      let url = `${this.baseUri}/db4/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }

    
      // Create Honey
  createHoney(data): Observable<any> {
    let url = `${this.baseUri}/db5/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update Honey
  updateHoney(id, data): Observable<any> {
    let url = `${this.baseUri}/db5/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete Honey
    deleteHoney(id): Observable<any> {
      let url = `${this.baseUri}/db5/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }

  // Create Honeyextractor
  createHoneyextractor(data): Observable<any> {
    let url = `${this.baseUri}/db6/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update Honeyextractor
  updateHoneyextractor(id, data): Observable<any> {
    let url = `${this.baseUri}/db6/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete Honeyextractor
    deleteHoneyextractor(id): Observable<any> {
      let url = `${this.baseUri}/db6/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }

    // Create Gloves
  createGloves(data): Observable<any> {
    let url = `${this.baseUri}/db7/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update Gloves
  updateGloves(id, data): Observable<any> {
    let url = `${this.baseUri}/db7/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete Gloves
    deleteGloves(id): Observable<any> {
      let url = `${this.baseUri}/db7/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }

      // Create Mask
  createMask(data): Observable<any> {
    let url = `${this.baseUri}/db8/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update Mask
  updateMask(id, data): Observable<any> {
    let url = `${this.baseUri}/db8/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete Mask
    deleteMask(id): Observable<any> {
      let url = `${this.baseUri}/db8/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }

    
  // Create Frames
  createFrames(data): Observable<any> {
    let url = `${this.baseUri}/db9/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update Frames
  updateFrames(id, data): Observable<any> {
    let url = `${this.baseUri}/db9/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete Frames
    deleteFrames(id): Observable<any> {
      let url = `${this.baseUri}/db9/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }


    // Create Smoker
    createSmoker(data): Observable<any> {
      let url = `${this.baseUri}/db10/create`;
      return this.http.post(url, data)
        .pipe(
          catchError(this.errorMgmt)
        )
    }
  
    // Update Smoker
    updateSmoker(id, data): Observable<any> {
      let url = `${this.baseUri}/db10/update/${id}`;
      return this.http.put(url, data, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }
  
      // Delete Smoker
      deleteSmoker(id): Observable<any> {
        let url = `${this.baseUri}/db10/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(
          catchError(this.errorMgmt)
        )
      }
    
      // Create Knife
    createKnife(data): Observable<any> {
      let url = `${this.baseUri}/db11/create`;
      return this.http.post(url, data)
        .pipe(
          catchError(this.errorMgmt)
        )
    }
  
    // Update Knife
    updateKnife(id, data): Observable<any> {
      let url = `${this.baseUri}/db11/update/${id}`;
      return this.http.put(url, data, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }
  
      // Delete Knife
      deleteKnife(id): Observable<any> {
        let url = `${this.baseUri}/db11/delete/${id}`;
        return this.http.delete(url, { headers: this.headers }).pipe(
          catchError(this.errorMgmt)
        )
      }

    // Create Fullbeesetup
  createFullbeesetup(data): Observable<any> {
    let url = `${this.baseUri}/db12/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update Fullbeesetup
  updateFullbeesetup(id, data): Observable<any> {
    let url = `${this.baseUri}/db12/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

    // Delete Fullbeesetup
    deleteFullbeesetup(id): Observable<any> {
      let url = `${this.baseUri}/db12/delete/${id}`;
      return this.http.delete(url, { headers: this.headers }).pipe(
        catchError(this.errorMgmt)
      )
    }


  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}