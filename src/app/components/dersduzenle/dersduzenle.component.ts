import { Ders } from './../../models/model/model.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dersduzenle',
  templateUrl: './dersduzenle.component.html',
  styleUrls: ['./dersduzenle.component.css']
})
export class DersduzenleComponent implements OnInit {

  key: string;
  secDers: Ders = new Ders();
  uid: string;
  constructor(
    public route: ActivatedRoute,
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    });
  }
  KayitGetir() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secDers = (y as Ders);
      if (this.uid != this.secDers.uid) {
        this.router.navigate(['/dersler']);
      }
    });
  }

  Kaydet() {
    this.fbServis.KayitDuzenle(this.secDers).then(d => {
      this.router.navigate(['/dersler']);
    });
  }


}
