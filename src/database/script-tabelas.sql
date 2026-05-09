create database Anyboxd;
use Anyboxd;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(60) not null,
    username varchar(45) unique not null,
    email varchar(60) unique not null,
    senha varchar(255) not null
    );
    
create table post (
	idPost int primary key auto_increment,
    titulo varchar(45) not null,
    imagem varchar(300),
    texto varchar(255),
    nota int not null,
    dtPost datetime default current_timestamp,
    fkUserPost int not null, 
    constraint fk_user_post
		foreign key (fkUserPost) 
			references usuario(idUsuario) ON DELETE CASCADE
    );
    
create table curtida (
	idCurtida int,
	fkPost int not null,
	dtCurtida datetime default current_timestamp,
	constraint fk_curtida_post
		foreign key (fkPost) 
			references post(idPost) ON DELETE CASCADE,
	fkUsuario int not null,
	constraint fk_curtida_usuario
		foreign key (fkUsuario) 
			references usuario(idUsuario) ON DELETE CASCADE,
	constraint pk_curtida
		PRIMARY KEY (idCurtida, fkPost, fkUsuario)
	);
    
create table comentario (
	idComentario int primary key auto_increment,
    texto varchar(255) not null,
    fkUserComentario int not null,
    constraint fk_user_comentario 
		foreign key (fkUserComentario) 
			references usuario(idUsuario),
    fkPostPai int,
	constraint fk_post_pai
		foreign key (fkPostPai) 
            references post(idPost) ON DELETE CASCADE,
	fkComentarioPai int,
    constraint fk_comentario_pai
		foreign key (fkComentarioPai) 
			references comentario(idComentario) ON DELETE CASCADE
	);
    
    
