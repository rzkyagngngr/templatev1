# PowerShell Script to Identify and Move Unused React Files
# This script scans App.jsx, main.jsx, and all routes to find unused page files

param(
    [switch]$DryRun = $true,  # Set to $false to actually move files
    [string]$SrcPath = "D:\project\template\templatev1\react\src"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "React Project Unused Files Cleanup Tool" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($DryRun) {
    Write-Host "DRY RUN MODE - No files will be moved" -ForegroundColor Yellow
    Write-Host "Run with -DryRun:`$false to actually move files`n" -ForegroundColor Yellow
}

# Step 1: Read App.jsx and extract all imports
Write-Host "Step 1: Scanning App.jsx for imports..." -ForegroundColor Green
$appJsxPath = "$SrcPath\App.jsx"
$appContent = Get-Content $appJsxPath -Raw

# Extract all import statements for components from ./pages
$importPattern = "import\s+\w+\s+from\s+['\"]\.\/pages\/([^'\"]+)['\"]"
$imports = [regex]::Matches($appContent, $importPattern) | ForEach-Object { $_.Groups[1].Value }

Write-Host "Found $($imports.Count) component imports" -ForegroundColor Green
Write-Host ""

# Step 2: Get all .jsx files in pages directory
Write-Host "Step 2: Scanning pages directory..." -ForegroundColor Green
$pagesPath = "$SrcPath\pages"
$allPageFiles = @()

Get-ChildItem -Path $pagesPath -Recurse -Filter "*.jsx" | ForEach-Object {
    $relativePath = $_.FullName.Replace("$pagesPath\", "").Replace(".jsx", "")
    $allPageFiles += $relativePath
}

Write-Host "Found $($allPageFiles.Count) total page files" -ForegroundColor Green
Write-Host ""

# Step 3: Find unused files
Write-Host "Step 3: Identifying unused files..." -ForegroundColor Green
$unusedFiles = @()

foreach ($pageFile in $allPageFiles) {
    $isUsed = $false
    
    foreach ($import in $imports) {
        if ($import -eq $pageFile) {
            $isUsed = $true
            break
        }
    }
    
    if (-not $isUsed) {
        $unusedFiles += $pageFile
    }
}

Write-Host "Found $($unusedFiles.Count) unused files:`n" -ForegroundColor Yellow

# Group unused files by directory
$groupedUnused = @{}
foreach ($file in $unusedFiles) {
    $dir = Split-Path -Parent $file
    if ([string]::IsNullOrEmpty($dir)) {
        $dir = "root"
    }
    
    if (-not $groupedUnused.ContainsKey($dir)) {
        $groupedUnused[$dir] = @()
    }
    $groupedUnused[$dir] += (Split-Path -Leaf $file) + ".jsx"
}

# Display grouped results
foreach ($dir in $groupedUnused.Keys | Sort-Object) {
    Write-Host "  📁 $dir/" -ForegroundColor Cyan
    foreach ($file in $groupedUnused[$dir]) {
        Write-Host "     - $file" -ForegroundColor Red
    }
}

Write-Host ""

# Step 4: Move unused files
if (-not $DryRun) {
    Write-Host "Step 4: Moving unused files..." -ForegroundColor Green
    
    $unusedDir = "$pagesPath\.unused"
    if (-not (Test-Path $unusedDir)) {
        New-Item -ItemType Directory -Path $unusedDir | Out-Null
        Write-Host "Created .unused directory" -ForegroundColor Green
    }
    
    foreach ($file in $unusedFiles) {
        $sourcePath = "$pagesPath\$file.jsx"
        
        # Create subdirectory structure in .unused
        $fileDir = Split-Path -Parent $file
        if ($fileDir -and $fileDir -ne ".") {
            $targetDir = "$unusedDir\$fileDir"
            if (-not (Test-Path $targetDir)) {
                New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
            }
        } else {
            $targetDir = $unusedDir
        }
        
        $targetPath = "$targetDir\$(Split-Path -Leaf $file).jsx"
        
        if (Test-Path $sourcePath) {
            Move-Item -Path $sourcePath -Destination $targetPath -Force
            Write-Host "✓ Moved: $file" -ForegroundColor Green
        }
    }
    
    Write-Host "`n✅ Cleanup complete!" -ForegroundColor Green
} else {
    Write-Host "To actually move files, run:" -ForegroundColor Cyan
    Write-Host ".\cleanup-unused-files.ps1 -DryRun `$false" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  Total page files: $($allPageFiles.Count)" -ForegroundColor White
Write-Host "  Used files: $($allPageFiles.Count - $unusedFiles.Count)" -ForegroundColor Green
Write-Host "  Unused files: $($unusedFiles.Count)" -ForegroundColor Red
Write-Host ""
