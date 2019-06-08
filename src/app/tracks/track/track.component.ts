import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { TrackService } from '../../shared/track.service';

import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor(private service: TrackService,
    
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<TrackComponent>) { }



  ngOnInit() {
    this.service.getTracks();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Form Cleared');
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$key').value)
        this.service.insertTrack(this.service.form.value);
      else
      this.service.updatetrack(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
 


}
