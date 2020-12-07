import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

type Data = {
  name: string;
  _id: string
};

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchbarComponent {
  @Input()  dataList: Data[];
  @Output() dataEmitter = new EventEmitter<Data>();

  public getOptionName({name}: Data): string {
    return name;
  }
}
