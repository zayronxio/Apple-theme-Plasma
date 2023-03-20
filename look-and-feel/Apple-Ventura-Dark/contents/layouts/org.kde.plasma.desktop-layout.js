var allDesktops = desktops();
    print (allDesktops);
    for (i=0;i<allDesktops.length;i++) {{
        d = allDesktops[i];
        d.wallpaperPlugin = "org.kde.image";
        d.currentConfigGroup = Array("Wallpaper",
                                     "org.kde.image",
                                     "General");
        d.writeConfig("Image", "home.zaron/.local/share/wallpapers/Ventura/contents/images/6016x6016.jpg")
    }}
var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "bottom",
                    "ToolBoxButtonX": "739",
                    "ToolBoxButtonY": "983",
                    "sortMode": "-1"
                },

            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kpple.kppleMenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "noWindowText": "Desktop"
                        }
                    },
                    "plugin": "org.kde.activeApplication"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "37"
                        },
                        "/General": {
                    "fontSize": "13",
                    "iconHeight": "12",
                    "iconWidth": "23",
                    "padding": "4",
                    "showPercentage": "false"
                       }
                    },
                    "plugin": "org.kde.plasma.bigSur-inlineBattery"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.notifications"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "37"
                        }
                    },
                    "plugin": "com.github.prayag2.controlcentre"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "37"
                                             }
                    },
                    "/Configuration/Appearance": {
                            "fontFamily": "Cantarell",
                            "showDate": "false",
                            "use24hFormat": "0"
                        },
                    "/Configuration/Configuration/Appearance": {
                            "fontFamily": "Cantarell",
                            "showDate": "false",
                            "spinboxHorizontalPercentage": "50",
                            "use24hFormat": "2"
                        },
                    "plugin": "org.kde.milou"
                },
                 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Appearance": {
                            "useUserLayout": "true",
                            "useCustomFont": "true",
                            "customFont": "bold"
                        },
                        "/Configuration/Appearance": {
                            "layout": '<html><body><center><span style="font-weight:bold;">{DD:u} {d} {MM:u} {h}:{ii}</span></center></body></html>'
                        }

                    },
                    "plugin": "com.marcinorlowski.htmlclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.4,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "0",
            "applets": [
 {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/General": {
                    "customButtonImage": "launcher",
                    "useCustomButtonImage": "true"
                       }

                    },
                    "plugin": "P-Connor.PlasmaDrawer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1",
                            "launchers": ""
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },

                        "/General": {
                            "indicateAudioStreams": "false",
                            "launchers": "applications:org.kde.dolphin.desktop,applications:firefox.desktop,applications:org.kde.discover.desktop,applications:org.kde.gwenview.desktop,applications:org.kde.konsole.desktop,applications:systemsettings.desktop",
                            "maxStripes": 1
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                     "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.latte.separator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.trash"
                }

            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "74",
                    "DialogWidth": "1920"
                }
            },
            "height": 3.6,
            "hiding": "windowscover",
            "location": "bottom",
            "floating": 0,
            "panelVisibility": 2,
            "maximumLength": 90,
            "minimumLength": 12,
            "offset": 0,
            "alignment":"center"
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);

execFile("dolphin")
