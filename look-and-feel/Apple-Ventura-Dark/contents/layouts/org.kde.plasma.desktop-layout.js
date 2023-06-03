/*******Panel Top*********/
paneltop = new Panel
paneltop.hiding = "none"
paneltop.location = "top"
paneltop.height = 24
paneltop.offset = 0
const width = screenGeometry(paneltop.screen).width
function separators(a){
if (width <= 1280){
    c = 1
} else { if (width <= 1440){
    c = 2
} else
{
    c = 3
}
}
    for (b = 0; b < c; b++)
        a.addWidget("org.kde.plasma.marginsseparator")
}
function separatorsTray(){
if (width <= 1280){
    c = 1
} else { if (width <= 1440){
    c = 3
} else
{
    c = 6
}
}
return c
}
/*kapple*/
separators(paneltop)
paneltop.addWidget("org.kpple.kppleMenu")
paneltop_napp = paneltop.addWidget("org.kde.activeApplication")
paneltop_napp.currentConfigGroup = ["Appearance"]
paneltop_napp.writeConfig("noWindowText", "Desktop")
paneltop.addWidget("org.kde.plasma.appmenu")
paneltop.addWidget("org.kde.plasma.panelspacer")
Battery = paneltop.addWidget("org.kde.plasma.bigSur-inlineBattery")
Battery.writeConfig("fontSize", "13")
Battery.writeConfig("iconHeight", "12")
Battery.writeConfig("iconWidth", "23")
Battery.writeConfig("padding", "4")
Battery.writeConfig("showPercentage", "false")
separators(paneltop)
/*added systemtray*/
if (applicationExists("kcm_kdeconnect.desktop")){
var systraprev = paneltop.addWidget("org.kde.plasma.systemtray")
var SystrayContainmentId = systraprev.readConfig("SystrayContainmentId")
const systray = desktopById(SystrayContainmentId)
systray.currentConfigGroup = ["General"]
let ListTrays = systray.readConfig("extraItems")
let ListTrays2 = ListTrays.replace(",org.kde.plasma.mediacontroller", "")
let ListTrays3 = ListTrays2.replace(",org.kde.plasma.battery", "")
systray.writeConfig("extraItems", ListTrays3)
systray.writeConfig("knownItems", ListTrays3)
systray.writeConfig("iconSpacing", separatorsTray())
/*///*/
separators(paneltop)
paneltop.addWidget("org.kde.milou")
separators(paneltop)
paneltop.addWidget("com.github.prayag2.controlcentre")
} else
{
paneltop.addWidget("org.kde.plasma.networkmanagement")
separators(paneltop)
paneltop.addWidget("org.kde.plasma.volume")
separators(paneltop)
paneltop.addWidget("org.kde.plasma.notifications")
separators(paneltop)
var systraprev = paneltop.addWidget("org.kde.plasma.systemtray")
var SystrayContainmentId = systraprev.readConfig("SystrayContainmentId")
const systray = desktopById(SystrayContainmentId)
systray.currentConfigGroup = ["General"]
systray.writeConfig("iconSpacing", separatorsTray())
separators(paneltop)
paneltop.addWidget("org.kde.milou")
}
separators(paneltop)
clock = paneltop.addWidget("com.marcinorlowski.htmlclock")
clock.currentConfigGroup = ["Appearance"];
clock.writeConfig("useUserLayout", "true")
clock.currentConfigGroup = ["Configuration/Appearance"];
clock.writeConfig("layout", '<html><body><center><span style="font-weight:500;">{DD:u} {d} {MM:u} {h}:{ii}</span></center></body></html>');
separators(paneltop)
            /****************************/
panelbottom = new Panel
 panelbottom.location = "bottom"
  panelbottom.height = 66
   panelbottom.offset = 0
    panelbottom.alignment = "center"
     panelbottom.panelVisibility = "2"
      if (width === 1920){
      panelbottom.maximumLength = 1728
       } else
     {
       if (width === 1440){
      panelbottom.maximumLength = 1296
       } else
     {
       if (width === 1280){
      panelbottom.maximumLength = 1152
       } else
     {
       panelbottom.maximumLength = Number((width)*(.90))
    }
    }
    }
    panelbottom.minimumLength = 100
        panelbottom.hiding = "windowscover"
         panelbottom.addWidget("org.kde.plasma.marginsseparator")
          panelbottom_start = panelbottom.addWidget("P-Connor.PlasmaDrawer")
           panelbottom_start.currentConfigGroup = ["General"]
            panelbottom_start.writeConfig("customButtonImage", "launcher")
             panelbottom_start.writeConfig("useCustomButtonImage", "true")
panelbottom.addWidget("org.kde.plasma.icontasks")
panelbottom.addWidget("org.kde.plasma.calculator")
    /*Trash*/
    panelbottom.addWidget("org.kde.latte.separator")
          var folderDONW = `${userDataPath("downloads")}`
    if (applicationExists(`${folderDONW}`))
       {
        panelbottom_fld = panelbottom.addWidget("org.kde.plasma.folder")
        panelbottom_fld.currentConfigGroup = ["General"];
        panelbottom_fld.writeConfig("url", `${folderDONW}`)
       }
       else
        {
        panelbottom.addWidget("org.kde.plasma.folder")
        }
    panelbottom.addWidget("org.kde.plasma.trash")
     /*separator*/
    panelbottom.addWidget("org.kde.plasma.marginsseparator")
     /*separator /*/
     /******************************/

/*Cambiando configuracion Dolphin*/
const IconsStatic_dolphin = ConfigFile('dolphinrc')
IconsStatic_dolphin.group = 'KFileDialog Settings'
IconsStatic_dolphin.writeEntry('Places Icons Static Size', 16)
const PlacesPanel = ConfigFile('dolphinrc')
PlacesPanel.group = 'PlacesPanel'
PlacesPanel.writeEntry('IconSize', 16)
/******************************/
/******************************/

let IDPanel = "Panel"+" "+panelbottom.id
/*cambiando config*/
const config = ConfigFile('plasmashellrc')
config.group = 'PlasmaViews'
const config2 = ConfigFile(config, IDPanel)
config2.writeEntry('floating', 1)

/* accent color config*/
ColorAccetFile = ConfigFile("kdeglobals")
ColorAccetFile.group = "General"
ColorAccetFile.writeEntry("accentColorFromWallpaper", "false")
ColorAccetFile.deleteEntry("AccentColor")
ColorAccetFile.deleteEntry("LastUsedCustomAccentColor")
plasma.loadSerializedLayout(layout);
