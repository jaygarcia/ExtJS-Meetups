Ext.ns("Meetup.form");

Meetup.form.MemberRegistrationForm = Ext.extend(Meetup.form.RegistrationFormBaseCls, {
    labelWidth : 75,
    defaults   : {
        anchor  : '-10'    
    },
    initComponent : function() {

        this.items = [
            {
                fieldLabel : 'Location',
                name       : 'location'
            },
            {
                xtype      : 'datefield',
                fieldLabel : 'DateJoined',
                name       : 'dateJoined',
                format     : 'm/d/y'
            },
            {
                xtype      : 'datefield',
                fieldLabel : 'Last Visited',
                name       : 'lastVisited',
                format     : 'm/d/y'
            },
            {
                xtype         : 'combo',
                fieldLabel    : 'RSVP\'ed',
                hiddenName    : 'rsvped',
                displayField  : 'display',
                valueField    : 'value',
                mode          : 'local',
                triggerAction : 'all',
                editable      : false,
                store         : {
                    xtype    : 'arraystore',
                    autoLoad : true,
                    fields   : ['value', 'display'],
                    data     : [['0', 'No'], ['1', 'Yes']]
                }
            },
            {
                fieldLabel : 'Member URL',
                name       : 'memberUrl'
            }
        ];
        Meetup.form.MemberRegistrationForm.superclass.initComponent.call(this);
    }
});

Ext.reg('memberRegForm', Meetup.form.MemberRegistrationForm);