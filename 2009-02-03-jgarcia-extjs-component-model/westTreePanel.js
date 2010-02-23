Ext.ns("TDGi");
TDGi.westTreePanel = Ext.extend(Ext.tree.TreePanel, {
	id : 'westTree',
	initComponent : function() {
		Ext.apply(this, {
			title       : 'Agenda items',
			region      : 'west',
			width       : 200,
			collapsible : true,
			root        : new Ext.tree.AsyncTreeNode({
				text     : 'Meetup Agenda',
				children : treeData,
				docUrl   : 'agenda',
				iconCls  : getIcon('date'),
			})
		});
		
		this.on({
			'render' : {
				scope  : this,
				buffer : 500,
				fn     : function(o) {
					o.root.expand(true);	
				}
			},
			click : {
				scope  : this,
				fn     : function(n) {
					this.disable();
					var centerShim = Ext.getCmp('centerShim');
					centerShim.setTitle(n.attributes.text);
					centerShim.setIconClass(n.attributes.iconCls);
					centerShim.showDoc(n.attributes.docUrl);
				}
				
			}
		});

		
		TDGi.westTreePanel.superclass.initComponent.apply(this);
	}

});