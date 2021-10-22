import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fb-footer-copyright',
  template: `<div class="footer-text">2019 - 2020 © The FB Hub</div>`,
  styleUrls: ['./footer-copyright.component.scss']
})
export class FooterCopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
