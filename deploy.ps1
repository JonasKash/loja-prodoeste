# Script de Deploy para Prodoeste App
# Execute este script para fazer o build e servir a aplicação

Write-Host "🚀 Iniciando deploy da Prodoeste App..." -ForegroundColor Green

# Verificar se o Node.js está instalado
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js não encontrado. Por favor, instale o Node.js primeiro." -ForegroundColor Red
    exit 1
}

# Verificar se o npm está instalado
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm não encontrado. Por favor, instale o npm primeiro." -ForegroundColor Red
    exit 1
}

Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao instalar dependências." -ForegroundColor Red
    exit 1
}

Write-Host "🔨 Fazendo build da aplicação..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Erro ao fazer build da aplicação." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build concluído com sucesso!" -ForegroundColor Green

# Verificar se a porta 5000 está em uso
$portInUse = Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "⚠️  Porta 5000 já está em uso. Tentando parar o processo..." -ForegroundColor Yellow
    $process = Get-Process -Id $portInUse.OwningProcess -ErrorAction SilentlyContinue
    if ($process) {
        Stop-Process -Id $process.Id -Force
        Start-Sleep -Seconds 2
    }
}

Write-Host "🌐 Iniciando servidor na porta 5000..." -ForegroundColor Yellow
Write-Host "📋 URL da aplicação: http://localhost:5000/loja" -ForegroundColor Cyan
Write-Host "🔗 Para usar com ngrok, execute: ngrok http 5000" -ForegroundColor Cyan
Write-Host "📖 Para mais informações, consulte o arquivo NGROK_SETUP.md" -ForegroundColor Cyan

# Iniciar o servidor
npx serve dist -p 5000 