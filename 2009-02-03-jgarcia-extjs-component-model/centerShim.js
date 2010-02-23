Ext.ns("TDGi");

TDGi.centerShim = Ext.extend(Ext.Panel, {
	docRoot : 'docs',	
	id      : 'centerShim',
	border  : true,
	initComponent : function() {
		Ext.apply(this, {
			region    : 'center',
			bodyStyle : 'background-color: #DFE8F6',
			layout    : 'fit',
			title     : '&nbsp',
			items     : [
				{
					html      : 'welcome',
					border    : false,
					bodyStyle : 'background-color: #DFE8F6',

				}
			]
		});
		
		TDGi.centerShim.superclass.initComponent.apply(this);
	},
	
	showDoc : function(docUrl) {
		var existingPanel = this.items.items[0];
		if (existingPanel) {
			existingPanel.el.switchOff({
				scope    : this,			   
				callback : function() {
					this.remove(existingPanel);
					this.doShowDoc(docUrl);
				}
			});
		}
		else {
			this.doShowDoc(	docUrl);
		}
		
	},
	doShowDoc : function(docUrl) {
		var fullUrl = this.docRoot + '/' + docUrl + '.html';
		
		var newPanel = new Ext.Panel({
			id         : id,
			border     : false,
			autoScroll : true,
			bodyStyle  : 'padding: 5px',
			listeners  : {
				render : function(p) {
					p.body.hide();
					p.body.load({
						url               : fullUrl,
						scripts           : true,
						showLoadIndicator : false,
						nocache           : true,
						callback          : function(el) {
							el.slideIn('b', {
								duration:1.5, 
								easing:'bounceOut', 
								callback : function()  {
									Ext.getCmp('westTree').enable();

								}
							});
															
						}
					});
					
				}
				
			}
		});
		
		this.add(newPanel);
		this.doLayout();
		
	}
			 
	
								
});