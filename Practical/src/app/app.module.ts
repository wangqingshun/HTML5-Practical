import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Http,HttpModule} from '@angular/http'

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddPage } from '../pages/add/add';
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
import { MyPage } from '../pages/my/my';
import { CommentPage } from '../pages/comment/comment';
import { GoodPage } from '../pages/good/good';
import { VideoPage } from '../pages/video/video';
import { ArticlePage } from '../pages/article/article';
import { JichiPage } from '../pages/jichi/jichi';
import { RandomPage } from '../pages/random/random';
import { TudouPage } from '../pages/tudou/tudou';
import { Tuijian1Page } from '../pages/tuijian1/tuijian1';
import { Tuijian2Page } from '../pages/tuijian2/tuijian2';
import { SerachPage } from '../pages/serach/serach';

@NgModule({
  declarations: [
    MyApp,
    AddPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonPage,
    MyPage,
    CommentPage,
    GoodPage,
    VideoPage,
    ArticlePage,
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
    FindPasswordPage,
    JichiPage,
    RandomPage,
    TudouPage,
    Tuijian1Page,
    Tuijian2Page,
    SerachPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddPage,
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
    FindPasswordPage,
    MyPage,
    CommentPage,
    GoodPage,
    VideoPage,
    ArticlePage,
    JichiPage,
    RandomPage,
    TudouPage,
    Tuijian1Page,
    Tuijian2Page,
    SerachPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //Http
  ]
  
})
export class AppModule {}
