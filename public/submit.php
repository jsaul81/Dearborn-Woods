<?php
// Contact form handler for dearbornwoodsnh.com
// Receives POST from src/pages/Contact.tsx and sends an email to the
// info@dearbornwoodsnh.com mailbox via Hostinger's PHP mail() (which routes
// through the local SMTP relay tied to the domain's mailbox).
//
// Deploy: this file ships from Vite's public/ folder to dist/submit.php and
// then up to Hostinger's public_html/submit.php. PHP is executed by the
// shared-hosting Apache; nothing else to wire up.

header('Content-Type: application/json; charset=UTF-8');

$INBOX = 'info@dearbornwoodsnh.com';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Honeypot — humans don't see/fill the "website" field; bots do.
// Pretend success so the bot doesn't retry, but drop the message.
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['ok' => true]);
    exit;
}

$name     = trim((string)($_POST['name']     ?? ''));
$email    = trim((string)($_POST['email']    ?? ''));
$phone    = trim((string)($_POST['phone']    ?? ''));
$interest = trim((string)($_POST['interest'] ?? ''));
$message  = trim((string)($_POST['message']  ?? ''));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide your name and a valid email.']);
    exit;
}

// Strip any header-injection attempts (CR/LF) before using values in headers.
$cleanForHeader = function ($v) {
    return preg_replace('/[\r\n]+/', ' ', $v);
};
$safeName  = $cleanForHeader($name);
$safeEmail = $cleanForHeader($email);

$subject = "Dearborn Woods inquiry from $safeName";

$body  = "Name:     $name\n";
$body .= "Email:    $email\n";
$body .= "Phone:    $phone\n";
$body .= "Interest: $interest\n\n";
$body .= "Message:\n$message\n";

// From: must be the domain's own mailbox so SPF/DKIM pass on Hostinger.
// Reply-To: lets Christie / Jared just hit Reply to write back to the user.
$headers  = "From: Dearborn Woods <$INBOX>\r\n";
$headers .= "Reply-To: $safeName <$safeEmail>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: dearbornwoodsnh.com contact form\r\n";

$sent = @mail($INBOX, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Could not send right now. Please email info@dearbornwoodsnh.com directly.']);
}
