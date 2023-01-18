<script>
import Fa from 'svelte-fa'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<Fa icon={faFlag} />
<Fa icon={faGithub} />

<form method="POST" action="?/foo">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </form> 

  <form method="POST" action="?/bar" style="margin-top:100px;">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="sdfsdfsdf"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Dosdfsdfsdfe"><br><br>
    <input type="submit" value="Submit">
  </form> 