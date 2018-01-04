import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  projects: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFirestore) {
    this.projects = db.collection('projects').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');

    // this.db.collection("projects").add({
    //   name: "kawiarnia",
    //   description: "rozne takie"
    // })
    //   .then( (docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch( (error) => {
    //     console.error("Error adding document: ", error);
    //   });
  }

}
