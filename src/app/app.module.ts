import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { NgxAudioPlayerModule } from 'ngx-audio-player';



import { MaterialFileInputModule } from 'ngx-material-file-input';

import { AppComponent } from './app.component';
import { TracksComponent } from './tracks/tracks.component';
import { TrackComponent } from './tracks/track/track.component';
import { TrackService } from './shared/track.service';
import { environment } from '../environments/environment';

import { TrackListComponent } from './tracks/track-list/track-list.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TracksComponent,
    TrackComponent,
    TrackListComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    MaterialFileInputModule,
    
    NgxAudioPlayerModule,
    
  ],
  providers: [TrackService],
  bootstrap: [AppComponent],
  entryComponents:[TrackComponent,MatConfirmDialogComponent]
})
export class AppModule { }
