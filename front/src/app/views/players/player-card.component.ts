import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Player} from '../../services/players.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerCardComponent  {
  @Input() player: Player;
}
