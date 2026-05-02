create database Anyboxd;
use Anyboxd;

create table usuario (
	idUsuario int primary key auto_increment,
    nome varchar(60),
    username varchar(45) unique,
    email varchar(60) unique,
    senha varchar(255)
    );
    
create table post (
	idPost int primary key auto_increment,
    titulo varchar(45),
    imagem varchar(300),
    texto varchar(255),
    nota int,
    dtPost datetime default current_timestamp,
    fkUserPost int, 
    constraint fk_user_post
		foreign key (fkUserPost) references usuario(idUsuario)
    );
    
create table curtida (
	fkPost int,
	constraint fk_curtida_post
		foreign key (fkPost) references post(idPost) ON DELETE CASCADE,
	fkUsuario int,
	constraint fk_curtida_usuario
		foreign key (fkUsuario) references usuario(idUsuario) ON DELETE CASCADE,
	PRIMARY KEY (fkPost, fkUsuario)
	);
    
create table comentario (
	idComentario int primary key auto_increment,
    texto varchar(255),
    fkUserComentario int,
    constraint fk_user_comentario 
		foreign key (fkUserComentario) references usuario(idUsuario),
    fkPostPai int,
	constraint fk_post_pai
			foreign key (fkPostPai) references post(idPost) ON DELETE CASCADE,
	fkComentarioPai int,
    constraint fk_comentario_pai
		foreign key (fkComentarioPai) references comentario(idComentario) ON DELETE CASCADE
	);
    
select idPost, titulo, imagem, texto, nota from post order by dtPost;
