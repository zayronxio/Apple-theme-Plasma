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
function BrowserApp(){
 let ListBrowser = {
  1 : "firefox.desktop",
  2 : "firefox_firefox.desktop",
  3 : "org.mozilla.firefox.desktop",
  4 : "chrome.desktop",
  5 : "com.google.Chrome.desktop",
  6 : "applications:com.google.Chrome.desktop",
  7 : "falkon.desktop",
  8 : "org.kde.falkon.desktop",
  9 : "applications:librewolf.desktop",
  10 : "io.gitlab.librewolf-community.desktop",
  11 : userDataPath(),
      }
function BalLisBrowser(x){
if (applicationExists(ListBrowser[x]))
{    return 1
} else {  return 0
}
}
for (a = 1;  BalLisBrowser(a) < 1; a++) {
}
if (ListBrowser[a] === userDataPath()){
    return "0"
} else {
return "applications:"+ListBrowser[a]}
}

if (defaultApplication("browser")) {
var prevbrowser = defaultApplication("browser")
if (prevbrowser.includes("/")){
var browser = BrowserApp()
} else {
if (prevbrowser.includes(".desktop")){
  var browser = `applications:${defaultApplication("browser")}`
  } else {
var browser = BrowserApp()
  }
}
}
else
{
var browser = BrowserApp()
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
           var apps09 = `${apps08}`;
          }
          if (applicationExists("spotify.desktop"))
          {
           var apps11 = `${apps09},applications:spotify.desktop`;
          }
      else{
           var apps11 = `${apps09}`;
          }
           /*filemanager/*/
           /*icons dock /*/
  /*dock*/
applet.currentConfigGroup = [];
applet.writeConfig("launchers", "")
applet.currentConfigGroup = ["General"];
applet.writeConfig("indicateAudioStreams", "false")
applet.writeConfig("iconSpacing", "0")
if (`${browser}` === "0")
           {
applet.writeConfig("launchers", `${apps01},${apps11}`)
           }
else {
applet.writeConfig("launchers", `${apps01},${browser},${apps11}`)
          }
applet.writeConfig("maxStripes", "1")
