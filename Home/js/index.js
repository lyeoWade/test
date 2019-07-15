window.onload=function()
{
	var oList=document.getElementById("process-list");
	var aA=oList.getElementsByTagName("a");

	var iLiHeight=aA[0].offsetHeight;


	for(var i=0;i<aA.length;i++)
	{
		var sHtml=aA[i].innerHTML;
		aA[i].innerHTML="";
		for(var j=0;j<sHtml.length;j++)
		{
			aA[i].innerHTML+="<span>"+sHtml[j]+"</span>"
		}
		var aSpan=aA[i].children;
		for(var j=0;j<aSpan.length;j++)
		{
			aSpan[j].style.left=aSpan[j].offsetLeft+"px";
			aSpan[j].style.top=aSpan[j].offsetTop+"px";
			aSpan[j].startTop=aSpan[j].offsetTop;
		}
		for(var j=0;j<aSpan.length;j++)
		{
			aSpan[j].style.position="absolute";
			(function(aSpan,nub2){ 
				var iStart=0;
				var iSpanHeight=aSpan[0].offsetHeight;
				console.log(iSpanHeight)
				aSpan[nub2].onmouseover=function(ev)
				{
					iStart=ev.clientY;

				};
				aSpan[nub2].onmousemove=function(ev)
				{
					var iDis=ev.clientY-iStart;
					
					var iNub=iDis>0?1:-1;

					if(this.startTop+iDis>=0 && this.startTop+iDis< (iLiHeight-iSpanHeight))
					{
						for(var j=0;j<aSpan.length;j++)
						{
							if(Math.abs(iDis)>Math.abs(nub2-j))
							{
								aSpan[j].style.top=aSpan[j].startTop+(Math.abs(iDis)-Math.abs(nub2-j))*iNub+"px";
							}
							else
							{
								aSpan[j].style.top=aSpan[j].startTop+"px";
							}

						}
					}
				};
				aSpan[nub2].onmouseout=function(ev)
				{
					for(var j=0;j<aSpan.length;j++)
					{
						starMove(aSpan[j],{top:aSpan[j].startTop},500,"elasticOut");
					}
				};	
			})(aSpan,j);
		}		
	}
};