namespace test.disassembly;

using {
    managed,
    cuid,
    sap,
} from '@sap/cds/common';
using from '@sap/cds-common-content';
using {Plant as ApiPlant} from '../srv/external/Plant';
using {Product as ApiProduct} from '../srv/external/Product';
using {API_BILL_OF_MATERIAL_SRV_0002 as ApiBom} from '../srv/external/API_BILL_OF_MATERIAL_SRV_0002';
using {ProductionRouting as APIProductionRouting} from '../srv/external/ProductionRouting';
using {API_PRODUCTION_ORDER_2_SRV as ApiProductionOrders} from '../srv/external/API_PRODUCTION_ORDER_2_SRV';
using test.disassembly.types as types from './types';

entity Plants                     as
    projection on ApiPlant.Plant {
        key Plant,
            PlantName
    }

entity Products                   as
    projection on ApiProduct.Product {
        key Product,
            _ProductDescription : Composition of one ProductDescriptions
                                      on  _ProductDescription.Product  = $self.Product
                                      and _ProductDescription.Language = $user.locale
    }

entity ProductDescriptions        as
    projection on ApiProduct.ProductDescription {
        key Product,
        key Language,
            ProductDescription,
    }

entity ProductPlants              as
    projection on ApiProduct.ProductPlant {
        key Product,
        key Plant,
    }

entity ProductUnitOfMeasures      as
    projection on ApiProduct.ProductUnitOfMeasure {
        key Product,
        key AlternativeUnit,
    }

entity ProductionRoutingHeaders   as
    projection on APIProductionRouting.ProductionRoutingHeader {
        key ProductionRoutingGroup,
        key ProductionRouting,
        key ProductionRoutingInternalVers,
            Plant,
            BillOfOperationsDesc,
    };

entity ProductionRoutingSequences as
    projection on APIProductionRouting.ProductionRoutingSequence {
        key ProductionRoutingGroup,
        key ProductionRouting,
        key ProductionRoutingSequence,
        key ProductionRoutingSqncIntVers,
            SequenceText,
    };

@assert.unique: {plantGroup: [name]}
@cds.odata.valuelist
entity PlantGroups : cuid, managed {
    name               : String           @mandatory;
    description        : localized String @required: true;
    disassemblyUnit    : String(3)        @mandatory;
    plants             : Composition of many PlantGroupPlants
                             on plants.plantGroup = $self;
    disassemblyProcess : Composition of one DisassemblyProcesses
                             on disassemblyProcess.plantGroup = $self;

}

@assert.unique: {constraint: [
    plantGroup,
    plant
]}
entity PlantGroupPlants : cuid {
    plantGroup : Association to PlantGroups @mandatory;
    plant      : Association to Plants      @mandatory;
}

entity CutHeaders : cuid, managed {
    latestVersion : Composition of one CutHeaderVersions;
    versions      : Association to many CutHeaderVersions on versions.cutHeader = $self;
}

@assert.unique: {constraint: [
    cutIdentifier,
    version
]}
entity CutHeaderVersions : cuid, managed {
    cutHeader           : Association to one CutHeaders             @mandatory;
    version             : Integer                                   @mandatory;
    cutIdentifier       : String                                    @mandatory;
    description         : localized String                          @required: true;
    disassemblyQuantity : types.UnsignedDecimalQuantity default 100 @mandatory;
    cutType             : Association to one CutTypes;
    plantGroup          : Association to one PlantGroups            @mandatory;
    material            : Association to one Products               @mandatory;
    disassemblyProcess  : Association to one DisassemblyProcesses   @mandatory;
    cutPositions        : Composition of many CutPositions
                              on cutPositions.cutHeader = $self;
    cutPeriods          : Composition of many CutPeriods
                              on cutPeriods.cutHeader = $self;
    cutRoutings         : Composition of many CutRoutings
                              on cutRoutings.cutHeader = $self;
}

entity CutPeriods : cuid, managed {
    cutHeader    : Association to one CutHeaderVersions @mandatory;
    validFrom    : Date default $now;
    validTo      : Date default '9999-12-31';
    cutPositions : Composition of many CutPeriodPositions
                       on cutPositions.cutPeriod = $self;
}

entity CutPeriodPositions : cuid, managed {
    cutPeriod   : Association to one CutPeriods   @mandatory;
    cutPosition : Association to one CutPositions @mandatory;
    quantity    : types.UnsignedDecimalQuantity;
}

@assert.unique: {constraint: [
    cutHeader,
    material
]}
entity CutPositions : cuid, managed {
            cutHeader           : Association to one CutHeaderVersions;
            disassemblyQuantity : types.UnsignedDecimalQuantity;
            material            : Association to one Products @mandatory;
            markedAsDeleted     : Boolean default false;
    virtual percentage          : types.UnsignedDecimalQuantity default 0;
}

@assert.unique: {constraint: [
    cutHeader,
    plant
]}
entity CutRoutings : cuid, managed {
    cutHeader                 : Association to one CutHeaderVersions;
    plant                     : Association to one Plants @mandatory;
    productionRoutingGroup    : Association to ProductionRoutingHeaders;
    productionRouting         : Association to ProductionRoutingHeaders;
    productionRoutingSequence : Association to ProductionRoutingSequences
}

