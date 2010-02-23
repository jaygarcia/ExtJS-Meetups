Ext.ns('Meetup.form');

/**
 * @class Meetup.form.RegistrationFormBaseCls
 * @Extends Ext.form.FormPanel
 * This is an abstract or base class to construct common form panels
 */
Meetup.form.RegistrationFormBaseCls = Ext.extend(Ext.form.FormPanel, {
    buttonAlign   : 'left',
    labelWidth    : 50,
    initComponent : function() {

        Ext.apply(this, {
            defaultType : 'textfield',
            items       : this.buildBaseItems().concat(this.items || []),
            buttons     : this.buildButtons()
        });

        Meetup.form.RegistrationFormBaseCls.superclass.initComponent.call(this);
        this.addEvents({
            save   : true
        });
    },
    
    buildBaseItems : function() {
        return [
            {
                name       : 'firstName',
                anchor     : '-10',
                fieldLabel : 'First Name'
            },
            {
                name       : 'lastName',
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
        this.fireEvent('save', this, this.getForm().getValues());
    },
    onResetBtn : function() {
        this.getForm().reset();
    }
});