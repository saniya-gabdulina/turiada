<?php
$method = $_S ERVER['REQUEST_METHOD'];
//Script Foreach
$c = true;
$admin_email = 'saniyakadyrbekova@gmail.com';
$userName = trim($_POST["userName"]);
$userEmail  = trim($_POST["userEmail"]);
$form_subject = 'Заявка с сайта Туриада';
$message = "Новая заявка с сайта ".$userName.$userEmail;
function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}
$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;
// mail($admin_email, adopt($form_subject), $message, $headers );
mail($admin_email, adopt($form_subject), $message, $headers );