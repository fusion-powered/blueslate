// Created by iWeb 3.0.4 local-build-20140415

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),shadow_2:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,298),url:'Background_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Background_files/stroke_1.png'},{rect:new IWRect(1,-1,188,2),url:'Background_files/stroke_2.png'},{rect:new IWRect(189,-1,3,2),url:'Background_files/stroke_3.png'},{rect:new IWRect(189,1,3,298),url:'Background_files/stroke_4.png'},{rect:new IWRect(189,299,3,2),url:'Background_files/stroke_5.png'},{rect:new IWRect(1,299,188,2),url:'Background_files/stroke_6.png'},{rect:new IWRect(-1,299,2,2),url:'Background_files/stroke_7.png'}],new IWSize(190,300))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Background_files/BackgroundMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
