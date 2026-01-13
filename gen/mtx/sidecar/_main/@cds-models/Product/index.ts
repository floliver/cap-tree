// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../_/index.js';

export default class {
}

export function _ProductAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Product extends Base {
    declare Product?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Product>;
    declare static readonly elements: __.ElementsOf<Product>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Product extends _ProductAspect(__.Entity) {}
Object.defineProperty(Product, 'name', { value: 'Product.Product' })
Object.defineProperty(Product, 'is_singular', { value: true })
export class Product_ extends Array<Product> {$count?: number}
Object.defineProperty(Product_, 'name', { value: 'Product.Product' })

export function _ProductDescriptionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductDescription extends Base {
    declare Product?: __.Key<string>
    declare Language?: __.Key<string>
    declare ProductDescription?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductDescription>;
    declare static readonly elements: __.ElementsOf<ProductDescription>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductDescription extends _ProductDescriptionAspect(__.Entity) {}
Object.defineProperty(ProductDescription, 'name', { value: 'Product.ProductDescription' })
Object.defineProperty(ProductDescription, 'is_singular', { value: true })
export class ProductDescription_ extends Array<ProductDescription> {$count?: number}
Object.defineProperty(ProductDescription_, 'name', { value: 'Product.ProductDescription' })

export function _ProductPlantAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductPlant extends Base {
    declare Product?: __.Key<string>
    declare Plant?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductPlant>;
    declare static readonly elements: __.ElementsOf<ProductPlant>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductPlant extends _ProductPlantAspect(__.Entity) {}
Object.defineProperty(ProductPlant, 'name', { value: 'Product.ProductPlant' })
Object.defineProperty(ProductPlant, 'is_singular', { value: true })
export class ProductPlant_ extends Array<ProductPlant> {$count?: number}
Object.defineProperty(ProductPlant_, 'name', { value: 'Product.ProductPlant' })

export function _ProductUnitOfMeasureAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductUnitOfMeasure extends Base {
    declare Product?: __.Key<string>
    declare AlternativeUnit?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductUnitOfMeasure>;
    declare static readonly elements: __.ElementsOf<ProductUnitOfMeasure>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductUnitOfMeasure extends _ProductUnitOfMeasureAspect(__.Entity) {}
Object.defineProperty(ProductUnitOfMeasure, 'name', { value: 'Product.ProductUnitOfMeasure' })
Object.defineProperty(ProductUnitOfMeasure, 'is_singular', { value: true })
export class ProductUnitOfMeasure_ extends Array<ProductUnitOfMeasure> {$count?: number}
Object.defineProperty(ProductUnitOfMeasure_, 'name', { value: 'Product.ProductUnitOfMeasure' })
