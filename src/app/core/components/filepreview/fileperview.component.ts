import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'file-preview',
  templateUrl: './filepreview.component.html',
  styleUrls: ['./filepreview.component.css']
})
export class FilePreviewComponent {
  @Input() uploadedFiles: any[] = [];   // files from parent
  @Output() previewClick = new EventEmitter<void>(); // event for parent to handle

  onImageClick() {
    this.previewClick.emit();  // notify parent
  }
}
