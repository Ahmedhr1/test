
<!-- TEMPLATEVALUES]|[v1]|[Photo]|[Logon]|[127.0.0.1]|[3389]|[Web Access]|[Log on]|[#589DC4]|[88, 157, 196]|[#FFFFFF]|[Verdana, Geneva, sans-serif]|[Connecting People and Systems Through Internet]|[13]|[#0A8AB1]|[IDUS_1_1_kunddusen.png]|[software/java/img/footer.png]|[Användarnamn:]|[Lösenord:]|[Domain:]|[Logga in]|[]|[]|[]|[false]|[true]|[as_browser]|[html5]|[true]|[false]|[false]|[true]|[text]|[7]|[32]|[4]|[0]|[15]|[true]|[yes]|[true]|[true]|[false]|[]|[Remote Applications Portal]|[Applications]|[Log Off]|[#AAAAAA]|[#CCCCCC]|[4]|[11]|[11]|[8]|['32']|[13]|[Cloud]|[]|[2-step verification:]|[false]|[false]|[0]|[true]|[false]|[7]|[true]|[#4A4A4A]|[#A3A3A3]|[]|[left]|[]|[none]|[#4A4A4A]|[20]|[HTML5]|[RemoteApp]|[]|[]|[HTML5]|[checked]|[]|[]|[HTML5]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[]|[ -->
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="X-XSS-Protection" content="1; mode=block" />
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="cache-control" content="no-store" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Web Access</title>

<script type="text/javascript" src="software/java/third/jws.js"></script>
<script type="text/javascript" src="software/remoteapp2.js?v=17.20"></script>
<script type="text/javascript">
  // --------------- Page Configuration ---------------
  var page_configuration = new Array();
  page_configuration["access_type"] = "html5";     // Client Type (specify the client to use with "remoteapp2" or "html5" (legacy client types: "java", "remoteapp") ; or let the user choose between several clients with "remoteapp2+html5")
  page_configuration["is_standard"] = true;   // Standard Logon Web Page (do not edit this parameter - support only)
  page_configuration["show_domain"] = false;   // Show a Domain field (true if it must be displayed, false otherwise)
  page_configuration["is_webcredentials"] = false;   // Logon using WebCredentials (true if it is, false otherwise)
  page_configuration["allow_empty_password"] = false;   // Allow empty Password field - only intended for WebCredentials (true if it allowed, false otherwise)
  page_configuration["show_password"] = true;   // Show a Password field (true if it must be displayed, false otherwise)
  page_configuration["remember_credentials"] = true;	// Remember login and domain in a cookie (true if must be remembered, false otherwise)
  page_configuration["hide_server_list"] = false;	// Hide the server list if load-balancing is enabled
  page_configuration["applications_portal"] = "";	  // Display Application Portal after logon ("your_page_applications.html" to display the application portal, "" to start remote connection directly after logon)
  page_configuration["show_windows_password_reset_button"] = true;	  // Display the windows password reset button
  page_configuration["show_windows_password_expiration_alert"] = false;	  // Show a windows password expiration alert popin when password expires soon
  page_configuration["show_eye"] = true;      // Display password visibility eye icon
  // --------------- End of Page Configuration ---------------

  // --------------- Access Configuration ---------------
  var user = "";                              // Login to use when connecting to the remote server (leave "" to use the login typed in this page)
  var pass = "";                              // Password to use when connecting to the remote server (leave "" to use the password typed in this page)
  var domain = "";                            // Domain to use when connecting to the remote server (leave "" to use the domain typed in this page)
  var server = "127.0.0.1";                            // Server to connect to (leave "" to use localhost and/or the server chosen in this page)
  var port = "";                              // Port to connect to (leave "" to use localhost and/or the port of the server chosen in this page)
  var lang = "as_browser";                    // Language to use
  var serverhtml5 = "127.0.0.1";              // Server to connect to, when using HTML5 client
  var porthtml5 = "3389";                     // Port to connect to, when using HTML5 client
  var cmdline = "";                           // Optional text that will be put in the server's clipboard once connected
  // --------------- End of Access Configuration ---------------

  // --------------- Seamless Access Configuration ---------------
  var alloutside = "dummyvaro=false; ";
  alloutside += "switcher=7; ";               // Resolution to use (if your server supports RemoteApp, leave 7. Otherwise, use one of the following values: 0 = full window, 1 = full screen, 2 = 640x480, 3 = 800x600, 4 = 1024x768, 5 = 1280x1024, 6 = 1600x1200)
  alloutside += "bpp_all=32; ";               // Pixel Depth to use for Windows clients (use one of the following values: 15 for 15 bits display, 16 for 16 bits, 24 for 24 bits, 32 for 32 bits)
  alloutside += "bpp_all_mac='4'; ";          // Pixel Depth to use for MAC clients (use one of the following values: 1 for 15 bits display, 2 for 16 bits, 3 for 24 bits, 4 for 32 bits)
  alloutside += "cmdline='"+cmdline+"'; ";
  //alloutside += "server=''; ";                  // Server (leave empty '' for auto recognition)
  //alloutside += "username=''; ";                // Autologon User Login (leave empty '' if you don't want to use Autologon)
  //alloutside += "rdppass=''; ";                 // Autologon User Password (leave empty '' if you don't want to use Autologon)
  //alloutside += "mydomain=''; "                 // Domain (leave empty '' if you don't have an Active Directory domain)
  alloutside += "interval_print_option='11'; ";	// Web Printing Options
  // --------------- End of Seamless Access Configuration ---------------

  // --------------- Java Access Configuration ---------------
  var allinside = "dummyvari=false; ";
  allinside += "switcher=0; ";                // Resolution to use (use one of the following values: 0 = full window, 1 = full screen, 2 = 640x480, 3 = 800x600, 4 = 1024x768, 5 = 1280x1024, 6 = 1600x1200)
  allinside += "bpp_all=15; ";                // Pixel Depth to use (use one of the following values: 15 for 15 bits display, 16 for 16 bits, 24 for 24 bits)
  allinside += "cmdline='"+cmdline+"'; ";
  //allinside += "server=''; ";                   // Server (leave empty '' for auto recognition)
  //allinside += "username=''; ";                 // Autologon User Login (leave empty '' if you don't want to use Autologon)
  //allinside += "rdppass=''; ";                  // Autologon User Password (leave empty '' if you don't want to use Autologon)
  //allinside += "mydomain=''; "                  // Domain (leave empty '' if you don't have an Active Directory domain)
  allinside += "sameasweb = 'yes'; ";         // Port to use for the RDP connection ('yes' if you want to use the same port as this page's web server address, 'no' otherwise
  allinside += "insidecheck = true; ";        // Start the Java Client inside the browser (true to start it inside the browser, false to start it externally)
  allinside += "soundsup = true; ";           // Sound Support (true to activate it, false otherwise)
  allinside += "mapsup = true; ";             // Local Disk Mapping (true to activate it, false otherwise)
  allinside += "activex = false; ";           // ActiveX instead of Java in Internet Explorer browsers (true if you want to use ActiveX client instead of the Java client, false otherwise)
  allinside += "interval_print_option='11'; ";		// Web Printing Options
  // --------------- End of Java Access Configuration ---------------
  // --------------- PWA Configuration ---------------
  var isPWAEnabled = "yes";
  var edgeVersion = navigator.userAgent.match(/(Edge|Edg)\/(\d+)/i);
  var isOldEdge = edgeVersion !== null && edgeVersion[2] < 80;
  var isIE = typeof window.document.documentMode !== "undefined";
  var isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
  var isPWASupported = !(isOldEdge || isIE || isFirefox);
  
  // Delete previous service worker cache
  if (typeof(caches) != 'undefined') {
    caches.delete('site-dynamic-v1');
  }
  
  if(isPWAEnabled != "no" && isPWASupported && 'serviceWorker' in navigator){
    var link = document.createElement('link');
    link.rel = 'manifest';
    link.href = 'manifest.json';
    document.head.append(link);
    navigator.serviceWorker.register('./sw.js')
      .then(function(reg) {console.log('Service Worker registered')})
      .catch(function(err) {console.log('Service Worker not registered', err)});
  }
  else {
	if('serviceWorker' in navigator) {
		navigator.serviceWorker.getRegistration('./sw.js').then(function(reg) {
			if(reg !== undefined) {
				console.log('Unregistering Service Worker');
				reg.unregister();
			}
		}).catch(function(err) {
			console.log('Service Worker unregistration failed: ', err);
		});
	}
  }
  // --------------- End of PWA Configuration ---------------
</script>
<!--[if IE]><script type="text/javascript">window.iecondition = true;</script><![endif]-->
<script type="text/javascript" src="software/lang.js"></script>
<script type="text/javascript" src="software/common.js"></script>
<style type="text/css">
@font-face{font-family:Exo;font-style:normal;font-weight:400;src:local('Exo Regular'),local('Exo-Regular'),url(software/js/exo-latin-ext.woff2) format('woff2');unicode-range:U+0100024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:Exo;font-style:normal;font-weight:400;src:local('Exo Regular'),local('Exo-Regular'),url(software/js/exo-latin.woff2) format('woff2');unicode-range:U+000000FF,U+0131,U+01520153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215,U+E0FF,U+EFFD,U+F000}
</style>
<script src="software/js/jquery.min.js"></script>
<style type="text/css">
html { 
	margin:0;
	padding:0;
	font-size: 12px;
	color: #FFFFFF;
	background: url('templates/photo/img/Cloud.jpg') no-repeat center fixed;
	-webkit-background-size: cover;
	background-size: cover;
	font-family: Verdana;
	height: 100%;
	width: 100%;
}
input {
	font-family: 'Exo', sans-serif;
	width: 178px;
	height: 20px;
	line-height: 20px;
	background: none;
	color: #FFFFFF;
	border: 1px solid #FFFFFF;
	padding: 5px;
	margin: 5px;
	display: block;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
}
select {
	font-family: 'Exo', sans-serif;
	width: 190px;
	height: 32px;
	margin: 5px;
	padding: 5px;
	background: transparent url('templates/photo/img/select.png') no-repeat 174px 50%;
	color: #FFFFFF;
	border: 1px solid #FFFFFF;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
	-webkit-appearance: none;
}
select option { color: #000000; }
input[type="button"] {
	width: 192px;
	background: #FFFFFF;
	color: #589DC4;
	padding: 15px;
	line-height: 0;
	font-weight: bold;
	font-size: 15px;
}
input[type="radio"] {
	display: inline;
	width: auto;
	height: 12px;
	width: 12px;
	margin: 0;
	padding: 0;
	border: none;
}
label {
	line-height: 30px;
	display: inline-block;
	margin: 5px;
}
::-webkit-input-placeholder {
	color: #FFFFFF;
	opacity: 1;
}
:-moz-placeholder {
	color: #FFFFFF;
	opacity: 1;
}
::-moz-placeholder {
	color: #FFFFFF;
	opacity: 1;
}
:-ms-input-placeholder {
	color: #FFFFFF;
	opacity: 1;
}
.styled-select select
{
appearance:none;
-moz-appearance:none;
-webkit-appearance:none;
}
.center {
	width:220px;
	position:relative;
	left:50%;
	top:80px;
	padding: 20px 20px 20px 35px;
	margin:0 0 20px -137px;
	background: rgb(88, 157, 196);
	background: rgba(88, 157, 196,0.7);
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
}
.logo {
	max-width: 200px;
}
.collapsible {
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
   	border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    background-color: #777;
   }
   .active, .collapsible:hover {
       background-color: #555;
   }
   .collapsiblecontent {
       padding: 0 18px;
       max-height: 0;
       overflow: hidden;
       transition: max-height 0.2s ease-out;
       background-color: #f1f1f1;
   }

#tr-domain, #tr-password, #tr-verifypassword {
	display: none;
	margin-top: 0px;
}
#select-server {
	display: none;
}
#span-login-ok, #span-password-ok, #span-login-ko, #span-password-ko, #span-credentials-ko, #span-twofa-ko {
    display: none;
}
#retype-password-input, #retype-password-label {
	display: none;
}
#span-credentials-ko {
	font-weight: bold;
	text-align: center;
}
#accesstypeuserpanel {
	display: none;
	text-align: center;
	margin-top: 0px;
}
#accesstypeuserpanel label {
	display: none;
}
#top_right_menu_actions input {
	width: auto;
}
.fa-eye {
    background-image: url("data:image/svg+xml,%3Csvg fill='%23FFFFFF' width='20' height='16' viewBox='0 0 20 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.99844 2.5C7.96111 2.5 6.28626 3.425 5.002 4.61562C3.79898 5.73437 2.9678 7.0625 2.54283 8C2.9678 8.9375 3.79898 10.2656 4.99887 11.3844C6.28626 12.575 7.96111 13.5 9.99844 13.5C12.0358 13.5 13.7106 12.575 14.9949 11.3844C16.1979 10.2656 17.0291 8.9375 17.454 8C17.0291 7.0625 16.1979 5.73437 14.998 4.61562C13.7106 3.425 12.0358 2.5 9.99844 2.5ZM3.98021 3.51875C5.45196 2.15 7.47366 1 9.99844 1C12.5232 1 14.5449 2.15 16.0167 3.51875C17.479 4.87812 18.4571 6.5 18.9227 7.61562C19.0258 7.8625 19.0258 8.1375 18.9227 8.38437C18.4571 9.5 17.479 11.125 16.0167 12.4812C14.5449 13.85 12.5232 15 9.99844 15C7.47366 15 5.45196 13.85 3.98021 12.4812C2.51784 11.125 1.5398 9.5 1.07734 8.38437C0.974221 8.1375 0.974221 7.8625 1.07734 7.61562C1.5398 6.5 2.51784 4.875 3.98021 3.51875ZM9.99844 10.5C11.3796 10.5 12.4982 9.38125 12.4982 8C12.4982 6.61875 11.3796 5.5 9.99844 5.5C9.97656 5.5 9.95782 5.5 9.93594 5.5C9.97656 5.65937 9.99844 5.82812 9.99844 6C9.99844 7.10312 9.10164 8 7.99861 8C7.82675 8 7.65802 7.97812 7.49865 7.9375C7.49865 7.95937 7.49865 7.97813 7.49865 8C7.49865 9.38125 8.61731 10.5 9.99844 10.5ZM9.99844 4C11.0592 4 12.0765 4.42143 12.8266 5.17157C13.5767 5.92172 13.9981 6.93913 13.9981 8C13.9981 9.06087 13.5767 10.0783 12.8266 10.8284C12.0765 11.5786 11.0592 12 9.99844 12C8.93766 12 7.92034 11.5786 7.17026 10.8284C6.42018 10.0783 5.99879 9.06087 5.99879 8C5.99879 6.93913 6.42018 5.92172 7.17026 5.17157C7.92034 4.42143 8.93766 4 9.99844 4Z' /%3E%3C/svg%3E");
    /* dans le "fill" du code svg -> fill='%23FFFFFF' */
    /* bien garder le %23 sinon KO */
    height: 16px;
    width: 20px;
}

