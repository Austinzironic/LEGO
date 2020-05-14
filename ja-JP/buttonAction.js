/* Outcommented - used for market selector drop down found in MarketPortalHeader
var timeout	= 750;
var closetimer	= 0;
var ddmenuitem	= 0;
var closetimer;

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(hideDropdown, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

function showDropdown() 
{
	document.getElementById("MarketPortalHeaderDropdown").style.display="block";
	mcancelclosetime();
}

function hideDropdown()
{
	document.getElementById("MarketPortalHeaderDropdown").style.display="none";
}

// close layer when click-out
document.onclick = hideDropdown;
*/


function ms( imagename, action ) {
    try {
        if ( document.images ) {
         eval('document.images.' +imagename + '.src=' + imagename + '_' + action +'.src;');
        }
    } 
    catch(e) 
    {
    
    }
}