/*******Panel Top*********/
paneltop = new Panel
paneltop.hiding = "none"
paneltop.location = "top"
paneltop.height = 24
paneltop.offset = 0
/*kapple*/
if ((screenGeometry(paneltop.screen).width) <= 900){
  paneltop.addWidget("org.kde.plasma.marginsseparator")
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.marginsseparator")}
  paneltop.addWidget("org.kpple.kppleMenu")
paneltop_napp = paneltop.addWidget("org.kde.activeApplication")
 paneltop_napp.currentConfigGroup = ["Appearance"]
  paneltop_napp.writeConfig("noWindowText", "Desktop")
paneltop.addWidget("org.kde.plasma.appmenu")
 paneltop.addWidget("org.kde.plasma.panelspacer")
paneltop_Battery = paneltop.addWidget("org.kde.plasma.bigSur-inlineBattery")
 paneltop_Battery.currentConfigGroup = ["General"]
  paneltop_Battery.writeConfig("fontSize", "13")
   paneltop_Battery.writeConfig("iconHeight", "12")
    paneltop_Battery.writeConfig("iconWidth", "23")
     paneltop_Battery.writeConfig("padding", "4")
      paneltop_Battery.writeConfig("showPercentage", "false")
  if ((screenGeometry(paneltop.screen).width) <= 900){
  if ((screenGeometry(paneltop.screen).width) <= 720){
  paneltop.addWidget("org.kde.plasma.networkmanagement")
  paneltop.addWidget("org.kde.plasma.volume")
  paneltop.addWidget("org.kde.plasma.notifications")
  paneltop.addWidget("com.github.prayag2.controlcentre")
  paneltop.addWidget("org.kde.milou")
} else
{
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.networkmanagement")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.volume")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.notifications")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("com.github.prayag2.controlcentre")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.milou")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
   }
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.networkmanagement")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.volume")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.notifications")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("com.github.prayag2.controlcentre")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.milou")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
}
      paneltop_clock = paneltop.addWidget("com.marcinorlowski.htmlclock")
       paneltop_clock.currentConfigGroup = ["Appearance"];
        paneltop_clock.writeConfig("useUserLayout", "true")
         paneltop_clock.currentConfigGroup = ["Configuration/Appearance"];
          paneltop_clock.writeConfig("layout", '<html><body><center><span style="font-weight:500;">{DD:u} {d} {MM:u} {h}:{ii}</span></center></body></html>');
if ((screenGeometry(paneltop.screen).width) <= 900){
  paneltop.addWidget("org.kde.plasma.marginsseparator")
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator")
  paneltop.addWidget("org.kde.plasma.marginsseparator")
}
            /****************************/
