import { Component, OnInit } from '@angular/core';
import { Ifiles, filesArr } from '../../model/files.const';

@Component({
  selector: 'app-file-card',
  templateUrl: './file-card.component.html',
  styleUrls: ['./file-card.component.scss']
})
export class FileCardComponent implements OnInit {

  filesData:Array<Ifiles>=filesArr

  constructor() { }

  ngOnInit(): void {
  }

}
