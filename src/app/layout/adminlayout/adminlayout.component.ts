import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminfooterComponent } from '../../shared/adminfooter/adminfooter.component';
import { AdminsidebarComponent } from '../../shared/adminsidebar/adminsidebar.component';
import { AdminheaderComponent } from '../../shared/adminheader/adminheader.component';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-adminlayout',
  standalone: true,
  imports: [RouterOutlet,SharedModule],
  templateUrl: './adminlayout.component.html',
  styleUrl: './adminlayout.component.css'
})
export class AdminlayoutComponent {

}
