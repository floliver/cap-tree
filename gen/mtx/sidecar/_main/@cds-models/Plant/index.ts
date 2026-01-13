// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_/index.js';

export default class {
}

export function _PlantAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Plant extends Base {
    declare Plant?: __.Key<string>
    declare PlantName?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Plant>;
    declare static readonly elements: __.ElementsOf<Plant>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Plant extends _PlantAspect(__.Entity) {}
Object.defineProperty(Plant, 'name', { value: 'Plant.Plant' })
Object.defineProperty(Plant, 'is_singular', { value: true })
export class Plant_ extends Array<Plant> {$count?: number}
Object.defineProperty(Plant_, 'name', { value: 'Plant.Plant' })