.fa-eye-slash {
    background-image: url("data:image/svg+xml,%3Csvg fill='%23FFFFFF' width='20' height='16' viewBox='0 0 20 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.21268 0.159551C0.887676 -0.0966993 0.415801 -0.0373243 0.159551 0.287676C-0.0966993 0.612676 -0.0373243 1.08455 0.287676 1.3408L18.7877 15.8408C19.1127 16.0971 19.5846 16.0377 19.8408 15.7127C20.0971 15.3877 20.0377 14.9158 19.7127 14.6596L16.4252 12.0846C17.6627 10.8158 18.5002 9.39393 18.9221 8.38455C19.0252 8.13768 19.0252 7.86268 18.9221 7.6158C18.4564 6.50018 17.4783 4.87518 16.0158 3.51893C14.5471 2.15018 12.5252 1.00018 10.0002 1.00018C7.86893 1.00018 6.09393 1.82205 4.70955 2.90018L1.21268 0.159551ZM5.93143 3.85643C7.06268 3.0533 8.42205 2.50018 10.0002 2.50018C12.0377 2.50018 13.7127 3.42518 14.9971 4.6158C16.2002 5.73455 17.0314 7.06268 17.4564 8.00018C17.0627 8.87518 16.3127 10.0877 15.2408 11.1533L13.5596 9.83455C13.8439 9.28455 14.0033 8.66268 14.0033 8.00018C14.0033 5.7908 12.2127 4.00018 10.0033 4.00018C8.99705 4.00018 8.07518 4.37205 7.37205 4.98455L5.93143 3.85643ZM12.3408 8.88143L9.79393 6.88455C9.92518 6.61893 10.0002 6.3158 10.0002 6.00018C10.0002 5.8283 9.9783 5.65955 9.93768 5.50018C9.95955 5.50018 9.9783 5.50018 10.0002 5.50018C11.3814 5.50018 12.5002 6.61893 12.5002 8.00018C12.5002 8.30955 12.4439 8.60643 12.3408 8.88143ZM13.9439 13.9846L12.6346 12.9533C11.8377 13.2939 10.9596 13.5002 10.0002 13.5002C7.96268 13.5002 6.28768 12.5752 5.0033 11.3846C3.80018 10.2658 2.96893 8.93768 2.54393 8.00018C2.8033 7.42518 3.2158 6.7033 3.77518 5.97518L2.59705 5.04705C1.88455 5.97518 1.37518 6.90018 1.0783 7.6158C0.975176 7.86268 0.975176 8.13768 1.0783 8.38455C1.54393 9.50018 2.52205 11.1252 3.98455 12.4814C5.4533 13.8502 7.47518 15.0002 10.0002 15.0002C11.4939 15.0002 12.8096 14.5971 13.9439 13.9846ZM11.1939 11.8189L9.43768 10.4377C8.7033 10.2689 8.0908 9.77518 7.75955 9.1158L6.00643 7.73455C6.00018 7.82205 5.99705 7.90955 5.99705 8.00018C5.99705 10.2096 7.78768 12.0002 9.99705 12.0002C10.4127 12.0002 10.8127 11.9377 11.1908 11.8189H11.1939Z' /%3E%3C/svg%3E");
    /* dans le "fill" du code svg -> fill='%23FFFFFF' */
    /* bien garder le %23 sinon KO */
    height: 16px;
    width: 20px;
}
</style>
<link rel="stylesheet" type="text/css" href="popins.css" />
<!--[if lte IE 8]>
  <style type="text/css">
	.center {
      background:transparent;
      filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#b4589DC4,endColorstr=#b4589DC4);
      zoom: 1;
    }
  </style>
