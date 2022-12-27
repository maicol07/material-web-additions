import {Card} from './card.js';
import {ClassInfo} from 'lit/directives/class-map.js';

export class OutlinedCard extends Card {
    override getRenderClasses(): ClassInfo {
        return {
            ...super.getRenderClasses(),
            'm3--outlined': true
        };
    }
}
