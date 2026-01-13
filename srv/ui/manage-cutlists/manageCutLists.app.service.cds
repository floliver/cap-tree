namespace test.disassembly;

using {sap} from '@sap/cds/common';
using {test.disassembly as schema} from '../../../db/schema';
using {test.disassembly.types as types} from '../../../db/types';
using {API_BILL_OF_MATERIAL_SRV_0002 as external} from '../../external/API_BILL_OF_MATERIAL_SRV_0002';

@path: 'ui/manage-cutlists'
service ManageCutListsAppService {
    entity CutListHeaders                         as projection on schema.CutListHeaders
        actions {
            action calculatePushQuantities() returns array of types.PushCalculationResult;

            @(Common.SideEffects: {
                $Type           : 'Common.SideEffectsType',
                SourceEntities: ['in'],
                TargetEntities  : ['in/bomHeaderMaterialAssignments']
            }, )

            action createBOM()               returns array of BOMHeader;
        };

    entity CutListPositions                       as projection on schema.CutListPositions
        actions {
            @(Common.SideEffects: {TargetProperties: ['isCutHeaderLatestVersion']}, )
            action refreshCutHeader() returns CutListPositions;
        };

    entity BOMHeaderMaterialAssignments           as projection on schema.BOMHeaderMaterialAssignments;
    entity BOMHeader                              as projection on external.MaterialBOM;
    entity BOMItem                                as projection on external.MaterialBOMItem;

    @readonly
    entity CutHeaders                             as projection on schema.CutHeaders;

    @readonly
    entity CutHeaderVersions                      as projection on schema.CutHeaderVersions;

    @readonly
    @cds.redirection.target: false
    entity CutHeaderVersionsVH                    as projection on schema.CutHeaderVersions;

    @readonly
    entity CutPositions                           as projection on schema.CutPositions;

    @readonly
    entity CutRoutings                            as projection on schema.CutRoutings;

    @readonly
    entity PlantGroups                            as projection on schema.PlantGroups;

    @readonly
    entity DisassemblyProcesses                   as projection on schema.DisassemblyProcesses;

    @readonly
    entity DisassemblyOrders                      as projection on schema.DisassemblyOrders;

    @readonly
    entity Products                               as projection on schema.Products;

    @readonly
    entity ProductPlants                          as projection on schema.ProductPlants;

    @readonly
    entity ProductUnitOfMeasures                  as projection on schema.ProductUnitOfMeasures;

    @readonly
    entity ProductDescriptions                    as projection on schema.ProductDescriptions;

    @readonly
    entity Languages                              as projection on sap.common.Languages;

    @readonly
    entity PlantGroupPlants                       as projection on schema.PlantGroupPlants;

    @readonly
    entity Plants                                 as projection on schema.Plants;

    @readonly
    entity ProductionRoutingHeaders               as projection on schema.ProductionRoutingHeaders;

    @readonly
    entity ProductionRoutingSequences             as projection on schema.ProductionRoutingSequences;

    @readonly
    entity DisassemblyProcessesOfCutListPositions as
        select from CutListPositions {
            key cutListHeader.ID                         as cutListHeaderID,
            key cutHeader.disassemblyProcess.ID          as dissasemblyProcessID,
                cutHeader.disassemblyProcess.name        as dissasemblyProcessName,
                cutHeader.disassemblyProcess.description as dissasemblyProcessDescription,
        }
        where
            cutHeader.disassemblyProcess.ID is not null
        group by
            cutListHeader.ID,
            cutHeader.disassemblyProcess.ID,
            cutHeader.disassemblyProcess.name,
            cutHeader.disassemblyProcess.description;
}
