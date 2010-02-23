Ext.ns("Meetup.form");

Meetup.form.MemberRegistrationForm = Ext.extend(Meetup.form.RegistrationFormBaseCls, {
    labelWidth : 80,
    defaults   : {
        anchor  : '-10'    
    },
    initComponent : function() {

        this.items = [
            {
                    xtype      : 'textfield',
                    fieldLabel : 'Location',
                    name       : 'location'
            },
            {
                    xtype      : 'textfield',
                    fieldLabel : 'DateJoined',
                    name       : 'dateJoined'
            },
            {
                    xtype      : 'datefield',
                    fieldLabel : 'Last Visited',
                    name       : 'lastVisited'
            },
            {
                    xtype      : 'datefield',
                    fieldLabel : 'RSVP\'ed',
                    name       : 'rsvped'
            },
            {
                    xtype      : 'textfield',
                    fieldLabel : 'Photo URL',
                    name       : 'photoUrl'
            },
            {
                    xtype      : 'textfield',
                    fieldLabel : 'Member URL',
                    name       : 'memberUrl'
            }
        ];
        Meetup.form.MemberRegistrationForm.superclass.initComponent.call(this);
    },
    onSaveBtn : function() {

    },
    onCancelBtn : function() {

    },
    onResetBtn : function() {
            
    }


});

Ext.reg('memberRegistrationForm', Meetup.form.MemberRegistrationForm);