// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../_/index.js';
import * as _ from './../../index.js';
import * as _test_disassembly_types from './types/index.js';
import * as _sap_common from './../../sap/common/index.js';
import * as _API_PRODUCTION_ORDER_2_SRV from './../../API_PRODUCTION_ORDER_2_SRV/index.js';

// enum
const CutType_type = {
  Standard: "S",
  Organizational: "O",
  Classification: "C",
} as const;
type CutType_type = "S" | "O" | "C"

// enum
const CutListPosition_type = {
  CutHeader: "H",
  CutPosition: "P",
} as const;
type CutListPosition_type = "H" | "P"

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
Object.defineProperty(Plant, 'name', { value: 'test.disassembly.Plants' })
Object.defineProperty(Plant, 'is_singular', { value: true })
export class Plants extends Array<Plant> {$count?: number}
Object.defineProperty(Plants, 'name', { value: 'test.disassembly.Plants' })

export function _ProductAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Product extends Base {
    declare Product?: __.Key<string>
    declare _ProductDescription?: __.Composition.of<ProductDescription> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Product>;
    declare static readonly elements: __.ElementsOf<Product>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Product extends _ProductAspect(__.Entity) {}
Object.defineProperty(Product, 'name', { value: 'test.disassembly.Products' })
Object.defineProperty(Product, 'is_singular', { value: true })
export class Products extends Array<Product> {$count?: number}
Object.defineProperty(Products, 'name', { value: 'test.disassembly.Products' })

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
Object.defineProperty(ProductDescription, 'name', { value: 'test.disassembly.ProductDescriptions' })
Object.defineProperty(ProductDescription, 'is_singular', { value: true })
export class ProductDescriptions extends Array<ProductDescription> {$count?: number}
Object.defineProperty(ProductDescriptions, 'name', { value: 'test.disassembly.ProductDescriptions' })

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
Object.defineProperty(ProductPlant, 'name', { value: 'test.disassembly.ProductPlants' })
Object.defineProperty(ProductPlant, 'is_singular', { value: true })
export class ProductPlants extends Array<ProductPlant> {$count?: number}
Object.defineProperty(ProductPlants, 'name', { value: 'test.disassembly.ProductPlants' })

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
Object.defineProperty(ProductUnitOfMeasure, 'name', { value: 'test.disassembly.ProductUnitOfMeasures' })
Object.defineProperty(ProductUnitOfMeasure, 'is_singular', { value: true })
export class ProductUnitOfMeasures extends Array<ProductUnitOfMeasure> {$count?: number}
Object.defineProperty(ProductUnitOfMeasures, 'name', { value: 'test.disassembly.ProductUnitOfMeasures' })

export function _ProductionRoutingHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductionRoutingHeader extends Base {
    declare ProductionRoutingGroup?: __.Key<string>
    declare ProductionRouting?: __.Key<string>
    declare ProductionRoutingInternalVers?: __.Key<string>
    declare Plant?: string | null
    declare BillOfOperationsDesc?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductionRoutingHeader>;
    declare static readonly elements: __.ElementsOf<ProductionRoutingHeader>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductionRoutingHeader extends _ProductionRoutingHeaderAspect(__.Entity) {}
Object.defineProperty(ProductionRoutingHeader, 'name', { value: 'test.disassembly.ProductionRoutingHeaders' })
Object.defineProperty(ProductionRoutingHeader, 'is_singular', { value: true })
export class ProductionRoutingHeaders extends Array<ProductionRoutingHeader> {$count?: number}
Object.defineProperty(ProductionRoutingHeaders, 'name', { value: 'test.disassembly.ProductionRoutingHeaders' })

export function _ProductionRoutingSequenceAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductionRoutingSequence extends Base {
    declare ProductionRoutingGroup?: __.Key<string>
    declare ProductionRouting?: __.Key<string>
    declare ProductionRoutingSequence?: __.Key<string>
    declare ProductionRoutingSqncIntVers?: __.Key<string>
    declare SequenceText?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductionRoutingSequence>;
    declare static readonly elements: __.ElementsOf<ProductionRoutingSequence>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductionRoutingSequence extends _ProductionRoutingSequenceAspect(__.Entity) {}
Object.defineProperty(ProductionRoutingSequence, 'name', { value: 'test.disassembly.ProductionRoutingSequences' })
Object.defineProperty(ProductionRoutingSequence, 'is_singular', { value: true })
export class ProductionRoutingSequences extends Array<ProductionRoutingSequence> {$count?: number}
Object.defineProperty(ProductionRoutingSequences, 'name', { value: 'test.disassembly.ProductionRoutingSequences' })

export function _PlantGroupAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class PlantGroup extends _._cuidAspect(_._managedAspect(Base)) {
    declare name?: string | null
    declare description?: string | null
    declare disassemblyUnit?: string | null
    declare plants?: __.Composition.of.many<PlantGroupPlants>
    declare disassemblyProcess?: __.Composition.of<DisassemblyProcess> | null
    declare texts?: __.Composition.of.many<PlantGroups.texts>
    declare localized?: __.Association.to<PlantGroups.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<PlantGroup> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<PlantGroup>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class PlantGroup extends _PlantGroupAspect(__.Entity) {}
Object.defineProperty(PlantGroup, 'name', { value: 'test.disassembly.PlantGroups' })
Object.defineProperty(PlantGroup, 'is_singular', { value: true })
export class PlantGroups extends Array<PlantGroup> {$count?: number}
Object.defineProperty(PlantGroups, 'name', { value: 'test.disassembly.PlantGroups' })

export function _PlantGroupPlantAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class PlantGroupPlant extends _._cuidAspect(Base) {
    declare plantGroup?: __.Association.to<PlantGroup> | null
    declare plantGroup_ID?: string | null
    declare plant?: __.Association.to<Plant> | null
    declare plant_Plant?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<PlantGroupPlant> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<PlantGroupPlant>;
    declare static readonly actions: typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class PlantGroupPlant extends _PlantGroupPlantAspect(__.Entity) {}
Object.defineProperty(PlantGroupPlant, 'name', { value: 'test.disassembly.PlantGroupPlants' })
Object.defineProperty(PlantGroupPlant, 'is_singular', { value: true })
export class PlantGroupPlants extends Array<PlantGroupPlant> {$count?: number}
Object.defineProperty(PlantGroupPlants, 'name', { value: 'test.disassembly.PlantGroupPlants' })

export function _CutHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutHeader extends _._cuidAspect(_._managedAspect(Base)) {
    declare latestVersion?: __.Composition.of<CutHeaderVersion> | null
    declare latestVersion_ID?: string | null
    declare versions?: __.Association.to.many<CutHeaderVersions>
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutHeader> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<CutHeader>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class CutHeader extends _CutHeaderAspect(__.Entity) {}
Object.defineProperty(CutHeader, 'name', { value: 'test.disassembly.CutHeaders' })
Object.defineProperty(CutHeader, 'is_singular', { value: true })
export class CutHeaders extends Array<CutHeader> {$count?: number}
Object.defineProperty(CutHeaders, 'name', { value: 'test.disassembly.CutHeaders' })

export function _CutHeaderVersionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutHeaderVersion extends _._cuidAspect(_._managedAspect(Base)) {
    declare cutHeader?: __.Association.to<CutHeader> | null
    declare cutHeader_ID?: string | null
    declare version?: number | null
    declare cutIdentifier?: string | null
    declare description?: string | null
    declare disassemblyQuantity?: _test_disassembly_types.UnsignedDecimalQuantity | null
    declare cutType?: __.Association.to<CutType> | null
    declare cutType_type?: CutType_type | null
    declare plantGroup?: __.Association.to<PlantGroup> | null
    declare plantGroup_ID?: string | null
    declare material?: __.Association.to<Product> | null
    declare material_Product?: string | null
    declare disassemblyProcess?: __.Association.to<DisassemblyProcess> | null
    declare disassemblyProcess_ID?: string | null
    declare cutPositions?: __.Composition.of.many<CutPositions>
    declare cutPeriods?: __.Composition.of.many<CutPeriods>
    declare cutRoutings?: __.Composition.of.many<CutRoutings>
    declare texts?: __.Composition.of.many<CutHeaderVersions.texts>
    declare localized?: __.Association.to<CutHeaderVersions.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutHeaderVersion> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<CutHeaderVersion>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class CutHeaderVersion extends _CutHeaderVersionAspect(__.Entity) {}
Object.defineProperty(CutHeaderVersion, 'name', { value: 'test.disassembly.CutHeaderVersions' })
Object.defineProperty(CutHeaderVersion, 'is_singular', { value: true })
export class CutHeaderVersions extends Array<CutHeaderVersion> {$count?: number}
Object.defineProperty(CutHeaderVersions, 'name', { value: 'test.disassembly.CutHeaderVersions' })

export function _CutPeriodAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutPeriod extends _._cuidAspect(_._managedAspect(Base)) {
    declare cutHeader?: __.Association.to<CutHeaderVersion> | null
    declare cutHeader_ID?: string | null
    declare validFrom?: __.CdsDate | null
    declare validTo?: __.CdsDate | null
    declare cutPositions?: __.Composition.of.many<CutPeriodPositions>
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutPeriod> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<CutPeriod>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class CutPeriod extends _CutPeriodAspect(__.Entity) {}
Object.defineProperty(CutPeriod, 'name', { value: 'test.disassembly.CutPeriods' })
Object.defineProperty(CutPeriod, 'is_singular', { value: true })
export class CutPeriods extends Array<CutPeriod> {$count?: number}
Object.defineProperty(CutPeriods, 'name', { value: 'test.disassembly.CutPeriods' })

export function _CutPeriodPositionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutPeriodPosition extends _._cuidAspect(_._managedAspect(Base)) {
    declare cutPeriod?: __.Association.to<CutPeriod> | null
    declare cutPeriod_ID?: string | null
    declare cutPosition?: __.Association.to<CutPosition> | null
    declare cutPosition_ID?: string | null
    declare quantity?: _test_disassembly_types.UnsignedDecimalQuantity | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutPeriodPosition> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<CutPeriodPosition>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class CutPeriodPosition extends _CutPeriodPositionAspect(__.Entity) {}
Object.defineProperty(CutPeriodPosition, 'name', { value: 'test.disassembly.CutPeriodPositions' })
Object.defineProperty(CutPeriodPosition, 'is_singular', { value: true })
export class CutPeriodPositions extends Array<CutPeriodPosition> {$count?: number}
Object.defineProperty(CutPeriodPositions, 'name', { value: 'test.disassembly.CutPeriodPositions' })

export function _CutPositionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutPosition extends _._cuidAspect(_._managedAspect(Base)) {
    declare cutHeader?: __.Association.to<CutHeaderVersion> | null
    declare cutHeader_ID?: string | null
    declare disassemblyQuantity?: _test_disassembly_types.UnsignedDecimalQuantity | null
    declare material?: __.Association.to<Product> | null
    declare material_Product?: string | null
    declare markedAsDeleted?: boolean | null
    declare percentage?: _test_disassembly_types.UnsignedDecimalQuantity | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutPosition> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<CutPosition>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class CutPosition extends _CutPositionAspect(__.Entity) {}
Object.defineProperty(CutPosition, 'name', { value: 'test.disassembly.CutPositions' })
Object.defineProperty(CutPosition, 'is_singular', { value: true })
export class CutPositions extends Array<CutPosition> {$count?: number}
Object.defineProperty(CutPositions, 'name', { value: 'test.disassembly.CutPositions' })

export function _CutRoutingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutRouting extends _._cuidAspect(_._managedAspect(Base)) {
    declare cutHeader?: __.Association.to<CutHeaderVersion> | null
    declare cutHeader_ID?: string | null
    declare plant?: __.Association.to<Plant> | null
    declare plant_Plant?: string | null
    declare productionRoutingGroup?: __.Association.to<ProductionRoutingHeader> | null
    declare productionRoutingGroup_ProductionRoutingGroup?: string | null
    declare productionRoutingGroup_ProductionRouting?: string | null
    declare productionRoutingGroup_ProductionRoutingInternalVers?: string | null
    declare productionRouting?: __.Association.to<ProductionRoutingHeader> | null
    declare productionRouting_ProductionRoutingGroup?: string | null
    declare productionRouting_ProductionRouting?: string | null
    declare productionRouting_ProductionRoutingInternalVers?: string | null
    declare productionRoutingSequence?: __.Association.to<ProductionRoutingSequence> | null
    declare productionRoutingSequence_ProductionRoutingGroup?: string | null
    declare productionRoutingSequence_ProductionRouting?: string | null
    declare productionRoutingSequence_ProductionRoutingSequence?: string | null
    declare productionRoutingSequence_ProductionRoutingSqncIntVers?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutRouting> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<CutRouting>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class CutRouting extends _CutRoutingAspect(__.Entity) {}
Object.defineProperty(CutRouting, 'name', { value: 'test.disassembly.CutRoutings' })
Object.defineProperty(CutRouting, 'is_singular', { value: true })
export class CutRoutings extends Array<CutRouting> {$count?: number}
Object.defineProperty(CutRoutings, 'name', { value: 'test.disassembly.CutRoutings' })

export function _DisassemblyProcessAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class DisassemblyProcess extends _._cuidAspect(_._managedAspect(Base)) {
    declare name?: string | null
    declare description?: string | null
    declare plantGroup?: __.Association.to<PlantGroup> | null
    declare plantGroup_ID?: string | null
    declare disassemblyOrder?: __.Association.to.many<DisassemblyOrders>
    declare texts?: __.Composition.of.many<DisassemblyProcesses.texts>
    declare localized?: __.Association.to<DisassemblyProcesses.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<DisassemblyProcess> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<DisassemblyProcess>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class DisassemblyProcess extends _DisassemblyProcessAspect(__.Entity) {}
Object.defineProperty(DisassemblyProcess, 'name', { value: 'test.disassembly.DisassemblyProcesses' })
Object.defineProperty(DisassemblyProcess, 'is_singular', { value: true })
export class DisassemblyProcesses extends Array<DisassemblyProcess> {$count?: number}
Object.defineProperty(DisassemblyProcesses, 'name', { value: 'test.disassembly.DisassemblyProcesses' })

export function _CutTypeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutType extends _sap_common._CodeListAspect(Base) {
    declare type?: __.Key<CutType_type>
    declare texts?: __.Composition.of.many<CutTypes.texts>
    declare localized?: __.Association.to<CutTypes.text> | null
    static type = CutType_type;
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutType>;
    declare static readonly elements: __.ElementsOf<CutType>;
    declare static readonly actions: typeof _sap_common.CodeList.actions & globalThis.Record<never, never>;
  };
}
export class CutType extends _CutTypeAspect(__.Entity) {}
Object.defineProperty(CutType, 'name', { value: 'test.disassembly.CutTypes' })
Object.defineProperty(CutType, 'is_singular', { value: true })
export class CutTypes extends Array<CutType> {$count?: number}
Object.defineProperty(CutTypes, 'name', { value: 'test.disassembly.CutTypes' })

export function _CutListHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutListHeader extends _._cuidAspect(_._managedAspect(Base)) {
    declare identifier?: string | null
    declare description?: string | null
    declare validFrom?: __.CdsDate | null
    declare validTo?: __.CdsDate | null
    declare material?: __.Association.to<Product> | null
    declare material_Product?: string | null
    declare plantGroup?: __.Association.to<PlantGroup> | null
    declare plantGroup_ID?: string | null
    declare calculationQuantity?: _test_disassembly_types.UnsignedDecimalQuantity | null
    declare cutListPositions?: __.Composition.of.many<CutListPositions>
    declare bomHeaderMaterialAssignments?: __.Composition.of.many<BOMHeaderMaterialAssignments>
    declare disassemblyOrder?: __.Association.to.many<DisassemblyOrders>
    declare texts?: __.Composition.of.many<CutListHeaders.texts>
    declare localized?: __.Association.to<CutListHeaders.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutListHeader> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<CutListHeader>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class CutListHeader extends _CutListHeaderAspect(__.Entity) {}
Object.defineProperty(CutListHeader, 'name', { value: 'test.disassembly.CutListHeaders' })
Object.defineProperty(CutListHeader, 'is_singular', { value: true })
export class CutListHeaders extends Array<CutListHeader> {$count?: number}
Object.defineProperty(CutListHeaders, 'name', { value: 'test.disassembly.CutListHeaders' })

export function _CutListPositionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutListPosition extends _._cuidAspect(_._managedAspect(Base)) {
    declare cutListHeader?: __.Association.to<CutListHeader> | null
    declare cutListHeader_ID?: string | null
    declare parent?: __.Association.to<CutListPosition> | null
    declare parent_ID?: string | null
    declare children?: __.Composition.of.many<CutListPositions>
    declare cutHeader?: __.Association.to<CutHeaderVersion> | null
    declare cutHeader_ID?: string | null
    declare cutPosition?: __.Association.to<CutPosition> | null
    declare cutPosition_ID?: string | null
    declare percentage?: _test_disassembly_types.UnsignedDecimalQuantity | null
    declare type?: CutListPosition_type | null
    declare editPercentage?: boolean | null
    declare isCutHeaderLatestVersion?: boolean | null
    static type = CutListPosition_type;
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutListPosition> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<CutListPosition>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class CutListPosition extends _CutListPositionAspect(__.Entity) {}
Object.defineProperty(CutListPosition, 'name', { value: 'test.disassembly.CutListPositions' })
Object.defineProperty(CutListPosition, 'is_singular', { value: true })
export class CutListPositions extends Array<CutListPosition> {$count?: number}
Object.defineProperty(CutListPositions, 'name', { value: 'test.disassembly.CutListPositions' })

export function _BOMHeaderMaterialAssignmentAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BOMHeaderMaterialAssignment extends _._cuidAspect(_._managedAspect(Base)) {
    declare cutListHeader?: __.Association.to<CutListHeader> | null
    declare cutListHeader_ID?: string | null
    declare disassemblyProcess?: __.Association.to<DisassemblyProcess> | null
    declare disassemblyProcess_ID?: string | null
    declare material?: __.Association.to<Product> | null
    declare material_Product?: string | null
    declare plant?: __.Association.to<Plant> | null
    declare plant_Plant?: string | null
    declare bomHeader?: __.Association.to<BomHeader> | null
    declare bomHeader_BillOfMaterial?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<BOMHeaderMaterialAssignment> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<BOMHeaderMaterialAssignment>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class BOMHeaderMaterialAssignment extends _BOMHeaderMaterialAssignmentAspect(__.Entity) {}
Object.defineProperty(BOMHeaderMaterialAssignment, 'name', { value: 'test.disassembly.BOMHeaderMaterialAssignments' })
Object.defineProperty(BOMHeaderMaterialAssignment, 'is_singular', { value: true })
export class BOMHeaderMaterialAssignments extends Array<BOMHeaderMaterialAssignment> {$count?: number}
Object.defineProperty(BOMHeaderMaterialAssignments, 'name', { value: 'test.disassembly.BOMHeaderMaterialAssignments' })

export function _MRPCalculationHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MRPCalculationHeader extends _._cuidAspect(_._managedAspect(Base)) {
    declare description?: string | null
    declare cutListHeader?: __.Association.to<CutListHeader> | null
    declare cutListHeader_ID?: string | null
    declare plant?: __.Association.to<Plant> | null
    declare plant_Plant?: string | null
    declare mrpCalculationPositions?: __.Composition.of.many<MRPCalculationPositions>
    declare startDate?: __.CdsDate | null
    declare endDate?: __.CdsDate | null
    declare texts?: __.Composition.of.many<MRPCalculationHeaders.texts>
    declare localized?: __.Association.to<MRPCalculationHeaders.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<MRPCalculationHeader> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<MRPCalculationHeader>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class MRPCalculationHeader extends _MRPCalculationHeaderAspect(__.Entity) {}
Object.defineProperty(MRPCalculationHeader, 'name', { value: 'test.disassembly.MRPCalculationHeaders' })
Object.defineProperty(MRPCalculationHeader, 'is_singular', { value: true })
export class MRPCalculationHeaders extends Array<MRPCalculationHeader> {$count?: number}
Object.defineProperty(MRPCalculationHeaders, 'name', { value: 'test.disassembly.MRPCalculationHeaders' })

export function _MRPCalculationPositionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MRPCalculationPosition extends _._cuidAspect(_._managedAspect(Base)) {
    declare cutListPosition?: __.Association.to<CutListPosition> | null
    declare cutListPosition_ID?: string | null
    declare mrpCalculationHeader?: __.Association.to<MRPCalculationHeader> | null
    declare mrpCalculationHeader_ID?: string | null
    declare overrideCutQuantity?: _test_disassembly_types.UnsignedDecimalQuantity | null
    declare overrideCutMarkedAsDeleted?: boolean | null
    declare overrideCutPositionPercentage?: _test_disassembly_types.UnsignedDecimalQuantity | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<MRPCalculationPosition> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<MRPCalculationPosition>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class MRPCalculationPosition extends _MRPCalculationPositionAspect(__.Entity) {}
Object.defineProperty(MRPCalculationPosition, 'name', { value: 'test.disassembly.MRPCalculationPositions' })
Object.defineProperty(MRPCalculationPosition, 'is_singular', { value: true })
export class MRPCalculationPositions extends Array<MRPCalculationPosition> {$count?: number}
Object.defineProperty(MRPCalculationPositions, 'name', { value: 'test.disassembly.MRPCalculationPositions' })

export function _DisassemblyOrderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class DisassemblyOrder extends _._cuidAspect(_._managedAspect(Base)) {
    declare description?: string | null
    declare cutListHeader?: __.Association.to<CutListHeader> | null
    declare cutListHeader_ID?: string | null
    declare disassemblyProcess?: __.Association.to<DisassemblyProcess> | null
    declare disassemblyProcess_ID?: string | null
    declare plant?: __.Association.to<Plant> | null
    declare plant_Plant?: string | null
    declare productionOrder?: __.Association.to<ProductionOrder> | null
    declare productionOrder_ManufacturingOrder?: string | null
    declare _productionOrder_orderType?: string | null
    declare _productionOrder_startDate?: __.CdsDate | null
    declare _productionOrder_endDate?: __.CdsDate | null
    declare _productionOrder_quantity?: number | null
    declare texts?: __.Composition.of.many<DisassemblyOrders.texts>
    declare localized?: __.Association.to<DisassemblyOrders.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<DisassemblyOrder> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<DisassemblyOrder>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & globalThis.Record<never, never>;
  };
}
export class DisassemblyOrder extends _DisassemblyOrderAspect(__.Entity) {}
Object.defineProperty(DisassemblyOrder, 'name', { value: 'test.disassembly.DisassemblyOrders' })
Object.defineProperty(DisassemblyOrder, 'is_singular', { value: true })
export class DisassemblyOrders extends Array<DisassemblyOrder> {$count?: number}
Object.defineProperty(DisassemblyOrders, 'name', { value: 'test.disassembly.DisassemblyOrders' })

export function _ProductionOrderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductionOrder extends Base {
    declare ManufacturingOrder?: __.Key<string>
    declare ManufacturingOrderType?: string | null
    declare Material?: string | null
    declare ProductionPlant?: string | null
    declare TotalQuantity?: number | null
    declare MfgOrderPlannedStartDate?: __.CdsDate | null
    declare MfgOrderPlannedEndDate?: __.CdsDate | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductionOrder>;
    declare static readonly elements: __.ElementsOf<ProductionOrder>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductionOrder extends _ProductionOrderAspect(__.Entity) {}
Object.defineProperty(ProductionOrder, 'name', { value: 'test.disassembly.ProductionOrders' })
Object.defineProperty(ProductionOrder, 'is_singular', { value: true })
export class ProductionOrders extends Array<ProductionOrder> {$count?: number}
Object.defineProperty(ProductionOrders, 'name', { value: 'test.disassembly.ProductionOrders' })

export function _ProductionOrderTypeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProductionOrderType extends Base {
    declare orderType?: __.Key<__.DeepRequired<_API_PRODUCTION_ORDER_2_SRV.A_ProductionOrder_2>['ManufacturingOrderType']>
    declare orderTypeDescription?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProductionOrderType>;
    declare static readonly elements: __.ElementsOf<ProductionOrderType>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class ProductionOrderType extends _ProductionOrderTypeAspect(__.Entity) {}
Object.defineProperty(ProductionOrderType, 'name', { value: 'test.disassembly.ProductionOrderTypes' })
Object.defineProperty(ProductionOrderType, 'is_singular', { value: true })
export class ProductionOrderTypes extends Array<ProductionOrderType> {$count?: number}
Object.defineProperty(ProductionOrderTypes, 'name', { value: 'test.disassembly.ProductionOrderTypes' })

export function _BomHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BomHeader extends Base {
    declare BillOfMaterial?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<BomHeader>;
    declare static readonly elements: __.ElementsOf<BomHeader>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class BomHeader extends _BomHeaderAspect(__.Entity) {}
Object.defineProperty(BomHeader, 'name', { value: 'test.disassembly.BomHeader' })
Object.defineProperty(BomHeader, 'is_singular', { value: true })
export class BomHeader_ extends Array<BomHeader> {$count?: number}
Object.defineProperty(BomHeader_, 'name', { value: 'test.disassembly.BomHeader' })

export function _BOMItemAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BOMItem extends Base {
    declare BillOfMaterial?: __.Key<string>
    declare BillOfMaterialCategory?: __.Key<string>
    declare BillOfMaterialVariant?: __.Key<string>
    declare BillOfMaterialVersion?: __.Key<string>
    declare Material?: __.Key<string>
    declare Plant?: __.Key<string>
    declare EngineeringChangeDocument?: __.Key<string>
    declare BillOfMaterialItemNodeNumber?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<BOMItem>;
    declare static readonly elements: __.ElementsOf<BOMItem>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class BOMItem extends _BOMItemAspect(__.Entity) {}
Object.defineProperty(BOMItem, 'name', { value: 'test.disassembly.BOMItem' })
Object.defineProperty(BOMItem, 'is_singular', { value: true })
export class BOMItem_ extends Array<BOMItem> {$count?: number}
Object.defineProperty(BOMItem_, 'name', { value: 'test.disassembly.BOMItem' })

export namespace PlantGroups {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare ID_texts?: __.Key<string>
      declare ID?: string | null
      declare description?: string | null
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.PlantGroups.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.PlantGroups.texts' })
  
}
export namespace CutHeaderVersions {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare ID?: __.Key<string>
      declare description?: string | null
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.CutHeaderVersions.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.CutHeaderVersions.texts' })
  
}
export namespace DisassemblyProcesses {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare ID_texts?: __.Key<string>
      declare ID?: string | null
      declare description?: string | null
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.DisassemblyProcesses.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.DisassemblyProcesses.texts' })
  
}
export namespace CutTypes {
  // enum
  const text_type = {
    Standard: "S",
    Organizational: "O",
    Classification: "C",
  } as const;
  type text_type = "S" | "O" | "C"
  
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare name?: string | null
      declare descr?: string | null
      declare type?: __.Key<text_type>
      static type = text_type;
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.CutTypes.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.CutTypes.texts' })
  
}
export namespace CutListHeaders {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare ID_texts?: __.Key<string>
      declare ID?: string | null
      declare description?: string | null
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.CutListHeaders.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.CutListHeaders.texts' })
  
}
export namespace MRPCalculationHeaders {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare ID_texts?: __.Key<string>
      declare ID?: string | null
      declare description?: string | null
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.MRPCalculationHeaders.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.MRPCalculationHeaders.texts' })
  
}
export namespace DisassemblyOrders {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare ID_texts?: __.Key<string>
      declare ID?: string | null
      declare description?: string | null
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.DisassemblyOrders.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.DisassemblyOrders.texts' })
  
}