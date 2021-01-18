import { Ders, Uye } from './../models/model/model.module';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbDers = '/Dersler';
  private dbUye = '/Uyeler';
  dersRef: AngularFireList<Ders> = null;
  uyeRef: AngularFireList<Uye> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.dersRef = db.list(this.dbDers);
    this.uyeRef = db.list(this.dbUye);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  UyeDuzenle(uye: Uye) {
    return this.uyeRef.update(uye.key,uye);
  }
  UyebyId(key:string){
    return this.db.object("/Uyeler/" + key);
  }
  UyeSil(key: string) {
    return this.uyeRef.remove(key);
  }
  UyeListele() {
    return this.uyeRef;
  }


  KayitListele() {
    return this.dersRef;
  }
  KayitByKey(key: string) {
    return this.db.object("/Dersler/" + key);
  }
  KayitEkle(kayit: Ders) {
    return this.dersRef.push(kayit);
  }
  KayitDuzenle(kayit: Ders) {
    return this.dersRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.dersRef.remove(key);
  }
}
