// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_/index.js';

export default class {
}

export function _MaterialBOMAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MaterialBOM extends Base {
    declare BillOfMaterial?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<MaterialBOM>;
    declare static readonly elements: __.ElementsOf<MaterialBOM>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class MaterialBOM extends _MaterialBOMAspect(__.Entity) {}
Object.defineProperty(MaterialBOM, 'name', { value: 'API_BILL_OF_MATERIAL_SRV_0002.MaterialBOM' })
Object.defineProperty(MaterialBOM, 'is_singular', { value: true })
export class MaterialBOM_ extends Array<MaterialBOM> {$count?: number}
Object.defineProperty(MaterialBOM_, 'name', { value: 'API_BILL_OF_MATERIAL_SRV_0002.MaterialBOM' })

export function _MaterialBOMItemAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MaterialBOMItem extends Base {
    declare BillOfMaterial?: __.Key<string>
    declare BillOfMaterialCategory?: __.Key<string>
    declare BillOfMaterialVariant?: __.Key<string>
    declare BillOfMaterialVersion?: __.Key<string>
    declare Material?: __.Key<string>
    declare Plant?: __.Key<string>
    declare EngineeringChangeDocument?: __.Key<string>
    declare BillOfMaterialItemNodeNumber?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<MaterialBOMItem>;
    declare static readonly elements: __.ElementsOf<MaterialBOMItem>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class MaterialBOMItem extends _MaterialBOMItemAspect(__.Entity) {}
Object.defineProperty(MaterialBOMItem, 'name', { value: 'API_BILL_OF_MATERIAL_SRV_0002.MaterialBOMItem' })
Object.defineProperty(MaterialBOMItem, 'is_singular', { value: true })
export class MaterialBOMItem_ extends Array<MaterialBOMItem> {$count?: number}
Object.defineProperty(MaterialBOMItem_, 'name', { value: 'API_BILL_OF_MATERIAL_SRV_0002.MaterialBOMItem' })
