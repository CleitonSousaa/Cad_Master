# CRUD Project

## Descrição
Este é um projeto de CRUD básico desenvolvido em [sua tecnologia], que permite realizar operações de **Create**, **Read**, **Update** e **Delete** sobre uma base de dados.

### Funcionalidades
- Criar novos registros
- Ler registros existentes
- Atualizar registros
- Excluir registros

## Estrutura do Projeto

```bash
crud-project/
├── src/
│   ├── app.py             # Código principal do CRUD
│   ├── models/            # Modelos de banco de dados
│   ├── routes/            # Rotas da API
│   └── templates/         # Templates HTML (se aplicável)
├── migrations/            # Scripts de migração (opcional)
├── sql/                   # Scripts SQL para criar e popular o banco
│   ├── schema.sql         # Estrutura do banco de dados
│   └── seeds.sql          # Dados iniciais
├── tests/                 # Testes unitários
├── .gitignore             # Arquivo para ignorar arquivos desnecessários
├── requirements.txt       # Dependências do projeto
├── README.md              # Arquivo de apresentação
└── LICENSE                # Licença do projeto   
```


# Instalação

1. Clone este repositório:  
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Instale as dependências:
```bash
pip install -r requirements.txt
```
3. Execute o projeto:
```bash
python src/app.py
```

# Configuração do Banco de Dados
Para criar as tabelas e inserir os dados iniciais, use os scripts SQL que estão na pasta sql/:

* schema.sql: Criação das tabelas
* seeds.sql: Dados iniciais


# Testes 
Execute os testes com o seguinte comando:
```bash
pytest tests/
```

# Contribuição
Contribuições são bem-vindas! Abra uma issue ou envie um pull request.

# Licença
Este projeto está licenciado sob a licença MIT.

