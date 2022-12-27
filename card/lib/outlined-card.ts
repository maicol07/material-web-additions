import {Card} from './card';
import {ClassInfo} from 'lit/directives/class-map.js';

export class OutlinedCard extends Card {
    override getRenderClasses(): ClassInfo {
        return {
            ...super.getRenderClasses(),
            'm3--outlined': true
        };
    }
}
