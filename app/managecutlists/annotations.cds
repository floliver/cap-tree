using test.disassembly.ManageCutListsAppService as service from '../../srv/ui/manage-cutlists/manageCutLists.app.service';

annotate service.CutListHeaders with @(
    UI.HeaderInfo                    : {
        Title         : {
            $Type: 'UI.DataField',
            Value: description,
        },
        TypeName      : '{i18n>CutList}',
        TypeNamePlural: '{i18n>CutLists}',
    },
    UI.FieldGroup #GeneratedGroup    : {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: identifier,
            },
            {
                $Type: 'UI.DataField',
                Label: '{i18n>ValidFrom}',
                Value: validFrom,
            },
            {
                $Type: 'UI.DataField',
                Label: '{i18n>ValidTo}',
                Value: validTo,
            },

            {
                $Type: 'UI.DataField',
                Value: description,
            },
            {
                $Type: 'UI.DataField',
                Value: material_Product,
                Label: '{i18n>Material}',
            },
            {
                $Type: 'UI.DataField',
                Value: plantGroup_ID,
            },
            {
                $Type: 'UI.DataField',
                Value: calculationQuantity,
            },
            {
                $Type : 'UI.DataFieldForAction',
                Label : '{i18n>BOMCreation}',
                Action: 'test.disassembly.ManageCutListsAppService.createBOM'
            },
        ],
    },
    UI.Facets                        : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : '{i18n>GeneralInfo}',
            Target: '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>Translations}',
            ID    : 'Translationsdescription',
            Target: 'texts/@UI.LineItem#Translationsdescription',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>CutListPositionsView}',
            ID    : 'treeview',
            Target: 'cutListPositions/@UI.LineItem#TreeView',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>CutListPositions}',
            ID    : 'CutListPositions',
            Target: 'cutListPositions/@UI.LineItem#CutListPositions',
        },
   
        {
            $Type : 'UI.ReferenceFacet',
            Label : '{i18n>AdministrativeInfo}',
            ID    : 'AdministrativeInfo',
            Target: '@UI.FieldGroup#AdministrativeInfo',
        },
    ],
    UI.LineItem                      : [
        {
            $Type: 'UI.DataField',
            Value: identifier,
        },
        {
            $Type: 'UI.DataField',
            Label: '{i18n>ValidFrom}',
            Value: validFrom,
        },
        {
            $Type: 'UI.DataField',
            Label: '{i18n>ValidTo}',
            Value: validTo,
        },
        {
            $Type: 'UI.DataField',
            Value: description,
        },
        {
            $Type: 'UI.DataField',
            Value: plantGroup_ID,
        },
    ],
    UI.FieldGroup #AdministrativeInfo: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Value: createdBy,
            },
            {
                $Type: 'UI.DataField',
                Value: createdAt,
            },
            {
                $Type: 'UI.DataField',
                Value: modifiedBy,
            },
            {
                $Type: 'UI.DataField',
                Value: modifiedAt,
            },
        ],
    },
    UI.SelectionFields               : [
        identifier,
        validFrom,
        validTo,
        plantGroup_ID,
    ],
);

annotate service.CutListHeaders with @fiori.draft.enabled;

annotate service.CutListHeaders.texts with @(UI.LineItem #Translationsdescription: [
    {
        $Type: 'UI.DataField',
        Value: locale,
        Label: '{i18n>Language}',
    },
    {
        $Type: 'UI.DataField',
        Value: description,
        Label: '{i18n>Description}',
    },
]);

annotate service.CutListHeaders.texts with {
    ID       @UI.Hidden;
    ID_texts @UI.Hidden;
}

annotate service.CutListHeaders with {
    material
               @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Products',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: material_Product,
                    ValueListProperty: 'Product',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: '_ProductDescription/ProductDescription',
                },
            ],
        },
        Common.ValueListWithFixedValues: false,
        Common.Text                    : {
            $value                : material._ProductDescription.ProductDescription,
            ![@UI.TextArrangement]: #TextFirst
        },
    );
    plantGroup @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'PlantGroups',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: plantGroup_ID,
                    ValueListProperty: 'ID',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'name',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'description',
                }
            ],
        },
        Common.Text                    : {
            $value                : plantGroup.name,
            ![@UI.TextArrangement]: #TextOnly
        },
        Common.ValueListWithFixedValues: false
    );
}

