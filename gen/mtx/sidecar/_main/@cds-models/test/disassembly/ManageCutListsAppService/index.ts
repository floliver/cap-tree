// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './../../../index.js';
import * as __ from './../../../_/index.js';
import * as _test_disassembly_types from './../types/index.js';
import * as _test_disassembly from './../index.js';
import * as _sap_common from './../../../sap/common/index.js';

export default class {
}

// enum
const CutListPosition_type = {
  CutHeader: "H",
  CutPosition: "P",
} as const;
type CutListPosition_type = "H" | "P"

// enum
const CutType_type = {
  Standard: "S",
  Organizational: "O",
  Classification: "C",
} as const;
type CutType_type = "S" | "O" | "C"

export function _CutListHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutListHeader extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
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
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutListHeader>;
    declare static readonly elements: __.ElementsOf<CutListHeader>;
    declare static readonly actions: {
      calculatePushQuantities:  {
        // positional
        (): Array<_test_disassembly_types.PushCalculationResult>
        // named
        ({}: globalThis.Record<never, never>): Array<_test_disassembly_types.PushCalculationResult>
        // metadata (do not use)
        __parameters: globalThis.Record<never, never>, __returns: Array<_test_disassembly_types.PushCalculationResult>, __self: CutListHeader
        kind: 'action'
      }
      createBOM:  {
        // positional
        (): Array<BOMHeader>
        // named
        ({}: globalThis.Record<never, never>): Array<BOMHeader>
        // metadata (do not use)
        __parameters: globalThis.Record<never, never>, __returns: Array<BOMHeader>, __self: CutListHeader
        kind: 'action'
      }
    };
  };
}
export class CutListHeader extends _CutListHeaderAspect(__.Entity) {static drafts: __.DraftOf<CutListHeader>}
Object.defineProperty(CutListHeader, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutListHeaders' })
Object.defineProperty(CutListHeader, 'is_singular', { value: true })
export class CutListHeaders extends Array<CutListHeader> {static drafts: __.DraftsOf<CutListHeader>
$count?: number}
Object.defineProperty(CutListHeaders, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutListHeaders' })

export function _CutListPositionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutListPosition extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
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
    declare LimitedDescendantCount?: number | null
    declare DistanceFromRoot?: number | null
    declare DrillState?: string | null
    declare LimitedRank?: number | null
    static type = CutListPosition_type;
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutListPosition>;
    declare static readonly elements: __.ElementsOf<CutListPosition>;
    declare static readonly actions: {
      refreshCutHeader:  {
        // positional
        (): CutListPositions
        // named
        ({}: globalThis.Record<never, never>): CutListPositions
        // metadata (do not use)
        __parameters: globalThis.Record<never, never>, __returns: CutListPositions, __self: CutListPosition
        kind: 'action'
      }
    };
  };
}
export class CutListPosition extends _CutListPositionAspect(__.Entity) {static drafts: __.DraftOf<CutListPosition>}
Object.defineProperty(CutListPosition, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutListPositions' })
Object.defineProperty(CutListPosition, 'is_singular', { value: true })
export class CutListPositions extends Array<CutListPosition> {static drafts: __.DraftsOf<CutListPosition>
$count?: number}
Object.defineProperty(CutListPositions, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutListPositions' })

export function _BOMHeaderMaterialAssignmentAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BOMHeaderMaterialAssignment extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
    declare cutListHeader?: __.Association.to<CutListHeader> | null
    declare cutListHeader_ID?: string | null
    declare disassemblyProcess?: __.Association.to<DisassemblyProcess> | null
    declare disassemblyProcess_ID?: string | null
    declare material?: __.Association.to<Product> | null
    declare material_Product?: string | null
    declare plant?: __.Association.to<Plant> | null
    declare plant_Plant?: string | null
    declare bomHeader?: __.Association.to<_test_disassembly.BomHeader> | null
    declare bomHeader_BillOfMaterial?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<BOMHeaderMaterialAssignment>;
    declare static readonly elements: __.ElementsOf<BOMHeaderMaterialAssignment>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class BOMHeaderMaterialAssignment extends _BOMHeaderMaterialAssignmentAspect(__.Entity) {static drafts: __.DraftOf<BOMHeaderMaterialAssignment>}
Object.defineProperty(BOMHeaderMaterialAssignment, 'name', { value: 'test.disassembly.ManageCutListsAppService.BOMHeaderMaterialAssignments' })
Object.defineProperty(BOMHeaderMaterialAssignment, 'is_singular', { value: true })
export class BOMHeaderMaterialAssignments extends Array<BOMHeaderMaterialAssignment> {static drafts: __.DraftsOf<BOMHeaderMaterialAssignment>
$count?: number}
Object.defineProperty(BOMHeaderMaterialAssignments, 'name', { value: 'test.disassembly.ManageCutListsAppService.BOMHeaderMaterialAssignments' })

export function _BOMHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BOMHeader extends Base {
    declare BillOfMaterial?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<BOMHeader>;
    declare static readonly elements: __.ElementsOf<BOMHeader>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class BOMHeader extends _BOMHeaderAspect(__.Entity) {}
Object.defineProperty(BOMHeader, 'name', { value: 'test.disassembly.ManageCutListsAppService.BOMHeader' })
Object.defineProperty(BOMHeader, 'is_singular', { value: true })
export class BOMHeader_ extends Array<BOMHeader> {$count?: number}
Object.defineProperty(BOMHeader_, 'name', { value: 'test.disassembly.ManageCutListsAppService.BOMHeader' })

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
Object.defineProperty(BOMItem, 'name', { value: 'test.disassembly.ManageCutListsAppService.BOMItem' })
Object.defineProperty(BOMItem, 'is_singular', { value: true })
export class BOMItem_ extends Array<BOMItem> {$count?: number}
Object.defineProperty(BOMItem_, 'name', { value: 'test.disassembly.ManageCutListsAppService.BOMItem' })

export function _CutHeaderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutHeader extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
    declare latestVersion?: __.Composition.of<CutHeaderVersion> | null
    declare latestVersion_ID?: string | null
    declare versions?: __.Association.to.many<CutHeaderVersions>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutHeader>;
    declare static readonly elements: __.ElementsOf<CutHeader>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class CutHeader extends _CutHeaderAspect(__.Entity) {}
Object.defineProperty(CutHeader, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaders' })
Object.defineProperty(CutHeader, 'is_singular', { value: true })
export class CutHeaders extends Array<CutHeader> {$count?: number}
Object.defineProperty(CutHeaders, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaders' })

export function _CutHeaderVersionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutHeaderVersion extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
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
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutHeaderVersion>;
    declare static readonly elements: __.ElementsOf<CutHeaderVersion>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class CutHeaderVersion extends _CutHeaderVersionAspect(__.Entity) {}
Object.defineProperty(CutHeaderVersion, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaderVersions' })
Object.defineProperty(CutHeaderVersion, 'is_singular', { value: true })
export class CutHeaderVersions extends Array<CutHeaderVersion> {$count?: number}
Object.defineProperty(CutHeaderVersions, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaderVersions' })

export function _CutHeaderVersionsVHAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutHeaderVersionsVH extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
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
    declare texts?: __.Composition.of.many<CutHeaderVersionsVH.texts>
    declare localized?: __.Association.to<CutHeaderVersionsVH.text> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutHeaderVersionsVH>;
    declare static readonly elements: __.ElementsOf<CutHeaderVersionsVH>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class CutHeaderVersionsVH extends _CutHeaderVersionsVHAspect(__.Entity) {}
Object.defineProperty(CutHeaderVersionsVH, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaderVersionsVH' })
Object.defineProperty(CutHeaderVersionsVH, 'is_singular', { value: true })
export class CutHeaderVersionsVH_ extends Array<CutHeaderVersionsVH> {$count?: number}
Object.defineProperty(CutHeaderVersionsVH_, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaderVersionsVH' })

export function _CutPositionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutPosition extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
    declare cutHeader?: __.Association.to<CutHeaderVersion> | null
    declare cutHeader_ID?: string | null
    declare disassemblyQuantity?: _test_disassembly_types.UnsignedDecimalQuantity | null
    declare material?: __.Association.to<Product> | null
    declare material_Product?: string | null
    declare markedAsDeleted?: boolean | null
    declare percentage?: _test_disassembly_types.UnsignedDecimalQuantity | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutPosition>;
    declare static readonly elements: __.ElementsOf<CutPosition>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class CutPosition extends _CutPositionAspect(__.Entity) {}
Object.defineProperty(CutPosition, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutPositions' })
Object.defineProperty(CutPosition, 'is_singular', { value: true })
export class CutPositions extends Array<CutPosition> {$count?: number}
Object.defineProperty(CutPositions, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutPositions' })

export function _CutRoutingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutRouting extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
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
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutRouting>;
    declare static readonly elements: __.ElementsOf<CutRouting>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class CutRouting extends _CutRoutingAspect(__.Entity) {}
Object.defineProperty(CutRouting, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutRoutings' })
Object.defineProperty(CutRouting, 'is_singular', { value: true })
export class CutRoutings extends Array<CutRouting> {$count?: number}
Object.defineProperty(CutRoutings, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutRoutings' })

export function _PlantGroupAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class PlantGroup extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
    declare name?: string | null
    declare description?: string | null
    declare disassemblyUnit?: string | null
    declare plants?: __.Composition.of.many<PlantGroupPlants>
    declare disassemblyProcess?: __.Composition.of<DisassemblyProcess> | null
    declare texts?: __.Composition.of.many<PlantGroups.texts>
    declare localized?: __.Association.to<PlantGroups.text> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<PlantGroup>;
    declare static readonly elements: __.ElementsOf<PlantGroup>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class PlantGroup extends _PlantGroupAspect(__.Entity) {}
Object.defineProperty(PlantGroup, 'name', { value: 'test.disassembly.ManageCutListsAppService.PlantGroups' })
Object.defineProperty(PlantGroup, 'is_singular', { value: true })
export class PlantGroups extends Array<PlantGroup> {$count?: number}
Object.defineProperty(PlantGroups, 'name', { value: 'test.disassembly.ManageCutListsAppService.PlantGroups' })

export function _DisassemblyProcessAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class DisassemblyProcess extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
    declare name?: string | null
    declare description?: string | null
    declare plantGroup?: __.Association.to<PlantGroup> | null
    declare plantGroup_ID?: string | null
    declare disassemblyOrder?: __.Association.to.many<DisassemblyOrders>
    declare texts?: __.Composition.of.many<DisassemblyProcesses.texts>
    declare localized?: __.Association.to<DisassemblyProcesses.text> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<DisassemblyProcess>;
    declare static readonly elements: __.ElementsOf<DisassemblyProcess>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class DisassemblyProcess extends _DisassemblyProcessAspect(__.Entity) {}
Object.defineProperty(DisassemblyProcess, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyProcesses' })
Object.defineProperty(DisassemblyProcess, 'is_singular', { value: true })
export class DisassemblyProcesses extends Array<DisassemblyProcess> {$count?: number}
Object.defineProperty(DisassemblyProcesses, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyProcesses' })

export function _DisassemblyOrderAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class DisassemblyOrder extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
    declare description?: string | null
    declare cutListHeader?: __.Association.to<CutListHeader> | null
    declare cutListHeader_ID?: string | null
    declare disassemblyProcess?: __.Association.to<DisassemblyProcess> | null
    declare disassemblyProcess_ID?: string | null
    declare plant?: __.Association.to<Plant> | null
    declare plant_Plant?: string | null
    declare productionOrder?: __.Association.to<_test_disassembly.ProductionOrder> | null
    declare productionOrder_ManufacturingOrder?: string | null
    declare _productionOrder_orderType?: string | null
    declare _productionOrder_startDate?: __.CdsDate | null
    declare _productionOrder_endDate?: __.CdsDate | null
    declare _productionOrder_quantity?: number | null
    declare texts?: __.Composition.of.many<DisassemblyOrders.texts>
    declare localized?: __.Association.to<DisassemblyOrders.text> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<DisassemblyOrder>;
    declare static readonly elements: __.ElementsOf<DisassemblyOrder>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class DisassemblyOrder extends _DisassemblyOrderAspect(__.Entity) {}
Object.defineProperty(DisassemblyOrder, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyOrders' })
Object.defineProperty(DisassemblyOrder, 'is_singular', { value: true })
export class DisassemblyOrders extends Array<DisassemblyOrder> {$count?: number}
Object.defineProperty(DisassemblyOrders, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyOrders' })

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
Object.defineProperty(Product, 'name', { value: 'test.disassembly.ManageCutListsAppService.Products' })
Object.defineProperty(Product, 'is_singular', { value: true })
export class Products extends Array<Product> {$count?: number}
Object.defineProperty(Products, 'name', { value: 'test.disassembly.ManageCutListsAppService.Products' })

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
Object.defineProperty(ProductPlant, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductPlants' })
Object.defineProperty(ProductPlant, 'is_singular', { value: true })
export class ProductPlants extends Array<ProductPlant> {$count?: number}
Object.defineProperty(ProductPlants, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductPlants' })

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
Object.defineProperty(ProductUnitOfMeasure, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductUnitOfMeasures' })
Object.defineProperty(ProductUnitOfMeasure, 'is_singular', { value: true })
export class ProductUnitOfMeasures extends Array<ProductUnitOfMeasure> {$count?: number}
Object.defineProperty(ProductUnitOfMeasures, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductUnitOfMeasures' })

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
Object.defineProperty(ProductDescription, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductDescriptions' })
Object.defineProperty(ProductDescription, 'is_singular', { value: true })
export class ProductDescriptions extends Array<ProductDescription> {$count?: number}
Object.defineProperty(ProductDescriptions, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductDescriptions' })

export function _LanguageAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Language extends Base {
    declare name?: string | null
    declare descr?: string | null
    declare code?: __.Key<_sap_common.Locale>
    declare texts?: __.Composition.of.many<Languages.texts>
    declare localized?: __.Association.to<Languages.text> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Language>;
    declare static readonly elements: __.ElementsOf<Language>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class Language extends _LanguageAspect(__.Entity) {}
Object.defineProperty(Language, 'name', { value: 'test.disassembly.ManageCutListsAppService.Languages' })
Object.defineProperty(Language, 'is_singular', { value: true })
export class Languages extends Array<Language> {$count?: number}
Object.defineProperty(Languages, 'name', { value: 'test.disassembly.ManageCutListsAppService.Languages' })

export function _PlantGroupPlantAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class PlantGroupPlant extends Base {
    declare ID?: __.Key<string>
    declare plantGroup?: __.Association.to<PlantGroup> | null
    declare plantGroup_ID?: string | null
    declare plant?: __.Association.to<Plant> | null
    declare plant_Plant?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<PlantGroupPlant>;
    declare static readonly elements: __.ElementsOf<PlantGroupPlant>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class PlantGroupPlant extends _PlantGroupPlantAspect(__.Entity) {}
Object.defineProperty(PlantGroupPlant, 'name', { value: 'test.disassembly.ManageCutListsAppService.PlantGroupPlants' })
Object.defineProperty(PlantGroupPlant, 'is_singular', { value: true })
export class PlantGroupPlants extends Array<PlantGroupPlant> {$count?: number}
Object.defineProperty(PlantGroupPlants, 'name', { value: 'test.disassembly.ManageCutListsAppService.PlantGroupPlants' })

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
Object.defineProperty(Plant, 'name', { value: 'test.disassembly.ManageCutListsAppService.Plants' })
Object.defineProperty(Plant, 'is_singular', { value: true })
export class Plants extends Array<Plant> {$count?: number}
Object.defineProperty(Plants, 'name', { value: 'test.disassembly.ManageCutListsAppService.Plants' })

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
Object.defineProperty(ProductionRoutingHeader, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductionRoutingHeaders' })
Object.defineProperty(ProductionRoutingHeader, 'is_singular', { value: true })
export class ProductionRoutingHeaders extends Array<ProductionRoutingHeader> {$count?: number}
Object.defineProperty(ProductionRoutingHeaders, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductionRoutingHeaders' })

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
Object.defineProperty(ProductionRoutingSequence, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductionRoutingSequences' })
Object.defineProperty(ProductionRoutingSequence, 'is_singular', { value: true })
export class ProductionRoutingSequences extends Array<ProductionRoutingSequence> {$count?: number}
Object.defineProperty(ProductionRoutingSequences, 'name', { value: 'test.disassembly.ManageCutListsAppService.ProductionRoutingSequences' })

export function _DisassemblyProcessesOfCutListPositionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class DisassemblyProcessesOfCutListPosition extends Base {
    declare cutListHeaderID?: __.Key<string>
    declare dissasemblyProcessID?: __.Key<string>
    declare dissasemblyProcessName?: string | null
    declare dissasemblyProcessDescription?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<DisassemblyProcessesOfCutListPosition>;
    declare static readonly elements: __.ElementsOf<DisassemblyProcessesOfCutListPosition>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class DisassemblyProcessesOfCutListPosition extends _DisassemblyProcessesOfCutListPositionAspect(__.Entity) {}
Object.defineProperty(DisassemblyProcessesOfCutListPosition, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyProcessesOfCutListPositions' })
Object.defineProperty(DisassemblyProcessesOfCutListPosition, 'is_singular', { value: true })
export class DisassemblyProcessesOfCutListPositions extends Array<DisassemblyProcessesOfCutListPosition> {$count?: number}
Object.defineProperty(DisassemblyProcessesOfCutListPositions, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyProcessesOfCutListPositions' })

export function _CutTypeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutType extends Base {
    declare name?: string | null
    declare descr?: string | null
    declare type?: __.Key<CutType_type>
    declare texts?: __.Composition.of.many<CutTypes.texts>
    declare localized?: __.Association.to<CutTypes.text> | null
    static type = CutType_type;
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutType>;
    declare static readonly elements: __.ElementsOf<CutType>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class CutType extends _CutTypeAspect(__.Entity) {}
Object.defineProperty(CutType, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutTypes' })
Object.defineProperty(CutType, 'is_singular', { value: true })
export class CutTypes extends Array<CutType> {$count?: number}
Object.defineProperty(CutTypes, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutTypes' })

export function _CutPeriodAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutPeriod extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
    declare cutHeader?: __.Association.to<CutHeaderVersion> | null
    declare cutHeader_ID?: string | null
    declare validFrom?: __.CdsDate | null
    declare validTo?: __.CdsDate | null
    declare cutPositions?: __.Composition.of.many<CutPeriodPositions>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutPeriod>;
    declare static readonly elements: __.ElementsOf<CutPeriod>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class CutPeriod extends _CutPeriodAspect(__.Entity) {}
Object.defineProperty(CutPeriod, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutPeriods' })
Object.defineProperty(CutPeriod, 'is_singular', { value: true })
export class CutPeriods extends Array<CutPeriod> {$count?: number}
Object.defineProperty(CutPeriods, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutPeriods' })

export function _CutPeriodPositionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CutPeriodPosition extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    declare modifiedBy?: _.User | null
    declare cutPeriod?: __.Association.to<CutPeriod> | null
    declare cutPeriod_ID?: string | null
    declare cutPosition?: __.Association.to<CutPosition> | null
    declare cutPosition_ID?: string | null
    declare quantity?: _test_disassembly_types.UnsignedDecimalQuantity | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CutPeriodPosition>;
    declare static readonly elements: __.ElementsOf<CutPeriodPosition>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class CutPeriodPosition extends _CutPeriodPositionAspect(__.Entity) {}
Object.defineProperty(CutPeriodPosition, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutPeriodPositions' })
Object.defineProperty(CutPeriodPosition, 'is_singular', { value: true })
export class CutPeriodPositions extends Array<CutPeriodPosition> {$count?: number}
Object.defineProperty(CutPeriodPositions, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutPeriodPositions' })

export namespace CutListHeaders {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends Base {
      declare ID_texts?: __.Key<string>
      declare locale?: _sap_common.Locale | null
      declare ID?: string | null
      declare description?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text>;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {static drafts: __.DraftOf<text>}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutListHeaders.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {static drafts: __.DraftsOf<text>
$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutListHeaders.texts' })
  
}
export namespace CutHeaderVersions {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends Base {
      declare locale?: __.Key<_sap_common.Locale>
      declare ID?: __.Key<string>
      declare description?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text>;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaderVersions.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaderVersions.texts' })
  
}
export namespace CutHeaderVersionsVH {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends Base {
      declare locale?: __.Key<_sap_common.Locale>
      declare ID?: __.Key<string>
      declare description?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text>;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaderVersionsVH.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutHeaderVersionsVH.texts' })
  
}
export namespace PlantGroups {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends Base {
      declare ID_texts?: __.Key<string>
      declare locale?: _sap_common.Locale | null
      declare ID?: string | null
      declare description?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text>;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.ManageCutListsAppService.PlantGroups.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.ManageCutListsAppService.PlantGroups.texts' })
  
}
export namespace DisassemblyProcesses {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends Base {
      declare ID_texts?: __.Key<string>
      declare locale?: _sap_common.Locale | null
      declare ID?: string | null
      declare description?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text>;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyProcesses.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyProcesses.texts' })
  
}
export namespace DisassemblyOrders {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends Base {
      declare ID_texts?: __.Key<string>
      declare locale?: _sap_common.Locale | null
      declare ID?: string | null
      declare description?: string | null
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text>;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyOrders.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.ManageCutListsAppService.DisassemblyOrders.texts' })
  
}
export namespace Languages {
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends Base {
      declare locale?: __.Key<_sap_common.Locale>
      declare name?: string | null
      declare descr?: string | null
      declare code?: __.Key<_sap_common.Locale>
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text>;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.ManageCutListsAppService.Languages.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.ManageCutListsAppService.Languages.texts' })
  
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
    return class text extends Base {
      declare locale?: __.Key<_sap_common.Locale>
      declare name?: string | null
      declare descr?: string | null
      declare type?: __.Key<text_type>
      static type = text_type;
      static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text>;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutTypes.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'test.disassembly.ManageCutListsAppService.CutTypes.texts' })
  
}