panelbottom = new Panel
 panelbottom.location = "bottom"
  panelbottom.height = 66
   panelbottom.offset = 0
    panelbottom.alignment = "center"
     panelbottom.panelVisibility = "2"
      if ((screenGeometry(panelbottom.screen).width) === 1920){
      panelbottom.maximumLength = 1728
       } else
     {
       if ((screenGeometry(panelbottom.screen).width) === 900){
      panelbottom.maximumLength = 810
       } else
     {
       if ((screenGeometry(panelbottom.screen).width) === 720){
      panelbottom.maximumLength = 648
       } else
     {
       panelbottom.maximumLength = (screenGeometry(panelbottom.screen).width*(.90))
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
   /*Tasks*/
    /*added icons apps*/
     /*filemanager*/
      if (applicationExists("org.kde.dolphin.desktop"))
          {
           var apps01 = "applications:org.kde.dolphin.desktop";
          }
      else{
           var apps01 = "";
          }
      /*web browser*/
           var prevbrowser = defaultApplication("browser")
var sentPB = prevbrowser.includes("/")
var sentPB2 = prevbrowser.includes(".desktop")
if (`${sentPB}` === "true"){
if (applicationExists("firefox.desktop"))
{
var browser = "applications:firefox.desktop"
}
else
{
if (applicationExists("firefox_firefox.desktop"))
{
var browser = "applications:firefox_firefox.desktop"
}
else
{
if (applicationExists("org.mozilla.firefox.desktop"))
{
var browser = "applications:org.mozilla.firefox.desktop"
}
else
{
if (applicationExists("chrome.desktop"))
{
var browser = "applications:chrome.desktop"
}
else
{
if (applicationExists("com.google.Chrome.desktop"))
{
var browser = "applications:com.google.Chrome.desktop"
}
else
{
if (applicationExists("falkon.desktop"))
{
var browser = "applications:falkon.desktop"
}
else
{
if (applicationExists("org.kde.falkon.desktop"))
{
var browser = "applications:org.kde.falkon.desktop"
}
else
{
if (applicationExists("librewolf.desktop"))
{
var browser = "applications:librewolf.desktop"
}
else
{
if (applicationExists("io.gitlab.librewolf-community.desktop"))
{
var browser = "applications:io.gitlab.librewolf-community.desktop"
}
else
{
var browser = "0"
}
}
}
}
}
}
}
}
}
}
else
{
if (`${sentPB2}` === "true"){
var browser = `applications:${prevbrowser}`
}
else
{
if (applicationExists(`${prevbrowser}.desktop`))
{
var browser = `applications:${prevbrowser}.desktop`
}
else
{
   if (applicationExists("firefox.desktop"))
{
var browser = "applications:firefox.desktop"
}
else
{
if (applicationExists("firefox_firefox.desktop"))
{
var browser = "applications:firefox_firefox.desktop"
}
else
{
if (applicationExists("org.mozilla.firefox.desktop"))
{
var browser = "applications:org.mozilla.firefox.desktop"
}
else
{
if (applicationExists("chrome.desktop"))
{
var browser = "applications:chrome.desktop"
}
else
{
if (applicationExists("com.google.Chrome.desktop"))
{
var browser = "applications:com.google.Chrome.desktop"
}
else
{
if (applicationExists("falkon.desktop"))
{
var browser = "applications:falkon.desktop"
}
else
{
if (applicationExists("org.kde.falkon.desktop"))
{
var browser = "applications:org.kde.falkon.desktop"
}
else
{
if (applicationExists("librewolf.desktop"))
{
var browser = "applications:librewolf.desktop"
}
else
{
if (applicationExists("io.gitlab.librewolf-community.desktop"))
{
var browser = "applications:io.gitlab.librewolf-community.desktop"
}
else
{
var browser = "0"
}
}
}
}
}
}
}
}
}
}
}
}
/*end web browser*/
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
           /*email*/
      if (defaultApplication("mailer"))
         {
          var apps04 = `${apps03},applications:${defaultApplication("mailer")}`;
         }
      else{
       var apps04 = `${apps03}`;
         }
     /*konsole*/
      if (applicationExists("org.kde.konsole.desktop"))
          {
           var apps05 = `${apps04},applications:org.kde.konsole.desktop`;
          }
      else{
           var apps05 = `${apps04}`;
          }
     /*settings*/
      if (applicationExists("systemsettings.desktop"))
          {
           var apps06 = `${apps05},applications:systemsettings.desktop`;
          }
      else{
           var apps06 = `${apps05}`;
          }
          /*music player*/
          if (applicationExists("org.kde.elisa.desktop"))
        {
       var apps07 = `${apps06},applications:org.kde.elisa.desktop`;
        }
     else{
      if (applicationExists("audacious.desktop"))
        {
       var apps07 = `${apps06},applications:audacious.desktop`;
        }
     else{
       if (applicationExists("file:///var/lib/flatpak/exports/share/applications/org.atheme.audacious.desktop"))
        {
       var apps07 = `${apps06},file:///var/lib/flatpak/exports/share/applications/org.atheme.audacious.desktop`;
        }
     else{
       if (applicationExists("clementine.desktop"))
        {
       var apps07 = `${apps06},applications:clementine.desktop`;
        }
     else{
       if (applicationExists("org.gnome.Lollypop.desktop"))
        {
       var apps07 = `${apps06},applications:org.gnome.Lollypop.desktop`;
        }
     else{
       if (applicationExists("com.github.neithern.g4music.desktop"))
        {
       var apps07 = `${apps06},applications:com.github.neithern.g4music.desktop`;
        }
     else{
       var apps07 = `${apps06}`;
         }
         }
         }
         }
         }
         }
     /*text-editor*/
      if (applicationExists("org.kde.kate.desktop"))
          {
           var apps08 = `${apps07},applications:org.kde.kate.desktop`;
          }
      else{
            if (applicationExists("org.kde.kwrite.desktop"))
                 {
                  var apps08 = `${apps07},applications:org.kde.kwrite.desktop`;
                 }
             else{
                  var apps08 = `${apps07}`;
                 }
          }
     /*okular*/
      if (applicationExists("okularApplication_comicbook.desktop"))
          {
           var apps09 = `${apps08},applications:okularApplication_comicbook.desktop`;
          }
      else{
           var apps09 = `${apps09}`;
          }
           /*filemanager/*/
           /*icons dock /*/
  /*dock*/
     panelbottom_tsk = panelbottom.addWidget("org.kde.plasma.icontasks")
      panelbottom_tsk.currentConfigGroup = [];
       panelbottom_tsk.writeConfig("launchers", "")
        panelbottom_tsk.currentConfigGroup = ["General"];
         panelbottom_tsk.writeConfig("indicateAudioStreams", "false")
         panelbottom_tsk.writeConfig("iconSpacing", "0")
                   if (`${browser}` === "0")
           {
          panelbottom_tsk.writeConfig("launchers", `${apps01},${apps08}`)
           }
          else {
            panelbottom_tsk.writeConfig("launchers", `${apps01},${browser},${apps08}`)
          }
                        panelbottom_tsk.writeConfig("maxStripes", "1")
             /*dock/*/
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
plasma.loadSerializedLayout(layout);
