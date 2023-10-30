import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROYECTO_4';

  http = inject(HttpClient);

  changeTitle() {
    this.title = 'changed';
  }
  ng0nInit() {
    this.htpp.get('')
  }
}
