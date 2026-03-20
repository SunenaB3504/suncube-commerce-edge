$apps = @("commerce-hub", "accounts", "bst", "economics", "english", "entrance-pro", "phys-ed")

foreach ($app in $apps) {
    Write-Host "Building $app..." -ForegroundColor Cyan
    Set-Location "apps/$app"
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Build failed for $app" -ForegroundColor Red
        exit $LASTEXITCODE
    }
    Set-Location "../../"
}

Write-Host "All builds completed successfully. Running consolidation..." -ForegroundColor Green
powershell -ExecutionPolicy Bypass -File scripts/consolidate-deploy.ps1
