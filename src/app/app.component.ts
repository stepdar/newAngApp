import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stéphane Website !';
  showMovies = true;
  movieList = [{name: 'Star Wars (1977)', index: '1'},
                {name: 'Apocalypse Now (1979)', index: '2'},
                {name: 'Some like it hot (1959)', index: '3'},
                {name: 'Blade Runner (1982)', index: '4'},
                {name: 'Singin in the rain (1952)', index: '5'}
                ];
}
