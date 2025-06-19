import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavComponent, BottomNavComponent, FeatureCardComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ssdpDevPortal';

   features = [
    { title: 'Trip Report', description: 'Track travel details and routes.', icon: 'assets/icons/trip.png' },
    { title: 'Eco Coaching', description: 'Helps improve driving habits.', icon: 'assets/icons/eco.png' },
    { title: 'Send destination', description: 'Send GPS data to car.', icon: 'assets/icons/destination.png' },
    { title: 'Calendar Integration', description: 'Link calendar events to trips.', icon: 'assets/icons/calendar.png' },
    { title: 'Dynamic Range Mapping', description: 'Visualize vehicle range.', icon: 'assets/icons/map.png' },
    { title: 'Vehicle Finder', description: 'Locate your vehicle easily.', icon: './assets/icons/finder.svg' },
  ];

  tabs = ['Trips and Navigation', 'Remote Operations', 'Vehicle health', 'EV Charging'];
  activeTab = 0;
}