<![endif]-->
<link rel="stylesheet" type="text/css" href="custom.css" />
<script type="text/javascript" src="custom.js"></script>
</head>


<body onkeypress="CheckKey(event);" onload="setAll();">
<div id="top_right_menu_actions" style="position: fixed;top: 10px; right: 10px;">
    <input type="button" id="windows-password-reset-button" value="Reset Windows password" onclick="showResetWindowsPasswordPopin();return false;" style="display: none;cursor: pointer;" />
</div>

<div class="center" id="divcenter">
<img src="IDUS_1_1_kunddusen.png" class="logo">
	<p>Log on</p>
<div name="logonform" id="logonformid">
<span id="tr-domain"><input type="text" name="Domain" id="Editbox3" value="" placeholder="Domain:"></span>
<span id="span-login-ok"><img src="templates/photo/img/ok.png" width="20" height="30" alt="" style="float: right;"></span><span id="span-login-ko"><img src="templates/photo/img/ko.png" width="20" height="30" alt="" style="float: right;"></span><input type="text" name="username" id="Editbox1" onblur="onLoginTyped();" value="" placeholder="Användarnamn:">
<span id="span-password-ok"><img src="templates/photo/img/ok.png" width="20" height="30" alt="" style="float: right;"></span><span id="span-password-ko"><img src="templates/photo/img/ko.png" width="20" height="30" alt="" style="float: right;"></span><span id="tr-password"><input type="password" name="Password" id="Editbox2" onfocus="onPasswordFocused();" value="" placeholder="Lösenord:">
<span toggle="#password-field" id="password-visibility" class="fa fa-fw fa-eye field-icon toggle-password" style="float: right; margin-top: -27px; margin-right: 10px; cursor: pointer; z-index: 2; position: relative;"></span></span>
<select id="select-server" name="server"></select>
<span id="accesstypeuserpanel">
<label id="label_accesstypeuserchoice_html5" for="accesstypeuserchoice_html5"><input type="radio" value="html5" name="accesstypeuserchoice" id="accesstypeuserchoice_html5" onchange="remoteAppPluginPopinHide();" checked="checked"> HTML5</label>
<label id="label_accesstypeuserchoice_java" for="accesstypeuserchoice_java"><input type="radio" value="java" name="accesstypeuserchoice" id="accesstypeuserchoice_java" onchange="remoteAppPluginPopinHide();"> Java</label>
<label id="label_accesstypeuserchoice_remoteapp" for="accesstypeuserchoice_remoteapp"><input type="radio" value="remoteapp" name="accesstypeuserchoice" id="accesstypeuserchoice_remoteapp" onchange="remoteAppPluginPopinHide();"> Windows</label>
<label id="label_accesstypeuserchoice_remoteapp2" for="accesstypeuserchoice_remoteapp2"><input type="radio" value="remoteapp2" name="accesstypeuserchoice" id="accesstypeuserchoice_remoteapp2" onchange="remoteAppPluginPopinShow();"> RemoteApp</label>
</span>
<p id="span-credentials-ko">Invalid credentials</p>
<input id="buttonLogOn" type="button" value="Logga in" />
</div>
<div style="visibility:hidden;display:none;width:0px;height:0px;"><span id="tr-verifypassword"></span><span id="retype-password-label"></span><span id="retype-password-input"></span></div>
<div id="divcenter_remoteapp2install" style="display:none;">
    <br>
    <p id ="sp-windowsplugin">Windows plugin not found.</p>		
    <p id ="sp-windowsplugin-actions">Install the plugin and 'Log in' again</p>
    <br>
    <input type="button" value="Download Plugin" onclick="remoteAppDownloadPlugin();return false;" />
