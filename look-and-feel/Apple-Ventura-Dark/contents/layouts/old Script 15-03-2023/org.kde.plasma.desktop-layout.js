var plasma = getApiVersion(1);
 /*apps for dock*/
  /*file manager*/
if (applicationExists("org.kde.dolphin.desktop"))
        {
       var apps01 = "applications:org.kde.dolphin.desktop";
        }
     else{
       var apps01 = "";
         }
          /*web browser*/
       var browser = `applications:${defaultApplication("browser")}`
       /*discover*/
if (applicationExists("org.kde.discover.desktop"))
        {
       var apps02 = "applications:org.kde.discover.desktop";
        }
     else{
       var apps02 = "";
         }
        /*gwenview*/
if (applicationExists("org.kde.gwenview.desktop"))
        {
       var apps03 = `${apps02},applications:org.kde.gwenview.desktop`;
        }
     else{
       var apps03 = `${apps02}`;
         }
          /*konsole*/
if (applicationExists("org.kde.konsole.desktop"))
        {
       var apps04 = `${apps03},applications:org.kde.konsole.desktop`;
        }
     else{
       var apps04 = `${apps03}`;
         }
        /*settings*/
if (applicationExists("systemsettings.desktop"))
        {
       var apps05 = `${apps04},applications:systemsettings.desktop`;
        }
     else{
       var apps05 = `${apps04}`;
         }
        /*text-editor*/
if (applicationExists("org.kde.kate.desktop"))
        {
       var apps06 = `${apps05},applications:org.kde.kate.desktop`;
        }
     else{
      if (applicationExists("org.kde.kwrite.desktop"))
        {
       var apps06 = `${apps05},applications:org.kde.kwrite.desktop`;
        }
     else{
       var apps06 = `${apps05}`;
         }
         }
        /*okular*/
if (applicationExists("okularApplication_comicbook.desktop"))
        {
       var apps07 = `${apps06},applications:okularApplication_comicbook.desktop`;
        }
     else{
       var apps07 = `${apps06}`;
         }

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
                    "plugin": "org.kde.plasma.marginsseparator"
                },
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
                        }
                    },
                    "plugin": "org.kde.milou"
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
                        "/Appearance": {
                            "useUserLayout": "true"
                        },
                        "/Configuration/Appearance": {
                            "layout": '<html><body><center><span style="font-weight:500;">{DD:u} {d} {MM:u} {h}:{ii}</span></center></body></html>'
                        }

                    },
                    "plugin": "com.marcinorlowski.htmlclock"
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
                            "launchers": `${apps01},${browser},${apps07}`,
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
                        },
                        "/General": {
                            "url": `${userDataPath("downloads")}`,
                        }
                    },
                    "plugin": "org.kde.plasma.folder"
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
            "height": 3.7,
            "hiding": "windowscover",
            "location": "bottom",
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
