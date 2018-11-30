import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PersonPage } from '../pages/person/person';
import { MyDataPage } from '../pages/my-data/my-data';
import { WorksPage } from '../pages/works/works';
import { FollowPage } from '../pages/follow/follow';
import { FansPage } from '../pages/fans/fans';
import { CollectionPage } from '../pages/collection/collection';
import { LookPage } from '../pages/look/look';
import { LikePage } from '../pages/like/like';
import { SettingPage } from '../pages/setting/setting';
import { EditionPage } from '../pages/edition/edition';
import { AboutUsPage } from '../pages/about-us/about-us';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FindPasswordPage } from '../pages/find-password/find-password';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonPage,
    MyDataPage,
    WorksPage,
    FollowPage,
    FansPage,
    CollectionPage,
    LookPage,
    LikePage,
    SettingPage,
    EditionPage,
    AboutUsPage,
    LoginPage,
    RegisterPage,
    FindPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonPage,
    PersonPage,
    MyDataPage,
    WorksPage,
    FollowPage,
    FansPage,
    CollectionPage,
    LookPage,
    LikePage,
    SettingPage,
    EditionPage,
    AboutUsPage,
    LoginPage,
    RegisterPage,
    FindPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