</div>
</div>

<a id="open-twofa" href="#verify" style="display: none"></a>
<div class="twofa-popin" id="verify">
    <div class="sp-body">
        <div class="sp-table">
            <div class="sp-cell">
                <h2 id="sp-title">Protect your account with 2-step verification</h2>
                <form autocomplete="off">
                    <div id="sp-appactivation">
                        <button type="button" id="sp-app" class="collapsible">Configure your authentication app</button>
                        <div class="collapsiblecontent">
                            <br/>
                            <li id="sp-appstep1">Open the authenticator app on your mobile phone.</li>
                            <li id="sp-appstep2">Scan the QR code displayed below:</li>
                            <figure>
                                <img id="twofaqrcode" src="" alt="No QR code was generated! Please enter your credentials on the logon page."/>
                                <figcaption id="qrcodecaption"></figcaption>
                            </figure>
                        </div>
                    </div>
                    <div id="sp-smsactivation">
                        <button type="button" id="sp-sms" class="collapsible">Or receive your verification code via SMS</button>
                        <div class="collapsiblecontent">
                            <br/>
                            <li id="sp-smsstep1">Type your phone number below, using the international phone numbers format (e.g. +14155552671):</li>
                            <input type="text" id="sp-phonenumber" value="" oninput="onChangeTrim(this);" required pattern="^\+?[1-9]\d{1,14}$" minlength="1" maxlength="15">
                            <span id="sp-phonenumbererror" class="error" aria-live="polite"></span>
                            <li id="sp-smsstep2">Click Send SMS button to register your phone number and receive your verification code.</li>
                            <input type="button" id="sp-register"style="cursor: pointer;" value="Receive SMS" onclick="requestVerificationCodeBySms();">  
                        </div>						  
                        <span id="sms-error" class="error" aria-live="polite"></span>
                      </div>
                      <div id="sp-emailactivation">
                          <button type="button" id="sp-email" class="collapsible">Or receive your verification code via e-mail</button>
                          <div class="collapsiblecontent">
                              <br/>
                              <li id="sp-emailstep1">Enter your e-mail address below:</li>
                              <input type="email" id="sp-emailaddress" value="" oninput="onChangeTrim(this);" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}">
                              <span id="sp-emailaddresserror" class="error" aria-live="polite"></span>
                              <li id="sp-emailstep2">Click Send e-mail button to register your e-mail and receive your verification code.</li>
                              <input type="button" id="sp-sendemail" style="cursor: pointer;" value="Send e-mail" onclick="requestVerificationCodeByEmail();">
                          </div>
                          <span id="email-error" class="error" aria-live="polite"></span>
                      </div>
                    <h4 id="sp-validate">Validate your verification code</h4>
                    <input type="text" id="twofacode" value="" placeholder="2-step verification:" onkeyup="validate2faKeyUpHandler(event);" oninput="onChangeTrim(this);" required pattern="[0-9]{4,12}" minlength="4" maxlength="12">
                    <span id="twofaerror" class="error" aria-live="polite"></span>
                    <input type="button" id="sp-verify" style="cursor: pointer;" value="Validate" onclick="verifyCode();">
                </form>
                <a href="#" id="twofaclose" class="sp-close" onclick="exitVerification();">x</a>
            </div>
        </div>
    </div>
