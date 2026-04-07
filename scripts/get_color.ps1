Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\Guille\Desktop\Seorin Lab\public\logo.png")
$bmp = New-Object System.Drawing.Bitmap($img)

$w = $bmp.Width - 1
$h = $bmp.Height - 1

$xs = @(0, 5, 10, 50, $w)
$ys = @(0, 5, 10, 50, $h)

foreach ($x in $xs) {
    foreach ($y in $ys) {
        $px = $bmp.GetPixel($x, $y)
        $hex = "#{0:X2}{1:X2}{2:X2}" -f $px.R, $px.G, $px.B
        Write-Host "Pixel ($x,$y): $hex"
    }
}

$bmp.Dispose()
$img.Dispose()
