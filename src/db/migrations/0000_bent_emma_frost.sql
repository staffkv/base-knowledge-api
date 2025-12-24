CREATE TABLE "menu" (
	"id" text PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"categoria" text NOT NULL,
	"descricao" text,
	"possui_variacoes" boolean DEFAULT false,
	"preco_base" numeric(10, 2),
	"variacoes" jsonb,
	"ativo" boolean DEFAULT true NOT NULL,
	"criado_em" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "menu_nome_unique" UNIQUE("nome")
);
