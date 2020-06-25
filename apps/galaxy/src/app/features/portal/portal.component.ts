import { Component, OnInit } from '@angular/core';
import { GlxThemeService } from '@galaxy/commons/theme';
import { GlxSession } from '@galaxy/commons/services';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(
    public theme: GlxThemeService,
    public session: GlxSession
  ) { }

  ngOnInit(): void {
  }

}
