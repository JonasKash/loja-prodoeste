#!/bin/bash

# Script de Deploy para Prodoeste App
# Execute este script para fazer o build e servir a aplicação

echo "🚀 Iniciando deploy da Prodoeste App..."

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale o Node.js primeiro."
    exit 1
fi

# Verificar se o npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ npm não encontrado. Por favor, instale o npm primeiro."
    exit 1
fi

echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências."
    exit 1
fi

echo "🔨 Fazendo build da aplicação..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro ao fazer build da aplicação."
    exit 1
fi

echo "✅ Build concluído com sucesso!"

# Verificar se a porta 5000 está em uso
if lsof -Pi :5000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Porta 5000 já está em uso. Tentando parar o processo..."
    lsof -ti:5000 | xargs kill -9
    sleep 2
fi

echo "🌐 Iniciando servidor na porta 5000..."
echo "📋 URL da aplicação: http://localhost:5000/loja"
echo "🔗 Para usar com ngrok, execute: ngrok http 5000"
echo "📖 Para mais informações, consulte o arquivo NGROK_SETUP.md"

# Iniciar o servidor
npx serve dist -p 5000 