Ext.ns('Meetup.form');

/**
 * @class Meetup.form.RegistrationFormBaseCls
 * @Extends Ext.form.FormPanel
 * This is an abstract or base class to construct common form panels
 */
Meetup.form.RegistrationFormBaseCls = Ext.extend(Ext.form.FormPanel, {
    frame         : true,
    layout        : 'form',
    buttonAlign   : 'left',
    labelWidth    : 50,
   
    initComponent : function() {

        Ext.apply(this, {
            items   : this.buildBaseItems().concat(this.items || []),      
            buttons : this.buildButtons()
        });
        Meetup.form.RegistrationFormBaseCls.superclass.initComponent.call(this);
    },
    
    buildBaseItems : function() {
        return [
            {
                xtype      : 'textfield',
                name       : 'first',
                anchor     : '-10',
                fieldLabel : 'First Name'
            },
            {
                xtype      : 'textfield',
                name       : 'last',
                anchor     : '-10',
                fieldLabel : 'Last Name'
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
            }
        ]
    },
    onSaveBtn : function() {

    },
    onResetBtn : function() {
        this.getForm().reset();
    }
});