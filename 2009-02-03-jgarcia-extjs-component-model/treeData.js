var treeData = [
	{
		text     : 'What is Ext JS',
		docUrl   : 'welcome',
		iconCls  : getIcon('page_white_text'),
		leaf     : true
	},
	{
		text     : 'Ext.onReady',
		docUrl   : 'onready/intro',
		iconCls  : getIcon('clock_error'),
		children : [
			{
				text    : 'Why do we need it',
				leaf    : true,
				docUrl  : 'onready/why_do_we_need_it',
			    iconCls : getIcon('clock_stop')
			},
			{
				text    : 'Usage',
				leaf    : true,
				docUrl  : 'onready/usage',
			    iconCls : getIcon('forward_green')
			}
					
		]
	},
	{
		text     : 'Components',
		docUrl   : 'components/intro',
		iconCls  : getIcon('brick'),
		children : [
			{
				text     : 'Life Cycle',
				docUrl   : 'components/lifecycle',
			    iconCls  : getIcon('arrow_rotate_clockwise'),
				children : [
					{
						text    : 'Initialization',
						leaf    : true,
						docUrl  : 'components/lifecycle.init',
						iconCls : getIcon('flag_green')
					},
					{
						text    : 'Render',
						leaf    : true,
						docUrl  : 'components/lifecycle.render',
						iconCls : getIcon('flag_red')
					},
					{
						text    : 'Destruction',
						leaf    : true,
						docUrl  : 'components/lifecycle.destruct',
						iconCls : getIcon('flag_black')
					}
				]
			},
			{
				text     : 'What are xtypes',
				docUrl   : 'xtypes/intro',
			    iconCls  : getIcon('brick_magnify'),
				children : [
					{
						text    : 'Usage',
						leaf    : true,
						docUrl  : 'xtypes/usage',
						iconCls : getIcon('forward_green')
					}
				]
			},	
			{
				text     : 'Component Manager',
				docUrl   : 'componentmgr/intro',
			    iconCls  : getIcon('help'),
				children : [
					{
						text    : 'Usage',
						leaf    : true,
						docUrl  : 'componentmgr/usage',
						iconCls : getIcon('forward_green')
					}
				]
			}		
		]
	},
	{
		text     : 'Summary',
		docUrl   : 'summary',
		iconCls  : getIcon('flag_checked'),
		leaf     : true
	}
	
]
