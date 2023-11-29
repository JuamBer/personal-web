import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { SocialNetwork } from './models/social-network.model';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SocialNetworksComponent {
  @Input() socialNetworks: SocialNetwork[] = [];
}
