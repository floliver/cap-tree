@cds.external : true
service API_PRODUCTION_ORDER_2_SRV {
    entity A_ProductionOrder_2 {
        key ManufacturingOrder : String(12);
        ManufacturingOrderType : String(4);
        Material : String(18);
        ProductionPlant : String(4);
        TotalQuantity : Decimal(13, 3);
        MfgOrderPlannedStartDate : Date;
        MfgOrderPlannedEndDate : Date;
    }
}
