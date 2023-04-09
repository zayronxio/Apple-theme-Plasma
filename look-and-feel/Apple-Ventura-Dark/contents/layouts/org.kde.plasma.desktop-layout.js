/*******Panel Top**********/
paneltop = new Panel
paneltop.hiding = "none"
paneltop.location = "top"
paneltop.height = 24
paneltop.offset = 0
;
/*Variables para reconocer resolucion*/
var allDesktops = desktops()
var resolution = screenGeometry(allDesktops)
/*kapple*/
if (`${resolution.width}` < 1920){
  if (`${resolution.width}` < 900){
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
  paneltop.addWidget("org.kpple.kppleMenu");
paneltop_napp = paneltop.addWidget("org.kde.activeApplication");
 paneltop_napp.currentConfigGroup = ["Appearance"];
  paneltop_napp.writeConfig("noWindowText", "Desktop");
paneltop.addWidget("org.kde.plasma.appmenu");
 paneltop.addWidget("org.kde.plasma.panelspacer");
paneltop_clock = paneltop.addWidget("org.kde.plasma.bigSur-inlineBattery");
 paneltop_clock.currentConfigGroup = ["General"];
  paneltop_clock.writeConfig("fontSize", "13");
   paneltop_clock.writeConfig("iconHeight", "12");
    paneltop_clock.writeConfig("iconWidth", "23");
     paneltop_clock.writeConfig("padding", "4");
      paneltop_clock.writeConfig("showPercentage", "false");
if (`${resolution.width}` < 1920){
  if (`${resolution.width}` < 900){
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
paneltop.addWidget("org.kde.plasma.networkmanagement");
if (`${resolution.width}` < 1920){
  if (`${resolution.width}` < 900){
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
  paneltop.addWidget("org.kde.plasma.volume");
if (`${resolution.width}` < 1920){
  if (`${resolution.width}` < 900){
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
paneltop.addWidget("org.kde.plasma.notifications");
if (`${resolution.width}` < 1920){
  if (`${resolution.width}` < 900){
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
paneltop.addWidget("com.github.prayag2.controlcentre");
if (`${resolution.width}` < 1920){
  if (`${resolution.width}` < 900){
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   paneltop.addWidget("org.kde.milou");
 if (`${resolution.width}` < 1920){
  if (`${resolution.width}` < 900){
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
      paneltop_clock = paneltop.addWidget("com.marcinorlowski.htmlclock");
       paneltop_clock.currentConfigGroup = ["Appearance"];
        paneltop_clock.writeConfig("useUserLayout", "true");
         paneltop_clock.currentConfigGroup = ["Configuration/Appearance"];
          paneltop_clock.writeConfig("layout", '<html><body><center><span style="font-weight:500;">{DD:u} {d} {MM:u} {h}:{ii}</span></center></body></html>');
 if (`${resolution.width}` < 1920){
  if (`${resolution.width}` < 900){
     } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
   } else {
  paneltop.addWidget("org.kde.plasma.marginsseparator");
  paneltop.addWidget("org.kde.plasma.marginsseparator");
}
            /****************************/
panelbottom = new Panel
 panelbottom.location = "bottom"
  panelbottom.height = 66
   panelbottom.offset = 0
    panelbottom.alignment = "center"
     panelbottom.panelVisibility = "2"
      panelbottom.maximumLength = (`${resolution.width}`*(.90))
       panelbottom.minimumLength = (`${resolution.width}`*(.14))
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
     panelbottom_tsk = panelbottom.addWidget("org.kde.plasma.icontasks");
      panelbottom_tsk.currentConfigGroup = [];
       panelbottom_tsk.writeConfig("launchers", "");
        panelbottom_tsk.currentConfigGroup = ["General"];
         panelbottom_tsk.writeConfig("indicateAudioStreams", "false");
          if (`${browser}` === "applications:/usr/bin/flatpak")
           {
          panelbottom_tsk.writeConfig("launchers", `${apps01},${apps08}`);}
          else {
            panelbottom_tsk.writeConfig("launchers", `${apps01},${browser},${apps08}`);
               }
           panelbottom_tsk.writeConfig("maxStripes", "1");
             /*dock/*/
    /*Trash*/
    panelbottom.addWidget("org.kde.latte.separator");
          var folderDONW = `${userDataPath("downloads")}`
    if (applicationExists(`${folderDONW}`))
       {
        panelbottom_fld = panelbottom.addWidget("org.kde.plasma.folder");
        panelbottom_fld.currentConfigGroup = ["General"];
        panelbottom_fld.writeConfig("url", `${folderDONW}`);
       }
       else
        {
        panelbottom.addWidget("org.kde.plasma.folder");
        }
    panelbottom.addWidget("org.kde.plasma.trash");
     /*separator*/
    panelbottom.addWidget("org.kde.plasma.marginsseparator");
     /*separator /*/
;
plasma.loadSerializedLayout(layout);
