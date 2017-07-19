<?php
  require_once 'vzaar/Vzaar.php';

    header ('Content-Type: text/html; charset=utf-8');
    Vzaar::$secret = 'interwood';
    Vzaar::$token = 'RiSIDEQdptsUOo4fnazzquZoVLTvPTjJdeDkhQFzUUdI';
    $user = Vzaar::whoAmI();
    echo $user."<br>";

    var_dump(Vzaar::getUserDetails($user));

    echo "<br>";
    $accountDetails = Vzaar::getAccountDetails(1);
    var_dump($accountDetails);

    echo "<br>";
 
	print_r(Vzaar::getVideoList($user, true, 10));
?>