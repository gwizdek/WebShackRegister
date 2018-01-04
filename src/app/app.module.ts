import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';


import { RegisterPage } from '../pages/register/register';
import { ReportPage } from '../pages/report/report';
import { ProjectsPage } from '../pages/projects/projects';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
  apiKey: "AIzaSyD9diN7pXBahLUI0WhFbgj6w2-68dpNOD8",
  authDomain: "webshackscheduler.firebaseapp.com",
  databaseURL: "https://webshackscheduler.firebaseio.com",
  projectId: "webshackscheduler",
  storageBucket: "webshackscheduler.appspot.com",
  messagingSenderId: "691725317286"
};


@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    ReportPage,
    ProjectsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    ReportPage,
    ProjectsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
