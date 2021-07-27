<?php
function iterateDirectory($dir, $level) {
    if ($dir != ".") {
        echo "<details style='padding-left:" . strval($level * 10) . "px'>";
        echo "<summary style='font-weight:bold'>" . $dir . "</summary>\n";
    }
    foreach (scandir($dir) as $fileInfo) {
        $path = $dir."/".$fileInfo;
        if ($fileInfo == "." || $fileInfo == ".." || str_ends_with($fileInfo, ".php")) {
            continue;
        }
        else if (is_dir($path)) {
            iterateDirectory($path, $level+1);
        }
        else {
            list($width, $height, $type, $attr) = getimagesize($dir."/".$fileInfo);
            $link = "<a href='" . $path . "' target='_blank'>" . $fileInfo . "</a>";
            $size = "(".strval($width)."x".strval($height).")";
            echo "<div style='padding-left:" . strval(($level+1) * 10) . "px'>" . $link . " " . $size . "</div>\n";
        }
        
    }
    if ($dir != ".") {
        echo "</details>";
    }
}
iterateDirectory(".", -1);
?>