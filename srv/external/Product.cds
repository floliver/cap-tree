@cds.external : true
service Product {
    entity Product {
        key Product : String(18);
    }
    
    entity ProductDescription {
        key Product : String(18);
        key Language : String(2);
        ProductDescription : String(40);
    }
    
    entity ProductPlant {
        key Product : String(18);
        key Plant : String(4);
    }
    
    entity ProductUnitOfMeasure {
        key Product : String(18);
        key AlternativeUnit : String(3);
    }
}
