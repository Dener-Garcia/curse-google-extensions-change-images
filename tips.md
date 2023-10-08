# Criando uma extensão para Google Chrome

Pré-requisitos para criar uma extensão do google:

- Ter um arquivo manifest.json com algumas configurações básicas.

``` 
{
    "manifest_version": 3,
    "name": "Minha extensao",
    "description": "Extensão criada com o curso do Manual do Dev.",
    "version": "1.0",
    "action": {
        "default_popup": "index.html"
    },
    "permissions": ["scripting", "activeTab"],
    "commands": {
      "_execute_action": {
        "suggested_key": {
          "default": "Ctrl+U",
          "mac": "Command+U"
        }
      }
    }
} 
```

### Adicionando a sua extensão ao Chrome

Agora vamos adicionar o nosso arquivo de extensão ao Google.

- Abra suas extensões no browser
- Habilite o modo developer
- Click em Load unpacked
- Selecione a pasta do projeto

### Manipulando a aba do Chrome

As funções de manipulação na janela do chrome são assíncronas então devemos usar o async e await, as ações são feitas através de uma query, veja o exemplo abaixo

> const [tab] = await chrome.tabs.query({active: true, currentWindows: true})

- active: janela que esta ativa
- currentWindow: a janela que estou naquele momento
- const [tab] as ações retornan um array

Lembre-se que a única função que realmente vai ser interpretada pela extensão é a replaceImages tudo que for fora dela a extensão não "enxerga".
Para passar parãmetros para a função devemos usar o args.