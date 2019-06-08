import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private firebase: AngularFireDatabase) { }

  trackList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    artistName: new FormControl('', Validators.required),
    trackName: new FormControl ('',Validators.required),
    fileUrl: new FormControl('',Validators.required)
    
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      artistName: '',
      trackName: '',
      fileUrl: ''
      
    });
  }


  getTracks() {
    this.trackList = this.firebase.list('tracks');
    return this.trackList.snapshotChanges();
  }

  insertTrack(track) {
    this.trackList.push({
      artistName: track.artistName,
      trackName: track.trackName,
      fileUrl: track.fileUrl
      
    });
  }

  updatetrack(track) {
    this.trackList.update(track.$key,
      {
        artistName: track.artistName,
        trackName: track.trackName,
        fileUrl: track.fileUrl
        
      });
  }

  deleteTrack($key: string) {
    this.trackList.remove($key);
  }

  populateForm(track) {
    this.form.setValue(_.omit(track));
  }
}
