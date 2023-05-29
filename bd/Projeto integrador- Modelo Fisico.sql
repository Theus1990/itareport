CREATE TABLE Usuario (
    Nome VARCHAR(70) not null,
    CPF VARCHAR(15) not null PRIMARY KEY,
    email VARCHAR(100) not null,
    senha VARCHAR(30) not null
);

CREATE TABLE Categoria (
    Id_categoria SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(50)
);

CREATE TABLE Endereco (
    id_endereco SERIAL unique PRIMARY KEY,
    rua VARCHAR(100),
    numero VARCHAR(5),
    bairro VARCHAR(20),
    cidade VARCHAR(30),
    Coordenadas VARCHAR(50)
);

CREATE TABLE Report (
    Id_report serial PRIMARY KEY,
    Titulo VARCHAR(100),
    Descricao VARCHAR(256),
    fk_Usuario_CPF VARCHAR(15),
    fk_Categoria_Id_categoria INT,
    fk_Endereco_id_endereco INT,
	FOREIGN KEY (fk_Usuario_CPF)
      REFERENCES Usuario(CPF),
	FOREIGN KEY (fk_Categoria_Id_categoria)
      REFERENCES Categoria(Id_categoria),
	FOREIGN KEY (fk_Endereco_id_endereco)
      REFERENCES Endereco(id_endereco)
);

CREATE TABLE Imagem (
    Id_imagem SERIAL PRIMARY KEY,
    diretorio_imagem VARCHAR(256)
);

CREATE TABLE report_imagem (
    fk_Report_Id_report INT,
    fk_Imagem_Id_imagem INT,
	FOREIGN KEY (fk_Report_Id_report)
      REFERENCES Report(Id_report),
	FOREIGN KEY (fk_Imagem_Id_imagem)
      REFERENCES Imagem(Id_imagem)
	
);
