<?php
// Dosya adına izin verilen karakterleri belirleyin (sadece alfanumerik karakterler kabul edilir)
$allowed_files = ["resume", "turkish_resume"]; // İzin verilen dosya adları listesi

// "file" parametresini kontrol et
if (isset($_GET["file"]) && in_array($_GET["file"], $allowed_files)) {
    $file = $_GET["file"] . ".pdf"; // Dosya adı .pdf olarak ayarlanır

    // Dosya gerçekten mevcutsa indirme başlasın
    if (file_exists("assets/cv/" . $file)) {
        $filepath = "assets/cv/" . $file;

        header("Content-Type: application/octet-stream");
        header("Content-Disposition: attachment; filename=" . urlencode($file));
        header("Content-Description: File Transfer");
        header("Content-Length: " . filesize($filepath));
        flush();

        // Dosyayı okuyup çıktı olarak gönder
        $fp = fopen($filepath, "rb");
        while (!feof($fp)) {
            echo fread($fp, 65536);
            flush();
        }
        fclose($fp);
        exit;
    } else {
        die("Error: File not found.");
    }
} else {
    die("Invalid file request.");
}
?>