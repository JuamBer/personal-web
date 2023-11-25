import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SocialNetwork } from './models/social-network.model';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialNetworksComponent {
  @Input() socialNetworks: SocialNetwork[] = [];
}
