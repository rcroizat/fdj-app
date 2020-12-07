import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Team} from '../../services/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsListComponent {
  @Input() teamsList: Team[];
  @Output() teamDetailsEmitter = new EventEmitter<Team>();
}
