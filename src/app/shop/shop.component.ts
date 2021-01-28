import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

// shop(e)
// {
// this.route.navigate(['/bees']);
// }

// shop2()
// {
// this.route.navigate(['/beebox']);
// }

// shop3()
// {
// this.route.navigate(["/beestand"]);
// }

// shop4()
// {
// this.route.navigate(["/honey"]);
// }

// shop5()
// {
// this.route.navigate(["/honeyextractor"]);
// }

// shop6()
// {
// this.route.navigate(["/gloves"]);
// }

// shop7()
// {
// this.route.navigate(["/mask"]);
// }

// shop8()
// {
// this.route.navigate(["/frames"]);
// }

}
