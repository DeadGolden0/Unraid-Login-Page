//Custom Text Header //
// ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____  ____  ______  __________    _____  __
   / __ )/ __ \/ __ ) \/ / ____/ /   /  _/ |/ /
  / __  / / / / __  |\  / /_  / /    / / |   / 
 / /_/ / /_/ / /_/ / / / __/ / /____/ / /   |  
/_____/\____/_____/ /_/_/   /_____/___//_/|_|  
                                               
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header