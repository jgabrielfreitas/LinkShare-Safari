function performCommand(event)
{
    if (event.command === "reload-page") {
        var currentURL = event.target.browserWindow.activeTab.url;
        if (currentURL)
            event.target.browserWindow.activeTab.url = currentURL;
    }
}
 
function validateCommand(event)
{
    if (event.command === "reload-page") {
        // Disable the button if there is no URL loaded in the tab.
        event.target.disabled = !event.target.browserWindow.activeTab.url;
    }
}
 
// if event handlers are in the global HTML page,
// register with application:
safari.application.addEventListener("command", performCommand, false);
safari.application.addEventListener("validate", validateCommand, false);
// if event handlers are in an extension bar,
// register with parent window:
// safari.self.browserWindow.addEventListener("command", performCommand, false);
// safari.self.browserWindow.addEventListener("validate", validateCommand, false);