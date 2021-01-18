import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ders } from 'src/app/models/model/model.module';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-dersler',
  templateUrl: './dersler.component.html',
  styleUrls: ['./dersler.component.css']
})
export class DerslerComponent implements OnInit {
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
  Sil(ders:Ders){
    this.fbServis.KayitSil(ders.key).then(d => {
      this.router.navigate(['/dersler']);
    });
  }


}
