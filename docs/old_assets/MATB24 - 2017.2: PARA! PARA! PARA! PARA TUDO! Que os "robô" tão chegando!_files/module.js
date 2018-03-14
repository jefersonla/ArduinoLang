M.block_accessibility={ATBAR_SRC:'https://core.atbar.org/atbar/en/latest/atbar.min.js',DEFAULT_FONTSIZE:100,MAX_FONTSIZE:197,MIN_FONTSIZE:77,DAFAULT_PX_FONTSIZE:13,MAX_PX_FONTSIZE:26,MIN_PX_FONTSIZE:10+1,MAIN_SELECTOR:'#page',sheetnode:'',instance_id:'',defaultsize:null,watch:null,debug:false,transactionsCount:0,init:function(Y,autoload_atbar,instance_id){this.Y=Y;this.instance_id=instance_id;this.sheetnode=Y.one('link[href="'+M.cfg.wwwroot+'/blocks/accessibility/userstyles.php?instance_id='+instance_id+'"]');this.defaultsize=M.block_accessibility.DEFAULT_FONTSIZE;Y.all('#block_accessibility_textresize a').on('click',function(e){if(!e.target.hasClass('disabled'))M.block_accessibility.changesize(e.target)});Y.all('#block_accessibility_changecolour a').on('click',function(e){if(!e.target.hasClass('disabled'))M.block_accessibility.changecolour(e.target)});Y.all('#accessibility_controls a').each(function(node){node.removeAttribute('href')});if(Y.one('#atbar_auto')!==null){Y.one('#atbar_auto').on('click',function(e){if(e.target.get('checked')){M.block_accessibility.atbar_autoload('on')}else M.block_accessibility.atbar_autoload('off')});Y.one('#block_accessibility_launchtoolbar').on('click',function(){M.block_accessibility.load_atbar();Y.one('#block_accessibility_textresize').setStyle('display','none');Y.one('#block_accessibility_changecolour').setStyle('display','none');M.block_accessibility.watch_atbar_for_close()});if(autoload_atbar){M.block_accessibility.load_atbar();Y.one('#block_accessibility_textresize').setStyle('display','none');Y.one('#block_accessibility_changecolour').setStyle('display','none');setTimeout("M.block_accessibility.watch_atbar_for_close();",1e3)}}},load_atbar:function(){var jf=document.createElement('script');jf.src=M.block_accessibility.ATBAR_SRC;jf.type='text/javascript';jf.id='ToolBar';document.getElementsByTagName('head')[0].appendChild(jf)},show_message:function(msg){this.Y.one('#block_accessibility_message').setContent(msg);if(msg)setTimeout("M.block_accessibility.show_message('')",5e3)},savesize:function(){this.Y.io(M.cfg.wwwroot+'/blocks/accessibility/database.php',{data:'op=save&size=true&scheme=true',method:'get',on:{success:function(id,o){M.block_accessibility.show_message(M.util.get_string('saved','block_accessibility'))},failure:function(id,o){alert(M.util.get_string('jsnosave','block_accessibility')+' '+o.status+' '+o.statusText)},start:M.block_accessibility.show_loading,end:M.block_accessibility.hide_loading}})},toggle_textsizer:function(id,op){var button=this.Y.one('#block_accessibility_'+id);if(op=='on'){if(button.hasClass('disabled'))button.removeClass('disabled')}else if(op=='off')if(!button.hasClass('disabled'))button.addClass('disabled')},changesize:function(button){Y=this.Y;switch(button.get('id')){case"block_accessibility_inc":Y.io(M.cfg.wwwroot+'/blocks/accessibility/changesize.php',{data:'op=inc&cur='+this.defaultsize,method:'get',on:{success:function(id,o){if(!(o.response===undefined)&&o.response.length>0)alert(M.util.get_string('jsnotloggedin','block_accessibility')+': '+o.status+' '+o.statusText);M.block_accessibility.reload_stylesheet();var new_fontsize=M.block_accessibility.get_current_fontsize(M.block_accessibility.MAIN_SELECTOR);M.block_accessibility.log('Increasing size to '+new_fontsize);var min_fontsize=M.block_accessibility.MIN_PX_FONTSIZE,max_fontsize=M.block_accessibility.MAX_PX_FONTSIZE;if(new_fontsize==M.block_accessibility.defaultsize){M.block_accessibility.toggle_textsizer('reset','off')}else M.block_accessibility.toggle_textsizer('reset','on');if(new_fontsize>=max_fontsize)M.block_accessibility.toggle_textsizer('inc','off');M.block_accessibility.toggle_textsizer('dec','on');M.block_accessibility.toggle_textsizer('save','on')},failure:function(o){alert(M.util.get_string('jsnosize','block_accessibility')+': '+o.status+' '+o.statusText)},start:M.block_accessibility.show_loading,end:M.block_accessibility.hide_loading}});break;case"block_accessibility_dec":Y.io(M.cfg.wwwroot+'/blocks/accessibility/changesize.php',{data:'op=dec&cur='+this.defaultsize,method:'get',on:{success:function(id,o){if(!(o.response===undefined)&&o.response.length>0)alert(M.util.get_string('jsnotloggedin','block_accessibility')+': '+o.status+' '+o.statusText);M.block_accessibility.reload_stylesheet();var new_fontsize=M.block_accessibility.get_current_fontsize(M.block_accessibility.MAIN_SELECTOR);M.block_accessibility.log('Decreasing size to '+new_fontsize);var min_fontsize=M.block_accessibility.MIN_PX_FONTSIZE,max_fontsize=M.block_accessibility.MAX_PX_FONTSIZE;if(new_fontsize==M.block_accessibility.defaultsize){M.block_accessibility.toggle_textsizer('reset','off')}else M.block_accessibility.toggle_textsizer('reset','on');if(new_fontsize<=min_fontsize)M.block_accessibility.toggle_textsizer('dec','off');M.block_accessibility.toggle_textsizer('inc','on');M.block_accessibility.toggle_textsizer('save','on')},failure:function(id,o){alert(M.util.get_string('jsnosize','block_accessibility')+': '+o.status+' '+o.statusText)},start:M.block_accessibility.show_loading,end:M.block_accessibility.hide_loading}});break;case"block_accessibility_reset":Y.io(M.cfg.wwwroot+'/blocks/accessibility/changesize.php',{data:'op=reset&cur='+this.defaultsize,method:'get',on:{success:function(id,o){if(!(o.response===undefined)&&o.response.length>0)alert(M.util.get_string('jsnotloggedin','block_accessibility')+': '+o.status+' '+o.statusText);M.block_accessibility.reload_stylesheet();var new_fontsize=M.block_accessibility.get_current_fontsize(M.block_accessibility.MAIN_SELECTOR);M.block_accessibility.log('Resetting size to '+new_fontsize);var min_fontsize=M.block_accessibility.MIN_PX_FONTSIZE,max_fontsize=M.block_accessibility.MAX_PX_FONTSIZE;M.block_accessibility.toggle_textsizer('reset','off');if(new_fontsize<=min_fontsize){M.block_accessibility.toggle_textsizer('dec','on')}else if(new_fontsize>=max_fontsize)M.block_accessibility.toggle_textsizer('inc','on');M.block_accessibility.toggle_textsizer('save','off')},failure:function(id,o){alert(M.util.get_string('jsnosize','block_accessibility')+': '+o.status+' '+o.statusText)},start:M.block_accessibility.show_loading,end:M.block_accessibility.hide_loading}});break;case"block_accessibility_save":M.block_accessibility.savesize();break}},changecolour:function(button){Y=this.Y;scheme=button.get('id').substring(26);Y.io(M.cfg.wwwroot+'/blocks/accessibility/changecolour.php',{data:'scheme='+scheme,method:'get',on:{success:function(id,o){if(!(o.response===undefined)&&o.response.length>0)alert(M.util.get_string('jsnotloggedin','block_accessibility')+': '+o.status+' '+o.statusText);M.block_accessibility.reload_stylesheet();if(scheme==1){M.block_accessibility.toggle_textsizer('save','off');M.block_accessibility.toggle_textsizer('colour1','off')}else{M.block_accessibility.toggle_textsizer('save','on');M.block_accessibility.toggle_textsizer('colour1','on')}},failure:function(id,o){alert(get_string('jsnocolour','block_accessibility')+': '+o.status+' '+o.statusText)},start:M.block_accessibility.show_loading,end:M.block_accessibility.hide_loading}})},atbar_autoload:function(op){if(op=='on'){this.Y.io(M.cfg.wwwroot+'/blocks/accessibility/database.php',{data:'op=save&atbar=true',method:'get',on:{success:function(id,o){M.block_accessibility.show_message(M.util.get_string('saved','block_accessibility'))},failure:function(id,o){if(o.status!='404')alert(M.util.get_string('jsnosave','block_accessibility')+': '+o.status+' '+o.statusText)},start:M.block_accessibility.show_loading,end:M.block_accessibility.hide_loading}})}else if(op=='off')this.Y.io(M.cfg.wwwroot+'/blocks/accessibility/database.php',{data:'op=reset&atbar=true',method:'get',on:{success:function(id,o){M.block_accessibility.show_message(M.util.get_string('reset','block_accessibility'))},failure:function(id,o){if(o.status!='404')alert(M.util.get_string('jsnoreset','block_accessibility')+': '+o.status+' '+o.statusText)},start:M.block_accessibility.show_loading,end:M.block_accessibility.hide_loading}})},watch_atbar_for_close:function(){Y=this.Y;this.watch=setInterval(function(){if(typeof AtKit!=='undefined')if(AtKit.isRendered()){Y.one('#block_accessibility_textresize').setStyle('display','block');Y.one('#block_accessibility_changecolour').setStyle('display','block');clearInterval(M.block_accessibility.watch)}},1e3)},log:function(data){if(this.debug)console.log(data)},reload_stylesheet:function(){var cache_prevention_salt=new Date().getTime(),oldStylesheet=M.block_accessibility.sheetnode,newStylesheet=null,cssURL=M.cfg.wwwroot+'/blocks/accessibility/userstyles.php?instance_id='+M.block_accessibility.instance_id+'&v='+cache_prevention_salt;if(document.createStyleSheet){oldStylesheet.set('href',cssURL)}else{newStylesheet=oldStylesheet.cloneNode(true);newStylesheet.set('href',cssURL);this.Y.one('head').append(newStylesheet);newStylesheet.getDOMNode().onload=function(){oldStylesheet.remove(true)};M.block_accessibility.sheetnode=newStylesheet}},get_current_fontsize:function(root_element){var currentsize=M.block_accessibility.DEFAULT_FONTSIZE,defaultsize=Y.one(root_element).getComputedStyle('fontSize');if(defaultsize.substr(-2)=='px'){currentsize=defaultsize.substr(0,defaultsize.length-2)}else if(defaultsize.substr(-1)=='%')currentsize=defaultsize.substr(0,defaultsize.length-1);return currentsize},show_loading:function(){this.transactionsCount++;Y.one('#loader-icon').setStyle('display','block');Y.one('#accessibility_controls').setStyle('opacity','0.2')},hide_loading:function(){if(this.transactionsCount<0){this.transactionsCount--}else this.transactionsCount=0;if(this.transactionsCount==0){Y.one('#loader-icon').setStyle('display','none');Y.one('#accessibility_controls').setStyle('opacity','1')}}}