</div>

<a id="open-expiration-password-reminder" href="#expiration-password-reminder" style="display: none"></a>
<div class="expiration-password-reminder-popin" id="expiration-password-reminder">
    <div class="sp-body">
        <div class="sp-table">
            <div class="sp-cell">
                <div id="password-expiration-reminder-section">
                    <h2 id="sp-title-expiration-password-reminder">Expiration password reminder</h2>
                    <h3 id="password-expiring">Your windows password currently expires in XX days.</h3>
                    <h3 id="change-password-now">Would you like to change it now?</h3>
                    <input type="button" id="password-expiration-choice-change-password" value="Yes" onclick="showResetWindowsPasswordPopin();">
                    <input type="button" id="password-expiration-choice-connect" value="No" onclick="closePasswordExpirationReminderPopin();refreshDisplayAndOpenSession();">
                </div>
                <a href="#" id="expiration-password-reminder-close" class="sp-close">x</a>
            </div>
        </div>
    </div>
</div>

<a id="open-reset-windows-password" href="#reset-windows-password" style="display: none"></a>
<div class="reset-windows-password-popin" id="reset-windows-password">
    <div class="sp-body">
        <div class="sp-table">
            <div class="sp-cell">
                <div id="reset-windows-password-section">
                    <h2 id="sp-title-reset-windows-password">Reset your windows password</h2>
                    <input type="text" id="sp-full-username" value="" placeholder="Your Windows username - Ex: CORP\johndoe">
                    <input type="password" id="sp-old-password" value="" placeholder="Your old password">
                    <input type="password" id="sp-new-password" value="" placeholder="Your new password">
                    <input type="password" id="sp-confirm-new-password" value="" placeholder="Confirm your new password">
                    <input type="button" style="cursor: pointer;" id="reset-windows-password-choice-validate" value="Validate" onclick="changeWindowsPassword();">
                    <span id="reset-windows-password-error" class="error" aria-live="polite" style="display: none;"></span>
                </div>
                <a href="#" id="reset-windows-password-close" class="sp-close">x</a>
            </div>
        </div>
    </div>
</div>

<script>
     (function ($) {
         $.support.placeholder = ('placeholder' in document.createElement('input'));
     })(jQuery);
     //fix for IE7 and IE8
     $(function () {
         if (!$.support.placeholder) {
             $("[placeholder]").focus(function () {
                 if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
             }).blur(function () {
                 if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
             }).blur();

             $("[placeholder]").parents("form").submit(function () {
                 $(this).find('[placeholder]').each(function() {
                     if ($(this).val() == $(this).attr("placeholder")) {
                         $(this).val("");
                     }
                 });
             });
         }
     });
     $(function (){
            $(".toggle-password").click(function() {
                $(this).toggleClass("fa-eye fa-eye-slash");
                var eyeIcon = document.getElementById("Editbox2");
                if (eyeIcon.type === "password") {
                    eyeIcon.type = "text";
                } else {
                    eyeIcon.type = "password";
                }
            })
        });
 </script>
  <script>
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
    </script>
</body>
</html>