@assert.unique.key: [
    plantGroup,
    name
]
entity DisassemblyProcesses : cuid, managed {
    name             : String(20)                 @mandatory;
    description      : localized String           @required: true;
    plantGroup       : Association to PlantGroups @mandatory;
    disassemblyOrder : Association to many DisassemblyOrders
                           on disassemblyOrder.disassemblyProcess = $self;
}

entity CutTypes : sap.common.CodeList {
    key type : String(1) enum {
            Standard = 'S';
            Organizational = 'O';
            Classification = 'C';
        }
}


@assert.unique: {constraint: [
    identifier,
    material
]}
entity CutListHeaders : cuid, managed {
    identifier                   : String                         @mandatory;
    description                  : localized String               @required: true;
    validFrom                    : Date default $now;
    validTo                      : Date default '9999-12-31';
    material                     : Association to one Products    ;
    plantGroup                   : Association to one PlantGroups ;
    calculationQuantity          : types.UnsignedDecimalQuantity;
    cutListPositions             : Composition of many CutListPositions
                                       on cutListPositions.cutListHeader = $self;
    bomHeaderMaterialAssignments : Composition of many BOMHeaderMaterialAssignments
                                       on bomHeaderMaterialAssignments.cutListHeader = $self;
    disassemblyOrder             : Association to many DisassemblyOrders
                                       on disassemblyOrder.cutListHeader = $self;
}

entity CutListPositions : cuid, managed {
            cutListHeader  : Association to one CutListHeaders @mandatory;
            parent         : Association to one CutListPositions;
            children       : Composition of many CutListPositions
                                 on children.parent = $self;
            cutHeader      : Association to one CutHeaderVersions;
            cutPosition    : Association to one CutPositions;
            percentage     : types.UnsignedDecimalQuantity;
            type           : String(1) enum {
                CutHeader = 'H';
                CutPosition = 'P';
            };
    virtual editPercentage : Boolean;
    virtual isCutHeaderLatestVersion : Boolean;
}

@assert.unique: {constraint: [
    cutListHeader,
    disassemblyProcess,
    plant
]}
entity BOMHeaderMaterialAssignments : cuid, managed {
    cutListHeader      : Association to one CutListHeaders;
    disassemblyProcess : Association to one DisassemblyProcesses @mandatory;
    material           : Association to one Products             @mandatory;
    plant              : Association to one Plants               @mandatory;
    bomHeader          : Association to one BomHeader;
}

entity MRPCalculationHeaders : cuid, managed {
    description             : localized String;
    cutListHeader           : Association to one CutListHeaders @mandatory;
    plant                   : Association to one Plants         @mandatory;
    mrpCalculationPositions : Composition of many MRPCalculationPositions
                                  on mrpCalculationPositions.mrpCalculationHeader = $self;
    startDate               : Date default $now                 @mandatory;
    endDate                 : Date default $now                 @mandatory;
}

entity MRPCalculationPositions : cuid, managed {
            cutListPosition               : Association to one CutListPositions;
            mrpCalculationHeader          : Association to one MRPCalculationHeaders;
            overrideCutQuantity           : types.UnsignedDecimalQuantity;
            overrideCutMarkedAsDeleted    : Boolean default false;
    virtual overrideCutPositionPercentage : types.UnsignedDecimalQuantity default 0;
}

entity DisassemblyOrders : cuid, managed {
    description                : localized String;
    cutListHeader              : Association to CutListHeaders       @mandatory;
    disassemblyProcess         : Association to DisassemblyProcesses @mandatory;
    plant                      : Association to Plants               @mandatory;
    productionOrder            : Association to ProductionOrders     @mandatory;
    _productionOrder_orderType : String default '';
    _productionOrder_startDate : Date default $now;
    _productionOrder_endDate   : Date default $now;
    _productionOrder_quantity  : Integer default 0;
}


entity ProductionOrders           as
    projection on ApiProductionOrders.A_ProductionOrder_2 {
        key ManufacturingOrder,
            ManufacturingOrderType,
            Material,
            ProductionPlant,
            TotalQuantity,
            MfgOrderPlannedStartDate,
            MfgOrderPlannedEndDate,
    }

entity ProductionOrderTypes {
    key orderType            : type of ApiProductionOrders.A_ProductionOrder_2 : ManufacturingOrderType;
        orderTypeDescription : String;
}

entity BomHeader                  as
    projection on ApiBom.MaterialBOM {
        key BillOfMaterial : String(8),
    };

entity BOMItem                    as
    projection on ApiBom.MaterialBOMItem {
        key BillOfMaterial               : String(8),
        key BillOfMaterialCategory       : String(1),
        key BillOfMaterialVariant        : String(2),
        key BillOfMaterialVersion        : String(4),
        key Material                     : String(18),
        key Plant                        : String(4),
        key EngineeringChangeDocument    : String(12),
        key BillOfMaterialItemNodeNumber : String(8),
    };

// to get the texts drafts table generated
annotate PlantGroups with @fiori.draft.enabled;
annotate PlantGroupPlants with @fiori.draft.enabled;
annotate CutHeaders with @fiori.draft.enabled;
annotate CutListHeaders with @fiori.draft.enabled;
annotate DisassemblyProcesses with @fiori.draft.enabled;
annotate MRPCalculationHeaders with @fiori.draft.enabled;
annotate DisassemblyOrders with @fiori.draft.enabled;
