import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ders } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dersekle',
  templateUrl: './dersekle.component.html',
  styleUrls: ['./dersekle.component.css']
})
export class DersekleComponent implements OnInit {

  secDers: Ders = new Ders();
  constructor(
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  Kaydet() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.secDers.uid = user.uid;
    this.fbServis.KayitEkle(this.secDers).then(d => {
      this.router.navigate(['/dersler']);
    });
  }
}