annotate service.CutListHeaders.texts with {
    locale @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Languages',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: locale,
                    ValueListProperty: 'code',
                },
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: locale,
                    ValueListProperty: 'name',
                },

            ],
            Label         : '{i18n>Language}',
        },
        Common.ValueListWithFixedValues: true
    )
};

annotate service.PlantGroups with {
    ID  @(UI.Hidden: true)  @Common.Text: {
        $value                : name,
        ![@UI.TextArrangement]: #TextOnly
    };
}

annotate service.CutListPositions with @(UI.LineItem #CutListPositions: [
    {
        $Type: 'UI.DataField',
        Value: ID,
        Label: '{i18n>Id}',
    },
    {
        $Type: 'UI.DataField',
        Value: parent_ID,
        Label: '{i18n>Parentid}',
    },
    {
        $Type: 'UI.DataField',
        Value: cutHeader_ID,
        Label: '{i18n>Cutheaderid}',
    },
    {
        $Type: 'UI.DataField',
        Value: cutPosition_ID,
        Label: '{i18n>Cutpositionid}',
    },
    {
        $Type                  : 'UI.DataField',
        Value                  : percentage,
        Label                  : '{i18n>Percentage}',
        ![@Common.FieldControl]: {$edmJson: {$If: [
            {$Eq: [
                {$Path: 'editPercentage'},
                false
            ]},
            1,
            3
        ]}},
    },
], );

annotate service.CutListPositions with @UI: {
    LineItem #TreeView: [
        {
            $Type: 'UI.DataField',
            Value: cutHeader.description,
            Label: '{i18n>CutHeaderDescription}',
        },
        {
            $Type: 'UI.DataField',
            Value: cutHeader.cutIdentifier,
            Label: '{i18n>CutHeaderIdentifier}',
        },
        // {
        //     $Type: 'UI.DataField',
        //     Value: cutPosition.material._ProductDescription.ProductDescription,
        //     Label: '{i18n>CutPositionMaterialDescription}',
        // },
        // {
        //     $Type: 'UI.DataField',
        //     Value: cutPosition.material_Product,
        //     Label: '{i18n>CutPositionMaterialID}',
        // },
        {
            $Type: 'UI.DataField',
            Value: cutHeader_ID,
            Label: '{i18n>Cutheaderid}',
        },
        {
            $Type: 'UI.DataField',
            Value: cutPosition_ID,
            Label: '{i18n>CutPositionID}',
        },
    ],
    HeaderInfo        : {
        $Type         : 'UI.HeaderInfoType',
        TypeName      : '{i18n>ContentsLevel}',
        TypeNamePlural: '{i18n>ContentsLevels}',
        Title         : {
            $Type: 'UI.DataField',
            Value: ID,
        }
    },
    FieldGroup        : {
        $Type: 'UI.FieldGroupType',
        Data : [{
            $Type: 'UI.DataField',
            Value: parent_ID,
            Label: 'parent id'
        }],
    },
    Facets            : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.FieldGroup',
        Label : 'ID',
    }],
};

annotate service.CutListPositions with {
    cutHeader @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'CutHeaderVersionsVH',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: cutHeader_ID,
                    ValueListProperty: 'ID',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'cutIdentifier',
                },
                // {
                //     $Type            : 'Common.ValueListParameterDisplayOnly',
                //     ValueListProperty: 'material_Product',
                // },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'version',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'plantGroup_ID',
                },
            ],
        },
        Common.ValueListWithFixedValues: false,
        Common.FieldControl            : {$edmJson: {$If: [
            {$Eq: [
                {$Path: 'type'},
                'P'
            ]},
            1,
            3
        ]}},
    )
};

annotate service.CutPositions with {
    ID @Common.FieldControl: #ReadOnly;
    material @(
        Common.ValueListWithFixedValues: false,
        Common.Text                    : {
            $value                : material._ProductDescription.ProductDescription,
            ![@UI.TextArrangement]: #TextFirst
        },
    );
};

