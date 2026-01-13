@cds.external : true
service ProductionRouting {
    entity ProductionRoutingHeader {
        key ProductionRoutingGroup : String(8);
        key ProductionRouting : String(2);
        key ProductionRoutingInternalVers : String(2);
        Plant : String(4);
        BillOfOperationsDesc : String(40);
    }
    
    entity ProductionRoutingSequence {
        key ProductionRoutingGroup : String(8);
        key ProductionRouting : String(2);
        key ProductionRoutingSequence : String(6);
        key ProductionRoutingSqncIntVers : String(2);
        SequenceText : String(40);
    }
}
