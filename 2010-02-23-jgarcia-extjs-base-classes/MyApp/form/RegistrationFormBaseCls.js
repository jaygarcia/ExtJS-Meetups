Ext.ns('MyApp.form');

MyApp.form.RegistrationFormBaseCls = Ext.extend(Ext.form.FormPanel, {
    frame         : true,
    layout        : 'form',
    buttonAlign   : 'left',
    labelWidth    : 50,
   
    initComponent : function() {

        Ext.apply(this, {
            items   : this.buildBaseItems().concat(this.items || []),      
            buttons : this.buildButtons()
        });
        MyApp.form.RegistrationFormBaseCls.superclass.initComponent.call(this);

    },
    
    buildBaseItems : function() {
        return [
            {
                xtype         : 'combo',
                name          : 'title',
                triggerAction : 'all',
                editable      : false,
                anchor        : '-10',
                fieldLabel    : 'Title',
                store         : ['Mr.', 'Mrs.', 'Ms.', 'Dr.']
            },
            {
                xtype      : 'textfield',
                name       : 'first',
                anchor     : '-10',
                fieldLabel : 'First'
            },
            {
                xtype      : 'textfield',
                name       : 'last',
                anchor     : '-10',
                fieldLabel : 'Last'
            },
            {
                xtype      : 'textfield',
                name       : 'middle',
                anchor     : '-10',
                fieldLabel : 'Middle'
            }
        ];
    },

    buildButtons : function() {
        return [
            {
                text    : 'Reset',
                scope   : this,
                handler : this.onResetBtn
            },
            '->',
            {
                text    : 'Save',
                scope   : this,
                handler : this.onSaveBtn
            },
            {
                text    : 'Cancel',
                scope   : this,
                handler : this.onCancelBtn
            }

        ]
    },
    onSaveBtn : function() {

    },
    onResetBtn : function() {
        this.getForm().reset();
    },
    onCancelBtn : function() {

    }




});