@cds.external : true
service API_BILL_OF_MATERIAL_SRV_0002 {
    @cds.external : true
    @cds.persistence.skip : true
    entity MaterialBOM {
        key BillOfMaterial : String(8);
    }
    
    @cds.external : true
    @cds.persistence.skip : true
    entity MaterialBOMItem {
        key BillOfMaterial : String(8);
        key BillOfMaterialCategory : String(1);
        key BillOfMaterialVariant : String(2);
        key BillOfMaterialVersion : String(4);
        key Material : String(18);
        key Plant : String(4);
        key EngineeringChangeDocument : String(12);
        key BillOfMaterialItemNodeNumber : String(8);
    }
}
