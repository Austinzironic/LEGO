var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


			
				displayDropDown = function()
				{

					var rateThisProductBtn = document.getElementById("ppt-productRatingBtn");
					var dropDownElement = document.getElementById("ppt-dropDownNav");
					var hoverOff = document.getElementById("ppt-dropDownNav").getElementsByTagName("ul");
					
					
					rateThisProductBtn.onclick = function()
					{
						dropDownElement.style.display = 'block';
					}
					
					hoverOff[0].onmouseover = function()
					{
						dropDownElement.style.display = 'block';
					}
					
					hoverOff[0].onmouseout = function()
					{
						dropDownElement.style.display = 'none';
					}
				
				}
				
				window.onload=displayDropDown;	
			
			
			var submitcount=0;
			function submitOnce() {
				if (submitcount == 0)
				{
					submitcount++;
					return true;
				}
					else 
				{
					return false;
				}
			}
			
			
			selectRating = function(productRating){
				
				var contentElement = document.getElementById("ppt-content"+productRating);
				var contentElementThankyou = document.getElementById("ppt-content"+productRating+"Thankyou");
				
				
				if(submitOnce())
				{
					//alert("submit once");
					contentElement.style.display = 'none';
					contentElementThankyou.style.display = 'block';
					contentElementThankyou.style.background = '#D87A38';
					submitRating(productRating, "isSubmitted")
				}
				
			}
			

			submitRating = function(productRating, submitted){
					
				var	ratingValue = document.rateThisProductForm.productRating;
				var isSubmitted = document.rateThisProductForm.isSubmitted;
	
				ratingValue.value = productRating;
				isSubmitted.value = submitted;
				
				
				setTimeout('document.rateThisProductForm.submit()', 3000);
				
					
			}
			
			noAnchor = function(){
				// dummy function to prevent page from jumping when rate it button clicked
			}







}
