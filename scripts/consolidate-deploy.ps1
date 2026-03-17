# Suncube Commerce Edge Deployment Script
# This script consolidates all monorepo app builds into a single deployment folder.

$deployDir = "deployment_root"
if (Test-Path $deployDir) { Remove-Item -Recurse -Force $deployDir }
New-Item -ItemType Directory -Path $deployDir

# 1. Copy Commerce Hub (Landing Page) to root
Copy-Item -Path "apps/commerce-hub/dist/*" -Destination $deployDir -Recurse -Force

# 2. Copy Subject Apps to their respective subfolders
$apps = @("accounts", "economics", "bst", "english", "phys-ed", "entrance-pro")

foreach ($app in $apps) {
    $appDist = "apps/$app/dist"
    $appDest = Join-Path $deployDir $app
    
    if (Test-Path $appDist) {
        Write-Host "Deploying $app..."
        New-Item -ItemType Directory -Path $appDest
        Copy-Item -Path "$appDist/*" -Destination $appDest -Recurse -Force
    } else {
        Write-Warning "Dist folder for $app not found!"
    }
}

Write-Host "Deployment folder '$deployDir' is ready."
