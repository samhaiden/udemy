<?php

require "twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

$consumerkey = "SpiLvnzqVvhMuP07peN3mW0m7";

$consumersecretkey = "BuxJDsjy8ng6WS2As61CyqNsD0jI2BbhSfBBVX2yTJju7Z3Hqx";

$accesstoken = "3319419931-BdU2T5wIxjHRFsjY1nXLK1lvB2hpaUz3qoeyODn";

$accesstokensecret = "wjtvpGL0ZISmhCURFMZ7mPmVSQQvZ4WjxiZjirIVyqgyT";

$connection = new TwitterOAuth($consumerkey, $consumersecretkey, $accesstoken, $accesstokensecret);

$content = $connection->get("account/verify_credentials");

$statuses = $connection->post("statuses/update", ["status" => "Hey everyone! I am testing a new app."]);

print_r($content);

?>