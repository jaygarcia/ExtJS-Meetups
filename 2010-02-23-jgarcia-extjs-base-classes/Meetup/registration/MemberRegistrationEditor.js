Ext.ns('Meetup.registration');

Meetup.registration.MemberRegistrationEditor = Ext.extend(Ext.Container, {
    border        : false,
    initComponent : function() {
        this.plugins = this.plugins || [];
//        this.plugins.push(this.buildHeaderToolbar());

        Ext.apply(this, {
            layout : {
                type  : 'hbox',
                align : 'stretch'
            },
            items : [
                this.buildGrid(),
                this.buildForm()
            ]
        });

        Meetup.registration.MemberRegistrationEditor.superclass.initComponent.call(this);
    },
    buildGrid : function() {
        var store = {
            xtype    : 'jsonstore', 
            autoLoad : true,
            root     : 'rows',
            url      : 'dummyData/memberdata.json.js',
            fields   : ['firstName','lastName','location','dateJoined','lastVisited','rsvped','photoUrl','memberUrl']
        };

        return {
            xtype            : 'grid',
            columns          : this.buildColumns(),
            flex             : 1,
            itemId           : 'grid',
            store            : store,
            autoExpandColumn : 'memberurl',
            listeners        : {
                scope    : this,
                rowclick : this.onRowClick
            }

        };
    },
    buildColumns : function() {
        return[
            {
                header    : 'Name',
                dataIndex : 'firstName',
                width     : 120,
                renderer  : function(val, column, record) {
                    return val + ' ' + record.get('lastName');
                }
            },
            {
                header    : 'Location',
                dataIndex : 'location',
                width     : 75
            },
            {
                header    : 'Date Joined',
                dataIndex : 'dateJoined',
                width     : 75
            },
            {
                header    : 'Last Visited',
                dataIndex : 'lastVisited',
                width     : 75
            },
            {
                header    : 'RSVP',
                dataIndex : 'rsvped',
                width     : 40,
                renderer  : function(v) {
                    return (v > 0) ? 'yes' : null;
                }
            },
            {
                header    : 'Member Url',
                dataIndex : 'memberUrl',
                id        : 'memberurl'
            }
        ];
    
    },
    buildForm : function() {
        return  {
            xtype      : 'memberRegForm',
            width      : 230,
            itemId     : 'form',
            bodyStyle  : 'padding: 10px;',
            listeners  : {
                scope  : this,
                save   : this.onFormSave
            }
        };
    },
    buildHeaderToolbar : function() {
        return {
            ptype : 'header_toolbar',
            items : [
                {
                    xtype : 'button',
                    text : 'test'
                },
                {
                    text : 'test2'
                }
            ]
        };
    },
    onRowClick : function(grid,rowIndex) {
        var record = grid.getStore().getAt(rowIndex);
        this.getFormPanel().getForm().loadRecord(record)

    },
    onFormSave : function(form, values) {
        var record = this.getGrid().getSelectionModel().getSelected();

        for (var field in values) {
            record.set(field, values[field]);
        }
        record.commit();

    },
    getFormPanel : function() {
        return this.getComponent('form');
    },
    getGrid : function() {
        return this.getComponent('grid')
    }


});

Ext.reg('memberRegEditor', Meetup.registration.MemberRegistrationEditor);


