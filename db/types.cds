namespace test.disassembly.types;

type UnsignedDecimalQuantity : Decimal(13, 3) @assert.range: [
    (0.001),
    (9999999999999.999)
];

type PushCalculationResult   : {
    cutListPosition_ID      : UUID;
    material                : String;
    calculatedQty           : Decimal(13, 5);
    disassemblyProcess_ID   : UUID;
    disassemblyProcess_name : String;
    incomingQty             : Decimal(13, 5);
    ratio                   : Decimal(13, 5);
    plant_ID                : array of String;
    positionType            : String;
    headerPercentage        : Decimal(13, 5);

};
