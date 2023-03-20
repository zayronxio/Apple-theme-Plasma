#!/bin/bash
##[es] Script para mostrar hora con Mayusculas y Minisculas.
#Creator: Adolfo Silerio a.k.a ZAYRONXIO
#mail: zayronxio@gmail.com
###########
file01=$HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/tem.txt
file02=$HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/tem2.txt
file03=$HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/tem3.txt
file04=$HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/tem4.txt
panel01=$HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/panel01.txt

panel002=`sed '1 d' $file04`

#[es]estableciendo carpeta de trabajo incial
#[en]work folder establishment
cd $HOME/.config
#[es]creando archivo para determinar el panel a configurar
#[en]creating text file, to determine the panel number to edit
grep -A 4 "thickness=64" plasmashellrc > $file01
#[es]creando archivo para determinar el panel a configurar
#[en]creating text file, to determine the panel number to edit
grep -w "PlasmaViews" $file01 > $file02
sed -i 's/\[//g' $file02
sed -i 's/\]//g' $file02
sed -i 's/PlasmaViewsPanel //g' $file02
sed -i 's/Horizontal/ panelscript=/g' $file02
sed -i 's/Horizontal/ panelscript=/g' $file02
grep -w "panelscript" $file02 > $file04 && sleep 2
sleep 1 && sed -i 's/ panelscript=/\n/' $file04
head -n1 $file04 > $panel01
head -n10 plasmashellrc > $file03

echo -e "[PlasmaViews][Panel `cat $HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/panel01.txt`]\nalignment=132\nfloating=1\npanelVisibility=2\n\n[PlasmaViews][Panel `cat $HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/panel01.txt`] [Defaults]\nmaxLength=1620\nminLength=216\noffset=0\nthickness=64\n\n[PlasmaViews][Panel `cat $HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/panel01.txt`][Horizontal$panel002]\nmaxLength=1620\nminLength=216\nthickness=64" | cat > $HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/plasmashell02.txt

echo -e "`cat $file03`\n\n`cat $HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/plasmashell02.txt`\n\n[Updates]\nperformed=/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/00-start-here-2.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/containmentactions_middlebutton.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/digitalclock_migrate_font_settings.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/digitalclock_rename_timezonedisplay_key.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/keyboardlayout_migrateiconsetting.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/keyboardlayout_remove_shortcut.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/klipper_clear_config.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/maintain_existing_desktop_icon_sizes.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/move_desktop_layout_config.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/no_middle_click_paste_on_panels.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/systemloadviewer_systemmonitor.js,/usr/share/plasma/shells/org.kde.plasma.desktop/contents/updates/unlock_widgets.js"  | cat > $HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/plasmashellrc
killall plasmashell
rm plasmashellrc
cp $HOME/.local/share/plasma/look-and-feel/Apple-Ventura-Dark/contents/tem/plasmashellrc $HOME/.config/plasmashellrc
kstart5 plasmashell




