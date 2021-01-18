import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ders } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {
  dersler: Ders = new Ders();
  key: string;

  constructor(
    public route: ActivatedRoute,
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitListele();
    });
  }

  KayitListele() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.dersler = (y as Ders);
    });
  }
}