annotate service.CutListPositions with {
    cutPosition @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'CutPositions',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: cutPosition_ID,
                    ValueListProperty: 'ID',
                },
                // {
                //     $Type            : 'Common.ValueListParameterDisplayOnly',
                //     ValueListProperty: 'material_Product',
                // }
            ],
        },
        Common.ValueListWithFixedValues: false,
        // Common.Text                    : {
        //     $value                : cutPosition.material._ProductDescription.ProductDescription,
        //     ![@UI.TextArrangement]: #TextOnly
        // },
        Common.FieldControl            : #ReadOnly,
    );
};

annotate service.CutListHeaders @(Common.SideEffects #ReactonItemCreationOrDeletion: {
    SourceEntities: [cutListPositions],
    TargetEntities: [cutListPositions]
});

// annotate service.CutPositions with {
//     ID @Common.Text: material_Product
// };

annotate service.CutHeaders with {
    ID @Common.Text: cutIdentifier
};

annotate service.CutListPositions with {
    parent @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'CutListPositions',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: parent_ID,
                    ValueListProperty: 'ID',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'parent_ID',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'cutPosition_ID',
                },
                {
                    $Type            : 'Common.ValueListParameterConstant',
                    ValueListProperty: 'type',
                    Constant         : 'P',
                },
            ],
        },
        Common.ValueListWithFixedValues: false,
    );
};

annotate service.CutListPositions with {
    ID @Common.FieldControl: #ReadOnly
};

annotate service.BOMHeaderMaterialAssignments with @(UI.LineItem #BOMHeaderMaterialAssignments: [
    {
        $Type: 'UI.DataField',
        Value: disassemblyProcess_ID,
    },
    {
        $Type: 'UI.DataField',
        Value: material_Product,
    },
    {
        $Type: 'UI.DataField',
        Value: plant_Plant,
    },
    {
        $Type                  : 'UI.DataField',
        Value                  : bomHeader_BillOfMaterial,
        ![@Common.FieldControl]: #ReadOnly,
    },
], );

annotate service.BOMHeaderMaterialAssignments with {
    material           @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'Products',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: material_Product,
                    ValueListProperty: 'Product',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: '_ProductDescription.ProductDescription',
                },
            ],
        },
        Common.ValueListWithFixedValues: false,
        Common.Text                    : {
            $value                : material._ProductDescription.ProductDescription,
            ![@UI.TextArrangement]: #TextFirst
        },
    );
    plant              @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'PlantGroupPlants',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: plant_Plant,
                    ValueListProperty: 'plant_Plant',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'plant/PlantName',
                },
                {
                    $Type            : 'Common.ValueListParameterIn',
                    LocalDataProperty: cutListHeader.plantGroup_ID,
                    ValueListProperty: 'plantGroup_ID'
                },
            ],
        },
        Common.ValueListWithFixedValues: false,
        Common.Text                    : {
            $value                : plant.Plant,
            ![@UI.TextArrangement]: #TextOnly
        },
    );
    disassemblyProcess @(
        Common.ValueList               : {
            $Type         : 'Common.ValueListType',
            CollectionPath: 'DisassemblyProcessesOfCutListPositions',
            Parameters    : [
                {
                    $Type            : 'Common.ValueListParameterIn',
                    LocalDataProperty: cutListHeader_ID,
                    ValueListProperty: 'cutListHeaderID',
                },
                {
                    $Type            : 'Common.ValueListParameterInOut',
                    LocalDataProperty: disassemblyProcess_ID,
                    ValueListProperty: 'dissasemblyProcessID',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'dissasemblyProcessName',
                },
                {
                    $Type            : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty: 'dissasemblyProcessDescription',
                },
            ],
        },
        Common.ValueListWithFixedValues: false,
        Common.Text                    : {
            $value                : disassemblyProcess.name,
            ![@UI.TextArrangement]: #TextOnly
        },
    );
}

annotate service.DisassemblyProcessesOfCutListPositions with {
    dissasemblyProcessID @UI.Hidden;
    cutListHeaderID      @UI.Hidden;
}

annotate service.BOMHeaderMaterialAssignments with {
    ID            @UI.Hidden;
    cutListHeader @UI.Hidden;
}

