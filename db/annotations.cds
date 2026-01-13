using test.disassembly as schema from './schema';

annotate schema.Plants {
    Plant     @(title: '{i18n>Plant}');
    PlantName @(title: '{i18n>PlantName}');
}

annotate schema.PlantGroups with {
    name            @title: '{i18n>PlantGroupName}';
    description     @title: '{i18n>Description}';
    disassemblyUnit @title: '{i18n>DisassemblyUnit}';
}

annotate schema.CutHeaders with {
    latestVersion @title: '{i18n>LatestVersion}';
    versions      @title: '{i18n>Versions}';
}

annotate schema.CutHeaderVersions with {
    cutIdentifier       @title: '{i18n>CutIdentifier}';
    description         @title: '{i18n>Description}';
    disassemblyQuantity @title: '{i18n>DisassemblyQty}';
    cutType             @title: '{i18n>CutType}';
    plantGroup          @title: '{i18n>PlantGroup}';
    material            @title: '{i18n>Material}';
    disassemblyProcess  @title: '{i18n>DisassemblyProcess}';
    cutPositions        @title: '{i18n>CutPositions}'
}

annotate schema.CutPositions with {
    disassemblyQuantity @title: '{i18n>DisassemblyQty}';
}

annotate schema.DisassemblyProcesses {
    name        @title: '{i18n>Name}';
    description @title: '{i18n>Description}';
}

annotate schema.CutTypes with {
    type @title: '{i18n>CutType}';
};

annotate schema.CutRoutings with {
    productionRoutingGroup    @title: '{i18n>ProductionRoutingGroup}';
    productionRouting         @title: '{i18n>ProductionRouting}';
    productionRoutingSequence @title: '{i18n>ProductionRoutingSequence}';
};

annotate schema.ProductionRoutingHeaders with {
    ProductionRoutingGroup @title: '{i18n>ProductionRoutingGroup}';
    ProductionRouting      @title: '{i18n>ProductionRouting}';
    Plant                  @title: '{i18n>Plant}';
    BillOfOperationsDesc   @title: '{i18n>ProductionRoutingDescription}'
}

annotate schema.ProductionRoutingSequences with {
    ProductionRoutingGroup    @title: '{i18n>ProductionRoutingGroup}';
    ProductionRouting         @title: '{i18n>ProductionRouting}';
    ProductionRoutingSequence @title: '{i18n>ProductionRoutingSequence}';
    SequenceText              @title: '{i18n>ProductionRoutingSequenceDescription}'
}

annotate schema.CutListHeaders with {
    identifier          @title: '{i18n>Identifier}';
    description         @title: '{i18n>Description}';
    material            @title: '{i18n>Material}';
    validFrom           @cds.valid.from  @title: '{i18n>ValidFrom}';
    validTo             @cds.valid.To    @title: '{i18n>ValidTo}';
    plantGroup          @title: '{i18n>PlantGroup}';
    calculationQuantity @title: '{i18n>CalculationQuantity}';
}

annotate schema.CutListPositions with {
    cutListHeader  @title: '{i18n>CutListHeader}';
    parent         @title: '{i18n>Parent}';
    cutHeader      @title: '{i18n>CutHeader}';
    cutPosition    @title: '{i18n>CutPosition}';
    percentage     @title: '{i18n>Percentage}';
    type           @title: '{i18n>Type}';
    editPercentage @title: '{i18n>EditPercentage}';
}

annotate schema.BOMHeaderMaterialAssignments with {
    disassemblyProcess @title: '{i18n>DisassemblyProcess}';
    material           @title: '{i18n>BomMaterial}';
    bomHeader          @title: '{i18n>BomHeader}';
    plant              @title: '{i18n>Plant}';
};

annotate schema.MRPCalculationHeaders with {
    description             @title: '{i18n>Description}';
    cutListHeader           @title: '{i18n>CutListHeader}';
    mrpCalculationPositions @title: '{i18n>MRPCalculationPositions}';
    startDate               @title: '{i18n>StartDate}';
    endDate                 @title: '{i18n>EndDate}';
};

annotate schema.MRPCalculationPositions with {
    cutListPosition               @title: '{i18n>CutListPosition}';
    mrpCalculationHeader          @title: '{i18n>MRPCalculationHeader}';
    overrideCutQuantity           @title: '{i18n>OverrideQuantity}';
    overrideCutMarkedAsDeleted    @title: '{i18n>OverrideCutMarkedAsDeleted}';
    overrideCutPositionPercentage @title: '{i18n>OverrideCutPositionPercentage}';
};


annotate schema.DisassemblyOrders {
    description                @title: '{i18n>Description}';
    cutListHeader              @title: '{i18n>CutList}';
    disassemblyProcess         @title: '{i18n>DisassemblyProcess}';
    plant                      @title: '{i18n>Plant}';
    _productionOrder_startDate @title: '{i18n>StartDate}';
    _productionOrder_endDate   @title: '{i18n>EndDate}';
    _productionOrder_quantity  @title: '{i18n>OrderQuantity}';
    _productionOrder_orderType @title: '{i18n>OrderType}'
}
