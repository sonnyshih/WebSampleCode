<?php
// 參考: https://gist.github.com/odan/c1dc2798ef9cedb9fedd09cdfe6e8e76

$data = 'plain text or binary data';


// ECB encrypts each block of data independently and
// the same plaintext block will result in the same ciphertext block.
//$method = 'AES-256-ECB';

// CBC has an IV and thus needs randomness every time a message is encrypted
$method = 'AES-256-CBC';


// simple password hash
// $password = 'secret-password-as-string';
// $key = hash('sha256', $password);
$key = "ac181c517bdf24ce053556bb280a2dcb";

// Most secure
// You must store this secret random key in a safe place of your system.
//$key = openssl_random_pseudo_bytes(openssl_cipher_iv_length($method));

echo "before data: " . $data. "<br>\n";

echo "Method: " . $method . "<br>\n";

$encrypted = encrypt($data, $key, $method);
echo "Encrypted: ". $encrypted . "<br>\n";

$decrypted = decrypt($encrypted, $key, $method);
echo "Decrypted: ".  $decrypted . "<br>\n"; // plain text


function encrypt($data, $key, $method) {
    $ivSize = openssl_cipher_iv_length($method);
    $iv = openssl_random_pseudo_bytes($ivSize);
    
    $encrypted = openssl_encrypt($data, $method, $key, OPENSSL_RAW_DATA, $iv);
    
    // For storage/transmission, we simply concatenate the IV and cipher text
    $encrypted = base64_encode($iv . $encrypted);
    
    return $encrypted;
}

function decrypt($data, $key, $method) {
    $data = base64_decode($data);
    $ivSize = openssl_cipher_iv_length($method);
    $iv = substr($data, 0, $ivSize);
    $data = openssl_decrypt(substr($data, $ivSize), $method, $key, OPENSSL_RAW_DATA, $iv);
    
    return $data;
}
?>