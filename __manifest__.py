{
    'name': "Menu optional fields sorting",
    'version': '16.1.2.0',
    'data': [],

    'inherits': ["web", "base"],
    'assets': {
        'web.assets_backend': [
            'sort_menu_optional_fields/static/src/views/**/*',
        ]
    },
    
    # Module Specific
    'application': False,
    'installable': True,
    'auto_install': False,
}
