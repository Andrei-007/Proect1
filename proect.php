<FilesMatch "proect.html$">
    ForceType application/x-httpd-php
</FilesMatch>

<?php
session_start();

if(!isset($_SESSION["theme"]))
{
    $_SESSION["theme"] = "light";
}
?>