import { Ders } from './../../models/model/model.module';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/service/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {
  dersler: Ders[];

  constructor(
    public fbServis: FirebaseService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.KayitListele();
  }

  KayitListele() {
    this.fbServis.KayitListele().snapshotChanges().subscribe(data => {
      this.dersler = [];
      data.forEach(satir => {
        const y = { ...satir.payload.toJSON(), key: satir.key };
        this.dersler.push(y as Ders);
      });
    });
  }


}
