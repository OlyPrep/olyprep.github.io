@echo off
if exist zola.exe goto :run

powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://github.com/getzola/zola/releases/download/v0.21.0/zola-v0.21.0-x86_64-pc-windows-msvc.zip' -OutFile 'zola.zip'; Expand-Archive -Path 'zola.zip' -DestinationPath '.' -Force; Remove-Item 'zola.zip'" >nul 2>&1

:run
zola.exe %*
