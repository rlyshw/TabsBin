var thisPanel = browser.extension.getURL("sidebar/sidebar.html")
browser.browserAction.onClicked.addListener(()=>{
  console.log(thisPanel)
  browser.sidebarAction.setPanel({panel:thisPanel})
  /*browser.sidebarAction.isOpen({}).then(isOpen=>{
    if(isOpen){
      browser.sidebarAction.getPanel({}).then(panel=>{
        console.log(panel)
      })
    } else {
      browser.sidebarAction.open()
    }
  })*/
})