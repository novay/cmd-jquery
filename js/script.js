$(function() {

    var url_home = 'http://novay.web.id/';

    $("#cmd").terminal(function(cmd, term){ command(cmd, term) }, {
        prompt : "C:\\Users\\Novay>",
        greetings:
            "Command Prompt Console [Version jQuery]\n"+
            "(c) 2014 Noviyanto Rachmadi. All rights reserved.\n",
    });

    function command(cmd, term) {
        cmd = cmd.toLowerCase();
        switch (cmd) {
            
            case "":
            break;
            
            case "help":
                term.echo(
                    "ABOUT\t\t\t Display all information about this site."+"\n"+
                    "CLS\t\t\t   Clears the screen."+"\n"+
                    "CONTACT\t\t   Display Website Creator."+"\n"+
                    "EXIT\t\t      Quits the Console program (Through missing place.)."+"\n"+
                    "HELP\t\t\t  Provides Help information for Console commands."+"\n"+
                    "\n"+
                    "For more information on a specific command, type the command-name."+"\n"
                );
            break;
            
            case "about":
                term.echo(
                    "\n"+
                    "Hai There! I am Noviyanto Rachmadi.\n"+
                    "This site is built with jQueryTerminal. \n" +
                    "Credit is always goes to Jakub Jankiewicz as jQueryTerminal creator.\n"+
                    "You can customize this site for free. \nJust follow this link: http://github.com/novay/cmd-jQuery\n"
                );
            break;

            case "contact":
                term.echo(
                    "\n"+
                    "You need some help for build something?" + "\n" +
                    "Create a Website? Administration Application? Information System?" + "\n" +
                    "Just send your needs to me by email at me@novay.web.id" + "\n"
                );
            break;

            case "dir": 
                term.echo(
                    " Volume in this site is hosted by Github"+"\n"+
                    " Volume Serial Number is cmd-jquery.\n\n"+
                    " Directory of C:\\Users\\Novay\n\n"+
                    "11/01/2014\t11:48\t<DIR>\t\t.\n"+
                    "11/01/2014\t11:48\t<DIR>\t\t..\n"+
                    "\t\t\t\t 0 File(s)\t\t\t0 bytes\n\n"
                );
            break;

            case "cd..": 
                term.echo("You don't have permisssion to change directory."+"\n");
            break;

            case "cd ": 
                term.echo("The syntax of the command is incorrect."+"\n");
            break;

            case "exit": 
                $(location).prop('href', url_home);
            break;         

            default: 
                term.echo(
                    "'"+cmd+"' is not recognized as an internal or external command," + "\n" +
                    "operable program or batch file.\n"
                );
            break;
        }
    }
    
});