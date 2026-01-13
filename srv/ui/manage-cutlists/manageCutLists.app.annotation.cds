namespace test.disassembly;

using {test.disassembly.ManageCutListsAppService as ManageCutListsAppService} from './manageCutLists.app.service';



annotate ManageCutListsAppService with @(requires: 'authenticated-user');

annotate ManageCutListsAppService.CutListHeaders with @(restrict: [{
    grant: ['*'],
    to   : ['TestDisassemblyManager'],
// where: 'plantGroup.name= $user.PlantGroup'
}]);

annotate ManageCutListsAppService.CutListPositions with @(restrict: [
    {
        grant: ['READ'],
        to   : ['TestDisassemblyOperator']
    },
    {
        grant: ['*'],
        to   : ['TestDisassemblyManager']
    }
]);

annotate ManageCutListsAppService.CutHeaders with @(restrict: [{
    grant: ['READ'],
    to   : ['TestDisassemblyManager']
}]);

// annotate ManageCutListsAppService.CutHeaders.texts with @(restrict: [
//     {
//         grant: ['READ'],
//         to   : ['DisassemblyOperator']
//     },
//     {
//         grant: ['READ'],
//         to   : ['DisassemblyManager']
//     }
// ]);

annotate ManageCutListsAppService.CutPositions with @(restrict: [{
    grant: ['READ'],
    to   : ['TestDisassemblyManager']
}]);

annotate ManageCutListsAppService.CutRoutings with @(restrict: [{
    grant: ['READ'],
    to   : ['TestDisassemblyManager']
}]);

annotate ManageCutListsAppService.Products with @(restrict: [{
    grant: ['READ'],
    to   : ['TestDisassemblyManager']
}]);

annotate ManageCutListsAppService.DisassemblyProcesses with @(restrict: [{
    grant: ['READ'],
    to   : ['TestDisassemblyManager'],
}]);

annotate ManageCutListsAppService.PlantGroups with @(restrict: [{
    grant: ['READ'],
    to   : ['TestDisassemblyManager'],
// where: 'name = $user.PlantGroup'
}]);

annotate ManageCutListsAppService.ProductionRoutingHeaders with @(restrict: [{
    grant: ['READ'],
    to   : ['TestDisassemblyManager']
}]);

annotate ManageCutListsAppService.ProductionRoutingSequences with @(restrict: [{
    grant: ['READ'],
    to   : ['TestDisassemblyManager']
}]);

annotate ManageCutListsAppService.BOMHeaderMaterialAssignments with @(restrict: [
    {
        grant: ['READ'],
        to   : ['TestDisassemblyOperator']
    },
    {
        grant: ['*'],
        to   : ['TestDisassemblyManager']
    }
]);


annotate ManageCutListsAppService.CutListHeaders with @odata.draft.enabled;

annotate ManageCutListsAppService.CutListPositions with @hierarchy : parent;
 annotate ManageCutListsAppService.CutListPositions with @Aggregation.RecursiveHierarchy #CutListPositionsHierarchy: {
      ParentNavigationProperty: parent, // navigates to a node's parent
      NodeProperty            : ID, // identifies a node, usually the key
 };

annotate ManageCutListsAppService.CutListPositions with @Aggregation.RecursiveHierarchy #ContentsHierarchy: {
    ParentNavigationProperty: parent, // navigates to a node's parent
    NodeProperty            : ID, // identifies a node, usually the key
};

// Fiori expects the following to be defined explicitly, even though they're always the same
extend ManageCutListsAppService.CutListPositions with @(
    // The columns expected by Fiori to be present in hierarchy entities

    Hierarchy.RecursiveHierarchy #CutListPositionsHierarchy        : {
        LimitedDescendantCount: LimitedDescendantCount,
        DistanceFromRoot      : DistanceFromRoot,
        DrillState            : DrillState,
        LimitedRank           : LimitedRank
    },
    // Disallow filtering on these properties from Fiori UIs
    Capabilities.FilterRestrictions.NonFilterableProperties: [
        'LimitedDescendantCount',
        'DistanceFromRoot',
        'DrillState',
        'LimitedRank'
    ],
    // Disallow sorting on these properties from Fiori UIs
    Capabilities.SortRestrictions.NonSortableProperties    : [
        'LimitedDescendantCount',
        'DistanceFromRoot',
        'DrillState',
        'LimitedRank'
    ],
) columns { // Ensure we can query these fields from database
    null as LimitedDescendantCount : Int16,
    null as DistanceFromRoot       : Int16,
    null as DrillState             : String,
    null as LimitedRank            : Int16,
};
