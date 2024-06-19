import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Container } from './container/container.component';
import 'zone.js';

@Component({
  selector: 'app-root',
  imports: [Container],
  standalone: true,
  template: `
    <div class="wrapper">
      <container-component></container-component>
    </div>
  `,
})
export class App {}

bootstrapApplication(App);